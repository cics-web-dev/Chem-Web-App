import request from 'supertest';
import app from '../../../api/app.js';
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

    describe('unsuccessful upload', () => {
        // since we already tested the validation in the tests/validation folder,
        // we can just test one or two requests here
        test('chapter is missing', async () => {
            const question = {
                type: 'MCQ',
                options: ['option1', 'option2'],
                correctAnswers: [1],
                question: 2,
                title: 'title',
                description: 'description',
                difficulty: 'Easy',
                feedback: 'feedback',
                questionMolFile: '',
            };

            const response = await request(app).post('/api/question/upload').send(question);

            expect(response.statusCode).toBe(400);
            expect(response.body.message).toBeDefined();
            expect(response.body.status).toBeDefined();

            expect(response.body.message).toStrictEqual(['Chapter number is required.']);
            expect(response.body.status).toEqual('failure');
        });
    });

    describe('successful upload', () => {
        test('chapter is missing', async () => {
            const question: MultipleChoice = {
                type: 'MCQ',
                options: ['option1', 'option2'],
                correctAnswers: [1],
                chapter: 10,
                question: 2,
                title: 'title',
                description: 'description',
                difficulty: 'Easy',
                feedback: 'feedback',
                questionMolFile: 'some mol file',
            };

            const response = await request(app).post('/api/question/upload').send(question);
            expect(response.statusCode).toBe(201);
            expect(response.body.status).toEqual('success');

            // Check for presence of specific properties including _id
            // Should've made an object and put everything in that, but it is whatever
            expect(response.body.question).toBeDefined();
            expect(response.body.question._id).toBeDefined();
            expect(response.body.question.type).toEqual('MCQ');
            expect(response.body.question.options).toEqual(
                expect.arrayContaining(['option1', 'option2']),
            );
            expect(response.body.question.correctAnswers).toEqual(expect.arrayContaining([1]));
            expect(response.body.question.chapter).toEqual(10);
            expect(response.body.question.question).toEqual(2);
            expect(response.body.question.title).toEqual('title');
            expect(response.body.question.description).toEqual('description');
            expect(response.body.question.difficulty).toEqual('Easy');
            expect(response.body.question.feedback).toEqual('feedback');
            expect(response.body.question.questionMolFile).toEqual('some mol file');
        });
    });
});
