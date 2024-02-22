import fs from 'fs/promises';
import path from 'path';

import { MultipleChoice, QuestionMetadata } from './question.model.js';

// TESTING PURPOSES (WILL REMOVE ONCE WE USE THE ACTUAL DATABASE)
const DATAFOLDER = path.resolve(process.cwd(), 'src/api/sampleData');

const loadQuestions = async () => {
    try {
        const data = await fs.readFile(path.resolve(DATAFOLDER, 'questions.json'), 'utf8');
        const questions = JSON.parse(data);
        return questions;
    } catch (error) {
        console.error(error);
    }
};

const loadQuestionSidebar = async () => {
    try {
        const data = await fs.readFile(path.resolve(DATAFOLDER, 'sidebarQuestions.json'), 'utf8');
        const sidebarQuestions = JSON.parse(data);
        return sidebarQuestions;
    } catch (error) {
        console.error(error);
    }
};

const addNewQuestion = async (question: any) => {
    try {
        const allQuestions = await loadQuestions();
        allQuestions.push(question);

        const data = JSON.stringify(allQuestions, null, 4); // add four spacing to make JSON visualize better
        await fs.writeFile(path.resolve(DATAFOLDER, 'questions.json'), data, 'utf8');
    } catch (err) {
        console.log(err);
    }
};

export const getSingleQuestionById = async (id: string) => {
    const questions: [MultipleChoice] = await loadQuestions();
    return questions.find((question) => question.id === id);
};

export const getSidebarQuestion = async () => {
    const sidebarMetada: [QuestionMetadata] = await loadQuestionSidebar();
    return sidebarMetada;
}

export const updateUserBookmark = async (studentId: string, bookmarkId: string) => {
    
}