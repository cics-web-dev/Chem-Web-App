import { NextFunction, Request, Response } from 'express';
import status from 'http-status';

import * as userService from './auth.service.js';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user } = await userService.createUser(req.body);
        res.status(status.CREATED).json({ user, status: 'success' });
    } catch (error) {
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user } = await userService.loginUser(req.body);
        res.status(status.OK).json({ user, status: 'success' });
    } catch (error) {
        next(error);
    }
};
