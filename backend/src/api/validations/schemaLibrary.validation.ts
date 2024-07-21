import z from 'zod';

/**
 * A helper function creates a custom error message for zod schema that does not have message property.
 * This simply changes the inner error message of the schema.
 * This is used for z.number(), z.string(), z.enum(),
 * @param message {string} - the custom error message
 * @returns the errorMap object
 */
export const errorMessage = (message: string) => {
    return {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        errorMap: (_issue: z.ZodIssueOptionalMessage, _ctx: z.ErrorMapCtx) => ({
            message: message,
        }),
    };
};

/* Start of Auth Validation */
export const name: z.ZodString = z
    .string(errorMessage('Name is required'))
    .min(1, 'Name cannot be empty');

export const email: z.ZodString = z
    .string(errorMessage('Email is required'))
    .email('Invalid email format');

export const password: z.ZodString = z
    .string(errorMessage('Password is required'))
    .min(8, 'Password must be at least 8 characters')
    .regex(/\d/, 'Password must include a number')
    .regex(/[a-zA-Z]/, 'Password must include a letter');

export const role: z.ZodEnum<['teacher', 'student']> = z.enum(
    ['teacher', 'student'],
    errorMessage('Role is required')
);
/* End of Auth Validation */

/* Start of Question Validation */
export const chapter: z.ZodNumber = z
    .number(errorMessage('Chapter number is required.'))
    .nonnegative('Chapter number must be a non-negative number.')
    .int('Chapter number must be an integer.')
    .min(1, 'Chapter number must be at least 1.');

export const question: z.ZodNumber = z
    .number(errorMessage('Question number is required.'))
    .nonnegative('Question number must be a non-negative number.')
    .int('Question number must be an integer.')
    .min(1, 'Question number must be at least 1.');

export const title: z.ZodString = z
    .string(errorMessage('Title string is required.'))
    .min(1, 'Title must have at least one charcter.');

export const description: z.ZodString = z
    .string(errorMessage('Description string is required.'))
    .min(1, 'Description must have at least one charcter.');

export const difficulty = z.enum(
    ['Easy', 'Medium', 'Hard'],
    errorMessage('Difficulty level must be Easy, Medium, or Hard'),
);

export const type = z.enum(['MCQ'], errorMessage('Type level must be MCQ or other type'));

export const feedback: z.ZodString = z
    .string(errorMessage('Feedback string is required.'))
    .min(1, 'Feedback must have at least one charcter.');

export const questionMolFile: z.ZodString = z.string(
    errorMessage('questionMolFile string is required.'),
);
export const feedbackMolFile: z.ZodOptional<z.ZodString> = z.string().optional();

export const QuestionBaseSchema = z.object({
    chapter: chapter,
    question: question,
    title: title,
    description: description,
    difficulty: difficulty,
    type: type,
    feedback: feedback,
    questionMolFile: questionMolFile,
    feedbackMolFile: feedbackMolFile,
});
/* End of Question Validation */

export default {
    QuestionBaseSchemaValidation: QuestionBaseSchema,
    nameValidation: name,
    emailValidation: email,
    passwordValidation: password,
    roleValidation: role,
};
