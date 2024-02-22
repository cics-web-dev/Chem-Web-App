import { Router } from 'express';

import * as questionController from './question.controller.js';

const router = Router();

router.get('/:id', questionController.getSingleQuestion);
router.get('/sidebar/list', questionController.getSidebarQuestions);
router.post('/bookmark/:studentid/:bookmarkid', questionController.bookmarkQuestion);
// update the status of the question for a student
// change incomplete to complete or vice versa
router.post('/status/:studentid/:id', questionController.updateQuestionStatus);
// update previous progress of the question by id
router.post('/:studentid/:id', questionController.updateQuestionProgress);
export default router;
