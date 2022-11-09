import { Router } from 'express';

import { postDaily, getDailyBySprint, getDailyById } from '../controllers/daily.controller';

import { isAuthenticated } from '../middleware/authenticated';

const router = Router();

    router
        .post('/', isAuthenticated ,postDaily)
        .get('/sprint/:id', isAuthenticated ,getDailyBySprint)
        .get('/:id', isAuthenticated ,getDailyById)

export { router }