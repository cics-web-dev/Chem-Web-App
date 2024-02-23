import { NextFunction, Request, Response } from 'express';
import status from 'http-status';

import * as questionService from './question.service.js';

/**
 * Get a single question by its question id for a student.
 * This will be used to display the question on the right side of main page.
 * @authentication required
 * @authorization student
 * @route {GET} `/api/questions/1`.
 * @pathParam {string} questionID - The id of the question.
 * @return a json body with the question (eg. id, title chapter, question, feedback, type, mol file)
 */
export const getSingleQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const question = await questionService.getSingleQuestionById(req.params.questionID);
        res.status(status.OK).json(question);
    } catch (error) {
        next(error);
    }
};

/**
 * Get all the side bar questions for a student.
 * This will be used to display the sidebar questions to navigate 
 * through the questions on the left side of the main page.
 * @authentication required
 * @authorization student
 * @route {GET} `/api/questions/sidebar/1234`.
 * @pathParam {string} studentID - The id of the student.
 * @return a json body with the question metadata (eg. id, chapter, question, title, bookmark, completion)
 */
export const getSidebarQuestions = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sidebarQuestions = await questionService.getSidebarQuestions(req.params.studentID);
        res.status(status.OK).json(sidebarQuestions);
    } catch (error) {
        next(error);
    }
};

/**
 * Bookmark a question for a student.
 * Add a new question id to the student bookmark list.
 * @authentication required
 * @authorization student
 * @route {POST} `api/questions/bookmark/1/student/1`.
 * @pathParam {string} studentID - The id of the student.
 * @pathParam {string} questionID - The id of the questionID to bookmark.
 * @return a json body with the updated student progress (eg. studentId, previousProgress, bookMark, completion)
 */
export const bookmarkQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentID, questionID } = req.params;
        const updatedQuestion = await questionService.updateUserBookmark(studentID, questionID);
        res.status(status.OK).json(updatedQuestion);
    } catch (error) {
        next(error);
    }
};

/**
 * Update the status of a question for a student.
 * Add a new question id to the student completed list.
 * @authentication required
 * @authorization student
 * @route {POST} `api/questions/status/1/student/1`.
 * @pathParam {string} studentID - The id of the student.
 * @pathParam {string} questionID - The id of the question to change status.
 * @return a json body with the updated student progress (eg. studentId, previousProgress, bookMark, completion)
 */
export const updateQuestionStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentID, questionID } = req.params;
        const updatedQuestion = await questionService.updateUserStatus(studentID, questionID);
        res.status(status.OK).json(updatedQuestion);
    } catch (error) {
        next(error);
    }
};

/**
 * Update the progress of a question for a student.
 * Update the student's `previousProgress` id
 * @authentication required
 * @authorization student
 * @route {POST} `api/questions/progress/1/student/1`.
 * @pathParam {string} studentID - The id of the student.
 * @pathParam {string} questionID - The id of the question to update the progress.
 * @return a json body with the updated student progress (eg. studentId, previousProgress, bookMark, completion)
 */
export const updateUserProgress = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { studentID, questionID } = req.params;
        const updatedQuestion = await questionService.updateUserProgress(studentID, questionID);
        res.status(status.OK).json(updatedQuestion);
    } catch (error) {
        next(error);
    }
};
