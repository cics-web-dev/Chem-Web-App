import { Router } from 'express';

import QuestionRouter from '../services/question/question.routes.js';

const router = Router();

router.use('/question', QuestionRouter);

export default Router().use('/api', router);
