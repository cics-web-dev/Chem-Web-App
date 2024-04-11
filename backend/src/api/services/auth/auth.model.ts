import mongoose, { Document, Schema } from 'mongoose';

export type Role = 'teacher' | 'student';

export interface User extends Document {
    name: string;
    email: string;
    password: string;
    role: Role;
}

export interface Teacher extends User {
    role: 'teacher';
}

export interface Student extends User {
    role: 'student';
}

const userSchema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['teacher', 'student'] },
});

export const UserModel = mongoose.model<User>('User', userSchema);
