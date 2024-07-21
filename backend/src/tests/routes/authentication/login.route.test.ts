import request from 'supertest';
import app from '../../../api/app.js';
import { MongoDB } from '../../../api/configs/mongoose.config.js';

describe('login route testings for logging a user', () => {
    beforeAll(async () => {
        // Setup code before any tests run for mongoDB
        await MongoDB.connect();
    });

    afterAll(async () => {
        // close MongoDB connection and server after all tests run
        await MongoDB.disconnect();
    });

    describe('successful request', () => {
        test('sign up then login (200)', async () => {
            const signUpUserInfo: Record<string, string> = {
                name: 'John Doe',
                email: 'johnDoe@gmail.com',
                password: 'password1',
                role: 'student',
            };

            await request(app).post('/api/auth/signup').send(signUpUserInfo);

            const loginUserInfo: Record<string, string> = {
                email: 'johnDoe@gmail.com',
                password: 'password1',
            };

            const response = await request(app).post('/api/auth/login').send(loginUserInfo);

            expect(response.statusCode).toBe(200);
            expect(response.body.status).toBeDefined();
            expect(response.body.status).toBe('success');
            expect(response.body.user).toBeDefined();
            expect(response.body.user.name).toBe(signUpUserInfo.name);
            expect(response.body.user.email).toBe(signUpUserInfo.email);
            expect(response.body.user.role).toBe(signUpUserInfo.role);
            expect(response.body.user.token).toBeDefined();
        });
    });
    describe('unsuccessful request', () => {
        test('nonexsitent user login (404)', async () => {
            const loginUserInfo: Record<string, string> = {
                email: 'john@gmail.com',
                password: 'password1',
            };

            const response = await request(app).post('/api/auth/login').send(loginUserInfo);

            expect(response.statusCode).toBe(404);
            expect(response.body.status).toBeDefined();
            expect(response.body.status).toBe('failure');
            expect(response.body.message).toBeDefined();
            expect(response.body.message).toBe('User with this email not found when logging in');
        });

        test('incorrect password (401)', async () => {
            const loginUserInfo: Record<string, string> = {
                email: 'johnDoe@gmail.com',
                password: 'somerandompassord2',
            };

            const response = await request(app).post('/api/auth/login').send(loginUserInfo);

            expect(response.statusCode).toBe(401);
            expect(response.body.status).toBeDefined();
            expect(response.body.status).toBe('failure');
            expect(response.body.message).toBeDefined();
            expect(response.body.message).toBe('User with invalid credentials when logging in');
        });
    });
});
