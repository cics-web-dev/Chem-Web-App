import mongoose, { Document } from 'mongoose';

/**
 * Represents molecule files.
 */
interface MolFile {
    questionMolFile: string;
    feedbackMolFile?: string;
}

/**
 * Represents the base properties of a question.
 * implements Document from mongoose adds the `_id` property to the interface.
 */
export interface QuestionBase extends MolFile, Document {
    chapter: number;
    question: number;
    title: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    type: 'MCQ' | 'FIB';
    feedback: string;
}

/**
 * Represents a multiple choice question.
 */
export interface MultipleChoice extends QuestionBase {
    type: 'MCQ';
    options: string[];
    correctAnswers: number[];
}

/**
 * Represents a fill in the blank question.
 */
export interface FillInBlank extends QuestionBase {
    type: 'FIB';
}

/**
 * Represents the progress of a student.
 */
export interface StudentProgress {
    studentID: string;
    previousProgress: string;
    bookMark: string[];
    completion: string[];
}

/**
 * Represents the metadata of a question.
 */
export type QuestionMetadata = Pick<QuestionBase, 'id' | 'chapter' | 'question' | 'title'>;

/**
 * Represents the metadata of a question in the sidebar.
 */
export type SideBarMetadata = QuestionMetadata & { isBookmarked: boolean; isCompleted: boolean };

/**
 * Represents any type of question.
 */
export type AnyQuestion = MultipleChoice | FillInBlank;

/*
 * Represents the base options of a question base schema.
 * Note: All question will be stored in the collection `Question`.
 */
const questionBaseOptions = {
    discriminatorKey: 'type', // a key that will be used to differentiate between different types of questions
    collection: 'Question', // the name of the collection in the database
    versionKey: false, // the version key is not needed
};

/**
 * Represents the mongoose schema of base properties of a question.
 */
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
    questionBaseOptions,
);

/**
 * Represents the mongoose schema of a multiple choice question.
 */
const MultipleChoiceSchema = new mongoose.Schema({
    options: { type: [String], required: true },
    correctAnswers: { type: [Number], required: true },
});

/*
 * Represents the base options of a question for a moogoose model.
 */
export const QuestionBaseModel = mongoose.model<QuestionBase>('QuestionBase', QuestionBaseSchema);

/**
 * Represents the multiple choice question model.
 *
 * QuestionBaseModel union MultipleChoiceSchema => MultipleChoiceModel.
 *
 * Note: The `discriminator` method is used to create a new model based on a base model.
 *
 * The name of the discriminator type must be the same as the `type` property in the base model. (in this case, 'MCQ').
 * @example
 * ```ts
 * await MultipleQuestionModel.save({
 *   chapter: 1,
 *   question: 1,
 *   title: 'What is the capital of France?',
 *   description: 'Choose the correct option.',
 *   difficulty: 'Easy',
 *   type: 'MCQ',
 *   feedback: 'The capital of France is Paris.',
 *   questionMolFile: <some mol file>,
 *   options: ['Paris', 'London', 'Berlin', 'Madrid'],
 *   correctAnswers: [0],
 * });
 * ```
 */
export const MultipleQuestionModel = QuestionBaseModel.discriminator<MultipleChoice>(
    'MCQ',
    MultipleChoiceSchema,
);
