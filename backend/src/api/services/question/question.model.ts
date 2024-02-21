export interface QuestionBase {
    id: string;
    chapter: number;
    question: number;
    type: QuestionType;
    feedback: string;
    title: string;
}

export interface MCQ extends QuestionBase {
    type: "MCQ";
    options: string[];
    correctAnswer: number[];
}

export interface FIB extends QuestionBase {
    type: "FIB";
    correctAnswer: string;
}

export type QuestionType = 'MCQ' | 'FIB';

export interface QuestionMetadata {
    id: string;
    chapter: number;
    question: number;
    questionTitle: string;
}