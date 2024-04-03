import mongoose, { Document } from 'mongoose';

interface MolFile {
    questionMolFile: string;
    feedbackMolFile?: string;
}

export interface QuestionBase extends MolFile, Document {
    id: string;
    chapter: number;
    question: number;
    title: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    type: 'MCQ' | 'FIB';
    feedback: string;
}

export interface MultipleChoice extends QuestionBase {
    type: 'MCQ';
    options: string[];
    correctAnswers: number[];
}

export interface FillInBlank extends QuestionBase {
    type: 'FIB';
}

export interface StudentProgress {
    studentID: string;
    previousProgress: string;
    bookMark: string[];
    completion: string[];
}

export type QuestionMetadata = Pick<QuestionBase, 'id' | 'chapter' | 'question' | 'title'>;
export type SideBarMetadata = QuestionMetadata & { isBookmarked: boolean; isCompleted: boolean };
export type AnyQuestion = MultipleChoice | FillInBlank;

const QuestionBaseSchema = new mongoose.Schema(
    {
        chapter: { type: Number, required: true },
        question: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        difficulty: { type: String, required: true, enum: ['Easy', 'Medium', 'Hard'] },
        type: { type: String, required: true, enum: ['MCQ', 'FIB'] },
        feedback: { type: String, required: true },
        questionMolFile: { type: String, required: true },
        feedbackMolFile: { type: String, required: false },
    },
    {
        collection: 'Question',
        versionKey: false,
    },
);

const QuestionBaseModel = mongoose.model<QuestionBase>('QuestionBase', QuestionBaseSchema);
