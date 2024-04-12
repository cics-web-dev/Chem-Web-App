import { z } from 'zod';

export const signupSchema = z.object({
    body: z.object({
        name: z.string().min(1, 'Name cannot be empty'),
        email: z.string().email('Invalid email format'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/\d/, 'Password must include a number')
            .regex(/[a-zA-Z]/, 'Password must include a letter'),
        role: z.enum(['teacher', 'student']),
    }),
});

export const loginSchema = z.object({
    body: z.object({
        email: z.string().email('Invalid email format'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .regex(/\d/, 'Password must include a number')
            .regex(/[a-zA-Z]/, 'Password must include a letter'),
    }),
});
