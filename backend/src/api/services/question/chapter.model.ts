import mongoose, { Document } from 'mongoose';
import { chapter } from '../../validations/schemaLibrary.validation.js';

export interface Chapter extends Document {
    chapter_num: number;
    questions: number[];
}

const ChapterSchema = new mongoose.Schema({
    chapter_num: { type: Number, required: true },
    questions: { type: [Number], required: true },
});

export const ChapterModel = mongoose.model<Chapter>('Chapter', ChapterSchema);

