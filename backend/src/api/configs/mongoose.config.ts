import mongoose, { set } from 'mongoose';


/**
 * The **MongoDB** class is a custom class that allows us for making Connections to MongoDB.
 * @example
 * ```ts
 * import { MongoDB } from './configs/mongoose.config.js';
 *
 * // Start running the server, only used once in the entire app
 * await MongoDB.conect()
 *
 * // Stop running the server (used in the testing development)
 * await MongoDB.disconnect()
 * ```
 */
export class MongoDB {

    /**
     * The MongoDB URL to connect to.
     */
    private static MONGODB_URL = '';

    /**
     * Sets the MongoDB URL.
     */
    private static setMongoDBURL() {
        if (process.env.MONGODB_URL) {
            MongoDB.MONGODB_URL = process.env.MONGODB_URL;
        } else {
            throw new Error('MongoDB URL is not found in the .env file');
        }
    }

    /**
     * Establishes a connection to MongoDB using mooogose's `connect` method.
     */
    public static async connect() {
        try {
            MongoDB.setMongoDBURL();
            await mongoose.connect(MongoDB.MONGODB_URL);
            console.log('Pinged! You successfully connected to MongoDB Altas!');
        } catch (error) {
            console.error(error);
        }
    }

    /**
     *  Disconnects from MongoDB using mongoose's `disconnect` method.
     */
    public static async disconnect() {
        try {
            await mongoose.disconnect();
            console.log('You successfully disconnected from MongoDB!');
        } catch (error) {
            console.error(error);
        }
    }

};
