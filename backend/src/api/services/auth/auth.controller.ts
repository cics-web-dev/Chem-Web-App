import { NextFunction, Request, Response } from 'express';
import { createUser } from './auth.service.js';
import { z } from 'zod';

const signupSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name cannot be empty"),
        email: z.string().email("Invalid email format"),
        password: z.string().min(8, "Password must be at least 8 characters").regex(/\d/, "Password must include a number").regex(/[a-zA-Z]/, "Password must include a letter"),
        role: z.enum(['teacher', 'student'])
    })
});

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    const validationResult = signupSchema.safeParse(req.body);
    if (!validationResult.success) {
        return next("something here") 
    }
    
    const { name, email, password, role } = validationResult.data.body;
    try {
        const user = await createUser(email, password, name, role);
        res.status(201).json({ id: user._id, name, email, role });
    } catch (error) {
        if (error.code === 11000) { 
            next(new HttpError(409, 'User with this email already exists'));
        } else {
            next(error); 
        }
    }
};
