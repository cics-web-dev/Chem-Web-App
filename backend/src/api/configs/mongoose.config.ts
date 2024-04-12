import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

/**
 * The **MongoDB** class is a custom class that allows us for making Connections to MongoDB.
 * @example
 * ```ts
 * import { MongoDB } from './configs/mongoose.config.js';
 *
 * // Start running the server, only used once in the entire app
 * MongoDB.connect()
 *
 * // Stop running the server (used in the testing development)
 * MongoDB.disconnect()
 * ```
 */
export class MongoDB {
    /**
     * The MongoDB URL to connect to.
     */
    private static MONGODB_URL: string = '';

    /**
     * The MongoDB memory server for testing.
     * @see https://www.npmjs.com/package/mongodb-memory-server
     */
    private static mongoMemoryServer: MongoMemoryServer | null = null;

    /**
     * Sets the MongoDB URL.
     */
    private static async setMongoDBURL() {
        // testing environment (use mock in memory database)
        if (process.env.NODE_ENV === 'test') {
            MongoDB.mongoMemoryServer = await MongoMemoryServer.create();
            MongoDB.MONGODB_URL = MongoDB.mongoMemoryServer.getUri();
            return;
        }

        // development or production environment
        if (!process.env.MONGODB_URL) {
            throw new Error('MongoDB URL is not found in the .env file');
        }
        MongoDB.MONGODB_URL = process.env.MONGODB_URL;   
    }

    /**
     * Establishes a connection to MongoDB using mooogose's `connect` method.
     */
    public static async connect() {
        try {
            await MongoDB.setMongoDBURL();
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

            // clean up the memory server 
            if (MongoDB.mongoMemoryServer) {
                await MongoDB.mongoMemoryServer.stop();
            }

            await mongoose.disconnect();
            console.log('You successfully disconnected from MongoDB!');
        } catch (error) {
            console.error(error);
        }
    }
}
