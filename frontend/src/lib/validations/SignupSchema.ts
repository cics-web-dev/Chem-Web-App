import { z } from 'zod';

export const signupSchema = z.object({
    name: z.string({ required_error: 'Name is required.' })
        .min(1, 'Name must be at least 1 character long.')
        .max(255, 'Name must not exceed 255 characters.')
        .regex(/^[a-zA-Z ]+$/, 'Name must only contain letters and spaces.'),

    email: z.string({ required_error: 'Email is required.'})
        .email('Invalid email format')
        .regex(/@umass.edu$/, 'Email must end with @umass.edu.'),

    password: z.string({ required_error: 'Password is required.'})
        .min(8, 'Password must be at least 8 characters long.')
        .regex(/^(?=.*[0-9])(?=.*[a-zA-Z]).*$/, 'Password must contain at least one number and one letter.'),

    confirmPassword: z.string({ required_error: 'Confirmed password is required.'})
        .min(8, 'Confirmed password must be at least 8 characters long.')
        .regex(/^(?=.*[0-9])(?=.*[a-zA-Z]).*$/, 'Confirmed password must contain at least one number and one letter.')
        
}).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // This tells Zod where to attach the error
});
