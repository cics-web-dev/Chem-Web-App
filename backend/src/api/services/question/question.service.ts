import fs from 'fs/promises';
import path from 'path';

// TESTING PURPOSES (WILL REMOVE ONCE WE USE THE ACTUAL DATABASE)
const DATAFOLDER = path.resolve(process.cwd(), '../../sampleData');

const loadQuestions = async () => {
    try {
        const data = await fs.readFile(path.resolve(DATAFOLDER, 'questions.json'), 'utf8');
        const questions = JSON.parse(data);
        return questions;
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

const testQuestion = {
    id: '123',
    type: 'MCQ',
    chapter: 10,
    question: 11,
    title: 'Testing title',
    options: ['option1', 'option2', 'option3', 'option4'],
    correctAnswer: [0, 1],
    feedback: 'feedback is important',
};

// await addNewQuestion(testQuestion);

export const function1 = () => {
    return 'HELLO, function1';
};

export const function2 = () => {
    return 'HELLO, function2';
};
