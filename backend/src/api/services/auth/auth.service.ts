import { UserModel } from './auth.model.js';
import { HttpError } from '../../utils/httpError.utils.js';
import bcrypt from 'bcryptjs';

export const createUser = async (email: string, password: string, name: string, role: 'teacher' | 'student') => {
    if (await UserModel.findOne({ email })) {
        throw new HttpError(409, 'User with this email already exists');
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await UserModel.create({ email, password: hashedPassword, name, role });
        return user;
    } catch (error) {
        throw new HttpError(500, 'Internal server error');
    }
};

export const loginUser = async (email: string, password: string) => {
    const user = await UserModel.findOne({ email });
    if (!user) {
        throw new HttpError(404, 'User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new HttpError(401, 'Invalid credentials');
    }
    return user;
}