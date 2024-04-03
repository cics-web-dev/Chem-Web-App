/**
 * This HttpError class standardizes our response when there is an error on the client or server side.
 *  @example
 * ```ts
 * import { HttpError } from '../../utils/httpError.util.js';
 * if (condition) {
 *     throw new HttpError(<error-code>, <errorMessage>);
 * }
 *
 * // This is same as: (this is how the error middleware will handle the error and send it back to the client)
 *    return res.status(<error-code>).json({
 *       message: <errorMessage>,
 *       status: 'failure',
 * });
 * ```
 */
export class HttpError extends Error {
    errorCode: number;
    public readonly errorMessage: string;

    constructor(errorCode: number, errorMessage: string) {
        super(errorMessage);
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}
