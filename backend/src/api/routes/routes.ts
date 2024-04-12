import { Router } from 'express';

import AuthRouter from '../services/auth/auth.routes.js';
import QuestionRouter from '../services/question/question.routes.js';

const router = Router();

router.use('/auth', AuthRouter);
router.use('/question', QuestionRouter);

export default Router().use('/api', router);
