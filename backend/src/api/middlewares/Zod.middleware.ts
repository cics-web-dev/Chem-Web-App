import { Request, Response, NextFunction } from 'express';
import status from 'http-status';
import { ZodError, ZodSchema } from 'zod';

import { MultipleChoiceSchema, OpenResponseSchema } from '../valiations/question.valiation.js';
import { HttpError } from '../utils/httpError.utils.js';

/**
 * This middleware checks the incoming request for the type of question.
 * If the type is not provided, it will throw an error.
 * If the type is valid, it will forward the request to the ZodValidationMiddleware with the correct schema.
 */
export const TypeCheckerMiddleware = () => (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) throw new HttpError(status.BAD_REQUEST, 'Request body is required');
    if (!req.body.type) throw new HttpError(status.BAD_REQUEST, 'Question type is required');

    switch (req.body.type) {
        case 'MCQ':
            return ZodValidationMiddleware(MultipleChoiceSchema)(req, res, next);
        case 'OR':
            return ZodValidationMiddleware(OpenResponseSchema)(req, res, next);
        default:
            throw new HttpError(status.BAD_REQUEST, 'Invalid question type');
    }
};

/**
 * This middleware intercepts the incoming request, and validates it.
 * If there is no error, it will forward to the next route handler;
 * otherwise, the middleware will return a series of errors from Zod.
 * @param schema
 */
const ZodValidationMiddleware =
    (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => {
        try {
            const requestStructure = { body: req.body, query: req.query, params: req.params };
            schema.parse(requestStructure);

            next();
        } catch (error) {
            return res.status(status.BAD_REQUEST).json({
                message: (error as ZodError).issues.map(x => x.message),
                status: 'failure',
            });
        }
    };
