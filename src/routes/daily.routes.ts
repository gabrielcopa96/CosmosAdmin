import { Router } from 'express';

import { postDaily, getDailyBySprint, getDailyById } from '../controllers/daily.controller';

const router = Router();

    router
        .post('/', postDaily)
        .get('/sprint/:id', getDailyBySprint)
        .get('/:id', getDailyById)

export { router }