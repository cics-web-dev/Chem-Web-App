import { Router } from 'express';

import * as questionController from './question.controller.js';

const router = Router();

// GET
router.get('/:questionID', questionController.getSingleQuestion);
router.get('/sidebar/:studentID', questionController.getSidebarQuestions);

// POST
router.post('/bookmark/:questionID/student/:studentID', questionController.bookmarkQuestion);
router.post('/status/:questionID/student/:studentID', questionController.updateQuestionStatus);
router.post('/progress/:questionID/student/:studentID', questionController.updateUserProgress);

export default router;
