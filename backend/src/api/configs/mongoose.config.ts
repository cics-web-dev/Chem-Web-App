import mongoose from 'mongoose';

const MONGODB_URL = 'mongodb://localhost:27017/ChemWebApp';

export default async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('Pinged! You successfully connected to MongoDB!');
    } catch (error) {
        console.error(error);
    }
};
