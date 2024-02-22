import { NextFunction, Request, Response } from 'express';
import status from 'http-status';

import * as questionService from './question.service.js';

/**
 * This function will get a single question by its id.
 */
export const getSingleQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const question = await questionService.getSingleQuestionById(req.params.id as string);
        res.status(status.OK).json(question);
    } catch (error) {
        next(error);
    }
};

/**
 * This function will all the side bar questions
 */
export const getSidebarQuestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sidebarQuestions = await questionService.getSidebarQuestion();
        res.status(status.OK).json(sidebarQuestions);
    } catch (error) {
        next();
    }
};

/** 
 * This function will bookmark a question
*/

export const bookmarkQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const studentId = req.params.studentid;
        const bookmarkId = req.params.bookmarkid;

    } catch (error) {
        //next();
    }
};

/**
 * This function will update the status of the question for a student
 */

export const updateQuestionStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const studentId = req.params.studentid;
        const questionId = req.params.id;
        const status = req.body.status;
        const updatedQuestion = await questionService.updateQuestionStatus(studentId, questionId, status);
        res.status(status.OK).json(updatedQuestion);
    } catch (error) {
        next(error);
    }
};
