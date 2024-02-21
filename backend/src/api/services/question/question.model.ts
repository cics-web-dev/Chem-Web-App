export interface QuestionBase {
    id: string;
    chapter: number;
    question: number;
    title: string;
    type: QuestionType;
    feedback: string;
}

export interface MultipleChoice extends QuestionBase {
    type: 'MCQ';
    options: string[];
    correctAnswer: number[];
}

export interface FillInBlank extends QuestionBase {
    type: 'FIB';
    correctAnswer: string;
}

export type QuestionType = 'MCQ' | 'FIB';

export interface QuestionMetadata {
    id: string;
    chapter: number;
    question: number;
    title: string;
}