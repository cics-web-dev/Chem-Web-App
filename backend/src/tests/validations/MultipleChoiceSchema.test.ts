import { ZodError } from 'zod';
import { MultipleChoiceSchema } from '../../api/valiations/question.valiation.js';

describe('MultipleChoiceSchema', () => {
    const data = {
        chapter: 1,
        question: 1,
        title: 'What is the capital of France?',
        description: 'This is a multiple choice question.',
        difficulty: 'Easy',
        feedback: 'A good question',
        questionMolFile: 'Some random question mol file',

        // multiple choice specific fields
        type: 'MCQ',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswers: [0],
    };

    describe('valid multiple choice schema', () => {
        it('valid!', () => {
            expect(() => MultipleChoiceSchema.parse(data)).not.toThrow();
        });
    });

    describe('invalid multiple choice schema', () => {
        describe('invalid options', () => {
            it('missing options array', () => {
                const invalidData = { ...data, options: undefined };

                try {
                    MultipleChoiceSchema.parse(invalidData);
                } catch (error) {
                    const message = (error as ZodError).errors[0].message;
                    expect(message).toBe('Options must be an string array');
                }
            });

            it('options array must be string', () => {
                const invalidData = { ...data, options: [1345] };
                expect(() => MultipleChoiceSchema.parse(invalidData)).toThrow();
            });

            it('no option (must be non empty)', () => {
                const invalidData = { ...data, options: [] };
                try {
                    MultipleChoiceSchema.parse(invalidData);
                } catch (error) {
                    const message = (error as ZodError).errors[0].message;
                    expect(message).toBe('Options must have at least one option.');
                }
            });
        });

        describe('invalid correctAnswers', () => {
            it('missing correctAnswers array', () => {
                const invalidData = { ...data, correctAnswers: undefined };

                try {
                    MultipleChoiceSchema.parse(invalidData);
                } catch (error) {
                    const message = (error as ZodError).errors[0].message;
                    expect(message).toBe('CorrcetAnswers must be an number array');
                }
            });

            it('correctAnswers array must be number', () => {
                const invalidData = { ...data, correctAnswers: ['1344'] };
                expect(() => MultipleChoiceSchema.parse(invalidData)).toThrow();
            });

            it('no option (must be non empty)', () => {
                const invalidData = { ...data, correctAnswers: [] };
                try {
                    MultipleChoiceSchema.parse(invalidData);
                } catch (error) {
                    const message = (error as ZodError).errors[0].message;
                    expect(message).toBe('Correct answers must have at least one answer.');
                }
            });
        });
    });
});
