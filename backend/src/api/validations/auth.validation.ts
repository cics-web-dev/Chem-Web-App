import { z } from 'zod';
import library from './schemaLibrary.validation.js';

export const signupSchema = z.object({
    body: z.object({
        name: library.nameValidation,
        email: library.emailValidation,
        password: library.passwordValidation,
        role: library.roleValidation,
    }),
});

export const loginSchema = z.object({
    body: z.object({
        email: library.emailValidation,
        password: library.passwordValidation,
    }),
});
