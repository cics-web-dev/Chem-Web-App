import { Router } from 'express';

import * as questionController from './question.controller.js';

const router = Router();

router.get('/:id', questionController.getSingleQuestion);
router.get('/sidebar/list', questionController.getSidebarQuestions);
router.post('/bookmark/:studentid/:bookmarkid', questionController.bookmarkQuestion);

export default router;
