import { ZodError, z } from 'zod';
import {
    chapter,
    question,
    title,
    description,
    feedback,
    questionMolFile,
    feedbackMolFile,
    difficulty,
    type,
    QuestionBaseSchema,
} from '../../api/valiations/schemaLibrary.validation.js';

type Diffculty = z.ZodEnum<['Easy', 'Medium', 'Hard']>;
type QuestionType = z.ZodEnum<['MCQ']>;
type ZodSchema = z.ZodNumber | z.ZodString | z.ZodOptional<z.ZodString> | Diffculty | QuestionType;
type InputType = number | string | null;
describe('Validation testing for QuestionBaseSchema', () => {
    /**
     * A helper function to test the parse method of a schema without writting (try and catch block) for each test case.
     * @param schema {ZodSchema} - the schema to test
     * @param input - the input to test
     * @param expectedMessage - the expected error message
     */
    const testParse = (schema: ZodSchema, input: InputType, expectedMessage: string) => {
        try {
            schema.parse(input);
            fail(`Expected to throw an error for input: ${input}`);
        } catch (error) {
            const message = (error as ZodError).errors[0].message;
            expect(message).toBe(expectedMessage);
        }
    };

    describe('chapter field', () => {
        it('chapter is not provided', () => {
            testParse(chapter, null, 'Chapter number is required.');
        });

        it('chapter is not a number', () => {
            testParse(chapter, '1', 'Chapter number is required.');
        });

        it('chapter number is negative', () => {
            testParse(chapter, -3, 'Chapter number must be a non-negative number.');
        });

        it('chapter number is decimal number', () => {
            testParse(chapter, 2.5, 'Chapter number must be an integer.');
        });

        it('chapter number is zero', () => {
            testParse(chapter, 0, 'Chapter number must be at least 1.');
        });

        it('chapter number is valid', () => {
            expect(() => chapter.parse(3)).not.toThrow();
        });
    });

    describe('question field', () => {
        it('question is not provided', () => {
            testParse(question, null, 'Question number is required.');
        });

        it('question is not a number', () => {
            testParse(question, '2', 'Question number is required.');
        });

        it('question number is negative', () => {
            testParse(question, -3, 'Question number must be a non-negative number.');
        });

        it('question number is decimal number', () => {
            testParse(question, 2.5, 'Question number must be an integer.');
        });

        it('question number is zero', () => {
            testParse(question, 0, 'Question number must be at least 1.');
        });

        it('question number is valid', () => {
            expect(() => question.parse(3)).not.toThrow();
        });
    });

    describe('title field', () => {
        it('title is not provided', () => {
            testParse(title, null, 'Title string is required.');
        });

        it('Title is not a string', () => {
            testParse(title, 1, 'Title string is required.');
        });

        it('title provided but empty', () => {
            testParse(title, '', 'Title must have at least one charcter.');
        });

        it('title is valid', () => {
            expect(() => title.parse('ChemWebApp')).not.toThrow();
        });
    });

    describe('description field', () => {
        it('description is not provided', () => {
            testParse(description, null, 'Description string is required.');
        });

        it('feedback is not a string', () => {
            testParse(description, 2, 'Description string is required.');
        });

        it('description provided but empty', () => {
            testParse(description, '', 'Description must have at least one charcter.');
        });

        it('description is valid', () => {
            expect(() => description.parse('ChemWebApp')).not.toThrow();
        });
    });

    describe('feedback field', () => {
        it('feedback is not provided', () => {
            testParse(feedback, null, 'Feedback string is required.');
        });

        it('feedback is not a string', () => {
            testParse(feedback, 2, 'Feedback string is required.');
        });

        it('feedback provided but empty', () => {
            testParse(feedback, '', 'Feedback must have at least one charcter.');
        });

        it('description is valid', () => {
            expect(() => feedback.parse('A nice web app')).not.toThrow();
        });
    });

    describe('questionMolFile field', () => {
        it('questionMolFile is not provided', () => {
            testParse(questionMolFile, null, 'questionMolFile string is required.');
        });

        it('questionMolFile is a number', () => {
            testParse(questionMolFile, 1, 'questionMolFile string is required.');
        });

        it('questionMolFile is valid', () => {
            expect(() => questionMolFile.parse('some Random Question Mol file')).not.toThrow();
        });
    });

    describe('type field', () => {
        it('type is not provided', () => {
            testParse(type, null, 'Type level must be MCQ or other type');
        });

        it('type is provided but invalid type', () => {
            testParse(type, 'ABC', 'Type level must be MCQ or other type');
        });

        it('type is valid type', () => {
            expect(() => type.parse('MCQ')).not.toThrow();
        });
    });

    describe('difficulty field', () => {
        it('difficulty is not provided', () => {
            testParse(difficulty, null, 'Diffculty level must be Easy, Medium, or Hard');
        });

        it('difficulty is provided but invalid one', () => {
            testParse(difficulty, 'SUPERHARD', 'Diffculty level must be Easy, Medium, or Hard');
        });

        it('difficulty is valid type', () => {
            expect(() => difficulty.parse('Easy')).not.toThrow();
            expect(() => difficulty.parse('Medium')).not.toThrow();
            expect(() => difficulty.parse('Hard')).not.toThrow();
        });
    });

    describe('feedbackMolFile field', () => {
        it('feedbackMolFile valid', () => {
            const result = feedbackMolFile.parse(undefined);
            expect(result).toBe(undefined);
        });
    });

    describe('QuestionBaseSchema', () => {
        it('QuestionBaseSchema is valid', () => {
            const payload = {
                chapter: 1,
                question: 1,
                title: 'Hello world',
                description: 'This is a test question',
                difficulty: 'Easy',
                type: 'MCQ',
                feedback: 'Feedback is very important',
                questionMolFile: 'Some random question mol file',
            };
            const result = QuestionBaseSchema.parse(payload);

            expect(result).toEqual(payload);
        });
    });
});
