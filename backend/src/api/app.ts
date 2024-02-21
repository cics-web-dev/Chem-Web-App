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

export default app;
