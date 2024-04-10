export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
}

export type Role = 'teacher' | 'student';

export interface Teacher extends User {
    role: 'teacher';
}
export interface Student extends User {
    role: 'student';
}
