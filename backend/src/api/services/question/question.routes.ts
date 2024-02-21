import { Router } from 'express';

import * as questionController from './question.controller.js';

const router = Router();

router.get('/:id', questionController.getSingleQuestion);
router.get('/sidebar/list', questionController.getSidebarQuestions);

export default router;
