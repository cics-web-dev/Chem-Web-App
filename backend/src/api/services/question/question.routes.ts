import { Router } from 'express';

import * as questionController from './question.controller.js';

import { TypeCheckerMiddleware as typeChecker } from '../../middlewares/Zod.middleware.js';

const router = Router();

// GET
router.get('/:questionID', questionController.getSingleQuestion);
router.get('/sidebar/:studentID', questionController.getSidebarMetadata);

// POST
router.post('/bookmark/:questionID/student/:studentID', questionController.bookmarkQuestion);
router.post('/status/:questionID/student/:studentID', questionController.updateQuestionStatus);
router.post('/progress/:questionID/student/:studentID', questionController.updateUserProgress);

// Teacher routes
router.post('/upload', typeChecker(), questionController.uploadQuestion);

export default router;
