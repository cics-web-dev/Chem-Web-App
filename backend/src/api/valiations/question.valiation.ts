import { z } from 'zod';
import library from './schemaLibrary.validation.js';

const MultipleChoiceSchema = library.QuestionBaseSchema.extend({
    type: z.literal('MCQ'),

    options: z.string().array().nonempty({ message: 'Options must have at least one option.' }),

    correctAnswers: z
        .number()
        .array()
        .nonempty({ message: 'Correct answers must have at least one answer.' }),
});

// const QuestionSchema = z.union([MultipleChoiceSchema, ]);

try {
    const result = MultipleChoiceSchema.parse({
        chapter: 1,
        question: 1,
        title: 'a',
        description: 'b',
        difficulty: 'aasy',
    });

    console.log('Validation successful:', result);
} catch (error) {
    console.error('Validation failed:', error);
}
