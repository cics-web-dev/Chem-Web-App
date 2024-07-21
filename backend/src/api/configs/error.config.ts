/*
 * This file contains most if not all of the error messages that can be thrown by the application.
 * This is useful for organzing and centralizing all the error messages in one place.
 */

const AuthError = {
    USER_NOT_FOUND: 'User with this email not found when logging in',
    INVALID_CREDENTIALS: 'User with invalid credentials when logging in',
    USER_EXISTS: 'User with same email already exists when signing up',
};

export const ApiError = {
    // question service error messages
    QUESTION_NOT_FOUND: (id: string) => `Question with id ${id} is not found in the database`,
    Auth: AuthError,
};
