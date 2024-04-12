import fs from 'fs/promises';
import path from 'path';

import { AnyQuestion, QuestionMetadata, StudentProgress } from './question.model.js';

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
    const questions: [AnyQuestion] = await loadData('questions.json');
    return questions.find(question => question.id === questionID);
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

export const uploadQuestion = (question: AnyQuestion) => {
    return question;
};
