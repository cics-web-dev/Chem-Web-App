import mongoose, { Document } from 'mongoose';


/**
 * Represents the progress of a student.
 */
export interface StudentProgress extends Document{
    studentID: string;
    previousProgress: string;
    bookMark: string[];
    completion: string[];
}

/**
 * Represents the schema of a student progress.
 */
const StudentProgressSchema = new mongoose.Schema(
    {
        studentID: { type: String, required: true },
        previousProgress: { type: String, required: true },
        bookMark: { type: [String], required: true },
        completion: { type: [String], required: true },
    }
);

/**
 * Represents the student progress model.
 */
export const StudentProgressModel = mongoose.model<StudentProgress>('StudentProgress', StudentProgressSchema);


