import fs from 'fs/promises';
import path from 'path';
import status from 'http-status';

import {
    AnyQuestion,
    AnyQuestionWithID,
    QuestionMetadata,
    QuestionBaseModel,
    MultipleChoiceQuestionModel,
    MultipleChoice,
} from './question.model.js';

import { StudentProgress, StudentProgressModel } from './student.model.js';

import { objectID } from '../../utils/objectID.utils.js';
import { HttpError } from '../../utils/httpError.utils.js';
import error from '../../configs/error.config.js';

// TESTING PURPOSES (WILL REMOVE ONCE WE USE THE ACTUAL DATABASE)
const DATAFOLDER = path.resolve(process.cwd(), 'src/api/sampleData');

const loadData = async (pathname: string) => {
    try {
        const data = await fs.readFile(path.resolve(DATAFOLDER, pathname), 'utf8');
        const jsonData = JSON.parse(data);
        return jsonData;
    } catch (error) {
        console.log(error);
    }
};

export const getSingleQuestionById = async (questionID: string): Promise<AnyQuestionWithID> => {
    const question = await QuestionBaseModel.findById(objectID(questionID));

    if (!question) {
        throw new HttpError(status.NOT_FOUND, error.QUESTION_NOT_FOUND(questionID));
    }

    return question as AnyQuestionWithID;
};

export const getSidebarMetadata = async (studentID: string) => {
    const sidebarMetada: [QuestionMetadata] = await loadData('sidebarQuestions.json');
    return sidebarMetada;
};

export const updateUserBookmark = async (studentID: string, questionID: string) => {
    try {
        const student = await StudentProgressModel.findOne({ studentID });
        if (!student) {
            throw new Error('Student not found');
        }
        student.bookMark.push(questionID);
        await student.save();
        return student;
    } catch (error: any) {
        throw new Error('Error updating user bookmark: ' + error.message);
    }
};

export const updateQuestionStatus = async (studentID: string, questionID: string) => {
    const students: [StudentProgress] = await loadData('progress.json');
    const student = students.find(student => student.studentID === studentID);
    if (!student) {
        throw new Error('Student not found');
    }
    student.completion.push(questionID);

    return student;
};

export const updateUserProgress = async (studentID: string, questionID: string) => {
    const students: [StudentProgress] = await loadData('progress.json');
    const student = students.find(student => student.studentID === studentID);

    if (!student) {
        throw new Error('Student not found');
    }

    student.previousProgress = questionID;

    return student;
};

export const uploadQuestion = async (question: AnyQuestion): Promise<AnyQuestionWithID> => {
    switch (question.type) {
        case 'MCQ': {
            const MCQ = await MultipleChoiceQuestionModel.create(question);
            return MCQ;
        }
        case 'FIB': {
            // Update this once we have more type of questions
            console.log('Fill in the blank question uploaded');
            return question as AnyQuestionWithID;
        }
    }
};
