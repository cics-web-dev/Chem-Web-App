import { UserModel } from './auth.model.js';
import bcrypt from 'bcryptjs';

export const createUser = async (email: string, password: string, name: string, role: 'teacher' | 'student') => {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new UserModel({
        email,
        password: hashedPassword,
        name,
        role
    });
    await user.save();
    return user;
};
