export type QuestionType = 'MCQ' | 'FIB';

export interface QuestionMetadata {
	id: string;
	chapter: number;
	question: number;
	title: string;
}

export interface MolFile {
	questionMolFile: string;
}

export interface Question extends QuestionMetadata, MolFile {
	description: string;
	type: QuestionType;
	feedback: string;
}

export interface MultipleChoice extends Question {
	type: 'MCQ';
	options: string[];
	correctAnswer: number[];
}

export interface FillInBlank extends Question {
	type: 'FIB';
	correctAnswer: string;
}

export type AnyQuestion = MultipleChoice | FillInBlank;
