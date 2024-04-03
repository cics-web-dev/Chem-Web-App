import { z } from 'zod';
import library, { errorMessage } from './schemaLibrary.validation.js';

export const MultipleChoiceSchema = z.object({
    body: library.QuestionBaseSchema.extend({
        type: z.literal('MCQ'),

        options: z
            .string(errorMessage('Options must be an string array'))
            .array()
            .nonempty({ message: 'Options must have at least one option.' }),

        correctAnswers: z
            .number(errorMessage('CorrcetAnswers must be an number array'))
            .array()
            .nonempty({ message: 'Correct answers must have at least one answer.' }),
    }),
});

// a make up schema (does not exist yet, just for experimental )
export const OpenResponseSchema = z.object({
    body: library.QuestionBaseSchema.extend({
        type: z.literal('OR'),

        text: z.string().min(1, { message: 'Text must have at least one character.' }),
    }),
});
