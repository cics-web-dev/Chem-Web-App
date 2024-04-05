import jwt from 'jsonwebtoken';

/**
 *  Generate a json web token that is used across multiple requests to maintain the state of user.
 *  The token is generated using the user id and a secret key.
 *  The token expires in 60 days; in other words, the user will have to login again after 60 days.
 * @param id The user id
 * @returns a json web token
 */
const generateToken = (id: string): string => {
    const payload = { user: { id } };
    const secretKey = process.env.JWT_SECRET || 'secretCat';
    const expireTime = '60d';
    return jwt.sign(payload, secretKey, { expiresIn: expireTime });
};

export { generateToken };
