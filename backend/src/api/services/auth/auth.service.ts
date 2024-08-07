import bcrypt from 'bcryptjs';
import status from 'http-status';

import { UserModel, SignupPayload, LoginPayload, AuthUserResponse } from './auth.model.js';
import { HttpError } from '../../utils/httpError.utils.js';
import { generateToken } from '../../utils/token.utils.js';
import { ApiError } from '../../configs/error.config.js';

export const createUser = async (payload: SignupPayload): Promise<{ user: AuthUserResponse }> => {
    const { email, password, name, role } = payload;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
        throw new HttpError(status.CONFLICT, ApiError.Auth.USER_EXISTS);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await UserModel.create({ email, password: hashedPassword, name, role });

    return {
        user: {
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        },
    };
};

export const loginUser = async (payload: LoginPayload): Promise<{ user: AuthUserResponse }> => {
    const { email, password } = payload;

    const user = await UserModel.findOne({ email });

    if (!user) {
        throw new HttpError(status.NOT_FOUND, ApiError.Auth.USER_NOT_FOUND);
    }

    const isPasswordValid: boolean = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new HttpError(status.UNAUTHORIZED, ApiError.Auth.INVALID_CREDENTIALS);
    }

    return {
        user: {
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id),
        },
    };
};
