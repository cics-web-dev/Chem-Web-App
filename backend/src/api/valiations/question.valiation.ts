import { z } from 'zod';

const MultipleChoiceSchema = z.object({
    chapter: z
        .number({ required_error: 'Chapter number is required.' })
        .nonnegative({ message: 'Chapter number must be a non-negative number.' })
        .int({ message: 'Chapter number must be an integer.' })
        .min(1, { message: 'Chapter number must be at least 1.' }),

    question: z
        .number({ required_error: 'Question number is required.' })
        .nonnegative({ message: 'Question number must be a non-negative number.' })
        .int({ message: 'Question number must be an integer.' })
        .min(1, { message: 'Question number must be at least 1.' }),

    title: z
        .string({ required_error: 'Title is required.' })
        .min(1, { message: 'Title must have at least one charcter.' }),

    description: z
        .string({ required_error: 'Description is required.' })
        .min(1, { message: 'Description must have at least one charcter.' }),

    // Credit: https://github.com/colinhacks/zod/issues/580#issuecomment-1425044684
    difficulty:
        z.enum(['Easy', 'Medium', 'Hard'], {
            errorMap: (_issue, _ctx) => ({ message: 'Diffculty level must be Easy, Medium, or Hard' })
        }),

    type:
        z.enum(['MCQ'], {
            errorMap: (_issue, _ctx) => ({ message: 'Type level must be MCQ or other type' })
        }),
    
    options: 
        
});

// const QuestionSchema = z.union([MultipleChoiceSchema, ]);

try {
    const result = MultipleChoiceSchema.parse({
        chapter: 1,
        question: 1,
        title: 'a',
        description: 'b',
        difficulty: 'Easy',
    });

    console.log('Validation successful:', result);
} catch (error) {
    console.error('Validation failed:', error);
}
