import { expressjwt } from 'express-jwt';

/**
 * This object contains a middlware for validating JWT through the `jsonwebtoken` module.
 * An encryption algortihm, HS256, is used.
 */
const jwtMiddleware = {
    required: expressjwt({
        secret: process.env.JWT_SECRET || 'secret',
        algorithms: ['HS256'], // specify the algorithm
    }),

    // if the token is not present, the request will still go through 
    // but the `req.user` will be undefined
    optional: expressjwt({
        secret: process.env.JWT_SECRET || 'secret',
        credentialsRequired: false,
        algorithms: ['HS256'], // specify the algorithm
    })
}

export default jwtMiddleware;
