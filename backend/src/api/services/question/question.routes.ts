import { Router } from 'express';

import * as questionController from './question.controller.js';

const router = Router();

router.get('/questions/:id', questionController.getSingleQuestion);
router.get('/questions/list', questionController.getSidebarQuestions);

export default router;
