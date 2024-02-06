import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello, world!' });
});

/**
 * Server Listening for connections
 */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`);
});
