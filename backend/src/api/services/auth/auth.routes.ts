import { Router } from 'express';

import { loginSchema, signupSchema } from '../../validations/auth.validation.js';
import { zodValidationMiddleware as validate } from '../../middlewares/Zod.middleware.js';
import * as userController from './auth.controller.js';

const router = Router();

router.post('/signup', validate(signupSchema), userController.signup);
router.post('/login', validate(loginSchema), userController.login);

export default router;
