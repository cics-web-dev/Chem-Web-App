import request from 'supertest';
import app from "../../../api/app.js";
import { MongoDB } from '../../../api/configs/mongoose.config.js';
import { MultipleChoice } from '../../../api/services/question/question.model.js';

describe('question service routes for upload', () => {
    beforeAll(async () => {
        // Setup code before any tests run for mongoDB
        await MongoDB.connect();
    });

    afterAll(async () => {
        // close MongoDB connection and server after all tests run
        await MongoDB.disconnect(); 
    });

    describe("unsuccessful upload", () => {
        // since we already tested the validation in the tests/validation folder, 
        // we can just test one or two requests here
        test("chapter is missing", async () => {
            const question: MultipleChoice = {
                "question": 1,

            };
        });
    });
    
});