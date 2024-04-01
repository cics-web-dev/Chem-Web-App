import mongoose from 'mongoose';


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
    private static MONGODB_URL = 'mongodb://localhost:27017/ChemWebApp';

    /**
     * Establishes a connection to MongoDB using mooogose's `connect` method.
     */
    public static async connect() {
        try {
            await mongoose.connect(MongoDB.MONGODB_URL);
            console.log('Pinged! You successfully connected to MongoDB!');
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
