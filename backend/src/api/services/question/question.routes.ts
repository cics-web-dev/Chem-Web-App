import { Router } from 'express';

import * as questionController from './question.controller.js';

const router = Router();

router.post('/route1', questionController.route1);
router.post('/route2', questionController.route2);
router.get('/questions/:id', questionController.getSingleQuestion);
router.get('/questions/list', questionController.getSidebarQuestions);

export default router;
