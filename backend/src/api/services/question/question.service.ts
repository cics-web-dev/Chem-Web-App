import fs from 'fs/promises';
import path from 'path';
import status from 'http-status';

import {
    AnyQuestion,
    QuestionMetadata,
    StudentProgress,
    QuestionBaseModel,
    MultipleQuestionModel,
    MultipleChoice,
} from './question.model.js';

import { objectID } from '../../utils/objectID.utils.js';
import { HttpError } from '../../utils/httpError.utils.js';
import e from '../../configs/error.config.js';

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

export const getSingleQuestionById = async (questionID: string) => {
    const question = await QuestionBaseModel.findById(objectID(questionID));

    if (!question) {
        throw new HttpError(status.NOT_FOUND, e.QUESTION_NOT_FOUND(questionID));
    }

    return question;
};

export const getSidebarMetadata = async (studentID: string) => {
    const sidebarMetada: [QuestionMetadata] = await loadData('sidebarQuestions.json');
    return sidebarMetada;
};

export const updateUserBookmark = async (studentID: string, questionID: string) => {
    const students: [StudentProgress] = await loadData('progress.json');
    const student = students.find(student => student.studentID === studentID);
    if (!student) {
        throw new Error('Student not found');
    }
    student.bookMark.push(questionID);

    return student;
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

export const uploadQuestion = async (question: AnyQuestion) => {
    switch (question.type) {
        case 'MCQ':
            const MCQ: MultipleChoice = await MultipleQuestionModel.create(question);
            return MCQ;
        case 'FIB':
            console.log('Fill in the blank question uploaded');
            return question;
    }
};
