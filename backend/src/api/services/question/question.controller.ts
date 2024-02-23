import { NextFunction, Request, Response } from 'express';
import status from 'http-status';

import * as questionService from './question.service.js';

/**
 * Get a single question by its id.
 * @authentication required
 * @authorization student and teacher
 * @route {GET} `/api/question/1`.
 * @pathParam {string} id - The id of the question.
 * @return a json body with the question (eg. id, title chapter, question, feedback, type, mol file)
 */
export const getSingleQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const questionID = req.params.questionID;
        const question = await questionService.getSingleQuestionById(questionID);
        res.status(status.OK).json(question);
    } catch (error) {
        next(error);
    }
};

/**
 * Get all the side bar questions.
 * @authentication required
 * @authorization student and teacher
 * @route {GET} `/api/sidebar`.
 * @return a json body with the question metadata (eg. id, chapter, question, title)
 */
export const getSidebarQuestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sidebarQuestions = await questionService.getSidebarQuestion();
        res.status(status.OK).json(sidebarQuestions);
    } catch (error) {
        next(error);
    }
};

/**
 * Bookmark a question for a student.
 * @authentication required
 * @authorization student and teacher
 * @route {POST} `api/question/bookmark/1/student/1`.
 * @pathParam {string} studentID - The id of the student.
 * @pathParam {string} questionID - The id of the questionID to bookmark.
 * @return a json body with the updated student progress (eg. studentId, previousProgress, bookMark, completion)
 */
export const bookmarkQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentID, questionID } = req.params;
    } catch (error) {
        next(error);
    }
};

/**
 * Update the status of a question for a student.
 * @authentication required
 * @authorization student and teacher
 * @route {POST} `api/question/status/1/student/1`.
 * @pathParam {string} studentID - The id of the student.
 * @pathParam {string} questionID - The id of the question to change status.
 * @return a json body with the updated student progress (eg. studentId, previousProgress, bookMark, completion)
 */
export const updateQuestionStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentID, questionID } = req.params;
        const updatedQuestion = await questionService.updateQuestionStatus(studentID, questionID);
        res.status(status.OK).json(updatedQuestion);
    } catch (error) {
        next(error);
    }
};

/**
 * Update the progress of a question for a student.
 * The progress is the most recent question the student has completed.
 * @authentication required
 * @authorization student and teacher
 * @route {POST} `api/question/progress/1/student/1`.
 * @pathParam {string} studentID - The id of the student.
 * @pathParam {string} questionID - The id of the question to update the progress.
 * @return a json body with the updated student progress (eg. studentId, previousProgress, bookMark, completion)
 */
export const updateQuestionProgress = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentID, questionID } = req.params;
        const updatedQuestion = await questionService.updateQuestionProgress(studentID, questionID);
        res.status(status.OK).json(updatedQuestion);
    } catch (error) {
        next(error);
    }
};
