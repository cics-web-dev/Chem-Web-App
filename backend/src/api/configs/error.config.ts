/*
 * This file contains most if not all of the error messages that can be thrown by the application.
 * This is useful for organzing and centralizing all the error messages in one place.
 */

const AuthError = {
    USER_NOT_FOUND: 'User not found',
    INVALID_CREDENTIALS: 'Invalid credentials',
    USER_EXISTS: 'User with same email already exists',
};

export default {
    // question service error messages
    QUESTION_NOT_FOUND: (id: string) => `Question with id ${id} is not found in the database`,    
    Auth: AuthError
};
