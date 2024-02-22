import express, { Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';

import routes from './routes/routes.js';
import morganMiddleware from './middlewares/Morgan.middleware.js';
import errorMiddleware from './middlewares/Error.middleware.js';

const app = express();

/**
 * Dependencies configurations
 */

app.use(morgan('dev'));
app.use(morganMiddleware);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello, world!' });
});

import fs from 'fs/promises';
import path from 'path';

const DATAFOLDER = path.resolve(process.cwd(), 'src/api/sampleData');

app.get('/mol', async (req: Request, res: Response) => {
    const molPathBase64 = await fs.readFile(path.resolve(DATAFOLDER, 'reaction3_1.mol'), 'base64');

    res.json({
        mol: molPathBase64
    })
});


export default app;
