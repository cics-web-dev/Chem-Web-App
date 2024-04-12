import request from 'supertest';
import app from "../../../api/app.js";
import server from "../../../api/server.js";
import { MongoDB } from '../../../api/configs/mongoose.config.js';

describe('question service routes for upload', () => {
    beforeAll(async () => {
        // Setup code before any tests run for mongoDB
        await MongoDB.connect();
    });

    afterAll(async () => {
        // close MongoDB connection and server after all tests run
        await MongoDB.disconnect(); 
        server.close();
    });

    test('POST /api/', async () => {
        const response = await request(app)
            .get('/')
            .timeout(4000);

        expect(response.statusCode).toBe(200);
    });
    
});