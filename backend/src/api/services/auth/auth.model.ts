import mongoose, { Document, Schema } from 'mongoose';

type Role = 'teacher' | 'student';

export type SignupPayload = Pick<User, 'name' | 'email' | 'password' | 'role'>;
export type LoginPayload = Pick<User, 'email' | 'password'>;

export type AuthUserResponse = {
    name: string;
    email: string;
    role: Role;
    token: string; // jwt token for authentication and authorization
};

/* Models for Database manipulations */
interface User extends Document {
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

const userSchemaOptions = {
    collection: 'User', // the name of the collection in the database
    versionKey: false, // the version key is not needed
};

const userSchema = new Schema<User>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, required: true, enum: ['teacher', 'student'] },
    },
    userSchemaOptions,
);

export const UserModel = mongoose.model<User>('User', userSchema);
