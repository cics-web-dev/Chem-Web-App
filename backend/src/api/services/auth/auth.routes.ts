import { Router } from 'express';

import * from './auth.controller.js'; 

// Create a new router
const router = Router();

router.post('/signup', signup);

export default router;