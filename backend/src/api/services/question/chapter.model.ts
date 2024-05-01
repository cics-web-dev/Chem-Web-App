import mongoose, { Document } from 'mongoose';

export interface Chapter extends Document {
    chapter_num: number[];
}

const ChapterSchema = new mongoose.Schema({
    chapter_num: { type: [Number], required: true },
});

export const ChapterModel = mongoose.model<Chapter>('Chapter', ChapterSchema);

