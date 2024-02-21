import { NextFunction, Request, Response } from 'express';
import * as questionService from './question.service.js';

export const route1 = (req: Request, res: Response, next: NextFunction) => {
    try {
        const stuff = questionService.function1();
        res.status(200).json(stuff);
    } catch (error) {
        next(error);
    }
};

export const route2 = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const stuff = await questionService.function2();
        res.status(200).json(stuff);
    } catch (error) {
        next(error);
    }
};

export const getSingleQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const question = await questionService.getSingleQuestion(id);
        res.status(200).json(question);
    } catch (error) {
        next(error);
    }
};

export const getSidebarQuestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const questions = await questionService.;
        res.status(200).json(questions);
    } catch (error) {
        next(error);
    }
};