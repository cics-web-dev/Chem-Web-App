// an interface that defines the mol data that will be stored in the database
interface MolFile {
    // the mol file of question in base 64 string format
    questionMolFile: string;

    // the optional mol file of feedback in base 64 string format
    feedbackMolFile?: string;
}

export interface QuestionBase extends MolFile {
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

    // the most recent progress of question id that the student has completed
    previousProgress: string;

    // an array of bookmark id that student has bookmarked
    bookMark: string[];

    // an array of question id that student has completed
    completion: string[];
}

export type QuestionMetadata = Pick<QuestionBase, 'id' | 'chapter' | 'question' | 'title'>;
export type SideBarMetadata = QuestionMetadata & { isBookmarked: boolean, isCompleted: boolean };
export type AnyQuestion = MultipleChoice | FillInBlank;
