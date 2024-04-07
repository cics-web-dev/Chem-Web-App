import mongoose from 'mongoose';

// This function is used to convert a string to a mongoose objectID
export const objectID = (id: string) => {
    return new mongoose.Types.ObjectId(id);
};
