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
    SideBarMetadata,
} from './question.model.js';

import { StudentProgress, StudentProgressModel } from './student.model.js';

import { Chapter, ChapterModel } from './chapter.model.js';

import { objectID } from '../../utils/objectID.utils.js';
import { HttpError } from '../../utils/httpError.utils.js';
import { Error } from '../../configs/error.config.js';

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
        throw new HttpError(status.NOT_FOUND, Error.QUESTION_NOT_FOUND(questionID));
    }

    return question as AnyQuestionWithID;
};

export const getSidebarMetadata = async (studentID: string) => {
    const chapters = await ChapterModel.find();
    const metadata: SideBarMetadata[] = [];
    const student = await StudentProgressModel.findOne({ studentID });
    if (!student) {
        throw new HttpError(status.NOT_FOUND, `Student not found with ID ${studentID}`);
    }

    for (const chapter of chapters) {
        const questions = await QuestionBaseModel.find({ chapter: chapter.questions});
        for (const question of questions) {
            const isBookmarked = student.bookMark.includes(question._id);
            const isCompleted = student.completion.includes(question._id);

            const metadata_i: SideBarMetadata = {
                chapter: chapter.chapter_num,
                question: question.question,
                title: question.title,
                isBookmarked,
                isCompleted,
            };

            metadata.push(metadata_i);
        }
    }

    return metadata;
};


export const updateUserBookmark = async (studentID: string, questionID: string) => {
    // Check if the question exists
    const question = await QuestionBaseModel.findById(questionID);
    if (!question) {
        throw new HttpError(status.NOT_FOUND, `Question not found with ID ${questionID}`);
    }

    // Find the student
    const student = await StudentProgressModel.findOne({ studentID });
    if (!student) {
        throw new HttpError(status.NOT_FOUND, `Student not found with ID ${studentID}`);
    }

    // Toggle user bookmark
    const bookmarkIndex = student.bookMark.indexOf(questionID);
    if (bookmarkIndex !== -1) {
        // If already bookmarked, remove it
        student.bookMark.splice(bookmarkIndex, 1);
    } else {
        // If not bookmarked, add it
        student.bookMark.push(questionID);
    }

    await student.save();
    
    return student;
};

export const updateQuestionStatus = async (studentID: string, questionID: string) => {
    const question = await QuestionBaseModel.findById(questionID);
    if (!question) {
        throw new HttpError(status.NOT_FOUND, `Question not found with ID ${questionID}`);
    }

    const student = await StudentProgressModel.findOne({ studentID });

    if (!student) {
        throw new HttpError(status.NOT_FOUND, `Student not found with ID ${studentID}`);
    }

    const completionIndex = student.completion.indexOf(questionID);

    if (completionIndex !== -1) {
        student.completion.splice(completionIndex, 1);
    } else {
        student.completion.push(questionID);
    }

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
