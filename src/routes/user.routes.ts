import { Router } from 'express';

import { getUserById } from '../controllers/user.controller';

import { isAuthenticated } from '../middleware/authenticated';

const router = Router();

        router.get('/:email', getUserById);

export { router }; 