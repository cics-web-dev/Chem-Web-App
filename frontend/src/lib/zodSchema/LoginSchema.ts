import { z } from 'zod';

export const loginSchema = z.object({
   
    email: z.string({ required_error: 'Email is required.'})
        .email('Invalid email format')
        .regex(/@umass.edu$/, 'Email must end with @umass.edu.'),

    password: z.string({ required_error: 'Password is required.'})
        .min(8, 'Password must be at least 8 characters long.')
        .regex(/^(?=.*[0-9])(?=.*[a-zA-Z]).*$/, 'Password must contain at least one number and one letter.')

})
