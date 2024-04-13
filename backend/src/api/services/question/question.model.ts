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
 */
export interface QuestionBase extends MolFile {
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
 * Represents a document of a question base. (mongoose document)
 * implements Document from mongoose adds the `_id` property to the interface and many other functions
 */
export interface QuestionBaseDocument extends QuestionBase, Document {}

/**
 * Represents a document of a multiple choice question. (mongoose document)
 */
export interface MultipleChoiceDocument extends MultipleChoice, Document {}

/**
 * Represents a document of a fill in the blank question. (mongoose document)
 */
export interface FillInBlankDocument extends FillInBlank, Document {}

/**
 * Represents the metadata of a question.
 */
export type QuestionMetadata = Pick<QuestionBase, 'chapter' | 'question' | 'title'>;

/**
 * Represents the metadata of a question in the sidebar.
 */
export type SideBarMetadata = QuestionMetadata & { isBookmarked: boolean; isCompleted: boolean };

/**
 * Represents any type of question.
 */
export type AnyQuestion = MultipleChoice | FillInBlank;

/**
 * Represents any type of question with an `_id` property.
 * This is useful when we want to return a question with an `_id` property.
 */
export type AnyQuestionWithID = AnyQuestion & { _id: string };

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
export const QuestionBaseModel = mongoose.model<QuestionBaseDocument>(
    'QuestionBase',
    QuestionBaseSchema,
);

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
 * await MultipleChoiceQuestionModel.save({
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
export const MultipleChoiceQuestionModel = QuestionBaseModel.discriminator<MultipleChoiceDocument>(
    'MCQ',
    MultipleChoiceSchema,
);
