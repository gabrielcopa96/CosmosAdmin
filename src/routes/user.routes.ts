import { Router } from 'express';

import { getUserById } from '../controllers/user.controller';

import { isAuthenticated } from '../middleware/authenticated';

const router = Router();

        router.get('/:id', isAuthenticated ,getUserById);

export { router }; 