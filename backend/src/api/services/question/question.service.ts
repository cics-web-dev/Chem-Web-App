import fs from 'fs/promises';
import path from 'path';

import { MultipleChoice, QuestionMetadata, StudentProgress } from './question.model.js';
import { Student } from '../auth/auth.model.js';

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

// const addNewQuestion = async (question: any) => {
//     try {
//         const allQuestions = await loadData();
//         allQuestions.push(question);

//         const data = JSON.stringify(allQuestions, null, 4); // add four spacing to make JSON visualize better
//         await fs.writeFile(path.resolve(DATAFOLDER, 'questions.json'), data, 'utf8');
//     } catch (err) {
//         console.log(err);
//     }
// };

export const getSingleQuestionById = async (id: string) => {
    const questions: [MultipleChoice] = await loadData('questions.json');
    return questions.find(question => question.id === id);
};

export const getSidebarQuestions = async (studentID: string) => {
    const sidebarMetada: [QuestionMetadata] = await loadData('sidebarQuestions.json');
    return sidebarMetada;
};

export const updateUserBookmark = async (studentId: string, bookmarkId: string) => {};

export const updateUserStatus = async (studentId: string, questionId: string) => {
    const students: [StudentProgress] = await loadData('progress.json');
    console.log(students);
    console.log(studentId);
    const student = students.find(student => student.studentID === studentId);
    if (!student) {
        throw new Error('Student not found');
    }
    student.completion.push(questionId);

    return student;
};

export const updateUserProgress = async (studentId: string, questionId: string) => {
    return {
        message: 'progress',
    };
};
