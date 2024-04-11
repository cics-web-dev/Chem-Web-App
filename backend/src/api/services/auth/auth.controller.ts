import { NextFunction, Request, Response } from 'express';
import { createUser, loginUser } from './auth.service.js';
import { signupSchema, loginSchema } from '../../validations/auth.validation.js';
import { ZodValidationMiddleware } from '../../middlewares/Zod.middleware.js';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        ZodValidationMiddleware(signupSchema)(req, res, next);
        const { email, password, name, role } = req.body;
        const user = await createUser(email, password, name, role);
        return res.status(201).json({ user, status: 'success' });
    } catch (error) {
        return next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        ZodValidationMiddleware(loginSchema)(req, res, next);
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        return res.status(200).json({ user, status: 'success' });
    } catch (error) {
        return next(error);
    }
}