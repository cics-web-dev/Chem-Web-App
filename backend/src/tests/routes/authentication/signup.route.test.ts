import request from 'supertest';
import app from '../../../api/app.js';
import { MongoDB } from '../../../api/configs/mongoose.config.js';

// capitalize the first letter of a string
const capitalize = (s: string): string => s[0].toUpperCase() + s.slice(1);

describe('sign up route testings for signing up a user', () => {
    beforeAll(async () => {
        // Setup code before any tests run for mongoDB
        await MongoDB.connect();
    });

    afterAll(async () => {
        // close MongoDB connection and server after all tests run
        await MongoDB.disconnect();
    });

    describe('successful request', () => {
        test('match with all requirements (201)', async () => {
            const user: Record<string, string> = {
                name: 'John Doe',
                email: 'johnDoe@gmail.com',
                password: 'password1',
                role: 'student',
            };

            const response = await request(app).post('/api/auth/signup').send(user);

            expect(response.statusCode).toBe(201);
            expect(response.body.status).toBeDefined();
            expect(response.body.status).toBe('success');
            expect(response.body.user).toBeDefined();
            expect(response.body.user.name).toBe(user.name);
            expect(response.body.user.email).toBe(user.email);
            expect(response.body.user.role).toBe(user.role);
            expect(response.body.user.token).toBeDefined();
        });
    });

    describe('unsuccessful request', () => {
        describe('failing to meet validation requirments (400)', () => {
            test('missing name or email or password or role', async () => {
                const user: Record<string, string> = {
                    name: 'John Doe',
                    email: 'johnDoe@gmail.com',
                    password: 'password1',
                    role: 'student',
                };

                /**
                 * test for each missing field
                 * expected response:
                 * ```json
                 * {
                 *    "message": [
                 *       <missing field> is required
                 *    ],
                 *    "status": "failure"
                 * }
                 * ```
                 */
                for (let i = 0; i < 4; ++i) {
                    let temp = { ...user };
                    let missingField = Object.keys(user)[i];
                    delete temp[missingField];

                    const response = await request(app).post('/api/auth/signup').send(temp);

                    expect(response.statusCode).toBe(400);
                    expect(response.body.status).toBeDefined();
                    expect(response.body.status).toBe('failure');
                    expect(response.body.message).toBeDefined();
                    expect(Array.isArray(response.body.message)).toBe(true);
                    expect(response.body.message).toHaveLength(1);
                    expect(response.body.message[0]).toBe(
                        `${capitalize(missingField)} is required`,
                    );
                }
            });

            describe('email validation', () => {
                test('invalid email format', async () => {
                    const user: Record<string, string> = {
                        name: 'John Doe',
                        email: 'johnDoe@',
                        password: 'password1',
                        role: 'student',
                    };

                    const response = await request(app).post('/api/auth/signup').send(user);

                    expect(response.statusCode).toBe(400);
                    expect(response.body.status).toBe('failure');
                    expect(response.body.message).toHaveLength(1);
                    expect(response.body.message[0]).toBe('Invalid email format');
                });
            });

            describe('password validation', () => {
                const user: Record<string, string> = {
                    name: 'John Doe',
                    email: 'johnDoe@gmail.com',
                    password: 'password1',
                    role: 'student',
                };

                test('password has less than 8 characters', async () => {
                    const temp = { ...user };
                    temp.password = 'pass123';

                    const response = await request(app).post('/api/auth/signup').send(temp);

                    expect(response.statusCode).toBe(400);
                    expect(response.body.message).toHaveLength(1);
                    expect(response.body.message[0]).toBe('Password must be at least 8 characters');
                });

                test('password has 8 characters, but does not have a number', async () => {
                    const temp = { ...user };
                    temp.password = 'password';

                    const response = await request(app).post('/api/auth/signup').send(temp);

                    expect(response.statusCode).toBe(400);
                    expect(response.body.message).toHaveLength(1);
                    expect(response.body.message[0]).toBe('Password must include a number');
                });

                test('password has 8 characters, has number but no letter', async () => {
                    const temp = { ...user };
                    temp.password = '12345678';

                    const response = await request(app).post('/api/auth/signup').send(temp);

                    expect(response.statusCode).toBe(400);
                    expect(response.body.message).toHaveLength(1);
                    expect(response.body.message[0]).toBe('Password must include a letter');
                });
            });

            describe('role validation', () => {
                test('role must be teacher or student', async () => {
                    const response = await request(app).post('/api/auth/signup').send({
                        name: 'John Doe',
                        email: 'johndoe@gmail.com',
                        password: 'password1',
                        role: 'educator',
                    });

                    expect(response.statusCode).toBe(400);
                    expect(response.body.message).toHaveLength(1);
                    expect(response.body.message[0]).toBe('Role is required');
                });
            });
        });

        describe('existing user (409)', () => {
            test('user with the same email already exists in the database', async () => {
                const user: Record<string, string> = {
                    name: 'John Doe',
                    email: 'johnDoe@gmail.com',
                    password: 'password1',
                    role: 'student',
                };

                await request(app).post('/api/auth/signup').send(user);

                const response = await request(app).post('/api/auth/signup').send(user);

                expect(response.statusCode).toBe(409);
                expect(response.body.message).toBeDefined();
                expect(response.body.message).toBe(
                    'User with same email already exists when signing up',
                );
            });
        });
    });
});
