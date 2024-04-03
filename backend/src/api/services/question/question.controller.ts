import { NextFunction, Request, Response } from 'express';
import status from 'http-status';

import * as questionService from './question.service.js';

/**
 * Get a single question by its question id for a student.
 * This will be used to display the question on the right side of main page.
 * @authentication required
 * @authorization student
 * @route {GET} `/api/questions/100`.
 * @pathParam {string} questionID - The id of the question. (eg. 100)
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
 * Get all the side bar metadata for a student.
 * This will be used to display the sidebar metadata to navigate
 * through the questions on the left side of the main page.
 * @authentication required
 * @authorization student
 * @route {GET} `/api/questions/sidebar/1234`.
 * @pathParam {string} studentID - The id of the student. (eg. 1234)
 * @return a json body with the question metadata (eg. id, chapter, question, title, bookmark, completion)
 */
export const getSidebarMetadata = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sidebarMetada = await questionService.getSidebarMetadata(req.params.studentID);
        res.status(status.OK).json(sidebarMetada);
    } catch (error) {
        next(error);
    }
};

/**
 * Bookmark a question for a student.
 * Add a new question id to the student bookmark list.
 * @authentication required
 * @authorization student
 * @route {POST} `api/questions/bookmark/876/student/111`.
 * @pathParam {string} questionID - The id of the questionID to bookmark. (eg. 876)
 * @pathParam {string} studentID - The id of the student. (eg. 111)
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
 * @route {POST} `api/questions/status/876/student/111`.
 * @pathParam {string} questionID - The id of the question to change status. (eg. 876)
 * @pathParam {string} studentID - The id of the student. (eg. 111)
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
 * Update the student's `previousProgress` id
 * @authentication required
 * @authorization student
 * @route {POST} `api/questions/progress/876/student/111`.
 * @pathParam {string} questionID - The id of the question to update the progress. (eg. 876)
 * @pathParam {string} studentID - The id of the student. (eg. 111)
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

/**
 * Upload question for professor/TA.
 * @authentication required
 * @authorization teacher
 * @route {POST} `api/questions/upload`.
 * @body {MultipleChoice | other type} question - The question to upload.
 * @return a json body with the uploaded question (eg. id, chapter, question, title, description)
 */
export const uploadQuestion = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const uploadedQuestion = await questionService.uploadQuestion(req.body.question);
        res.status(status.CREATED).json(uploadedQuestion);
    } catch (error) {
        next(error);
    }
};
