import { Router } from 'express';

import { postIncidences, getIncidencesByTask } from '../controllers/incidences.controller';

import { isAuthenticated } from '../middleware/authenticated';

const router = Router();

    router
        .post('/', isAuthenticated ,postIncidences)
        .get('/task/:id', isAuthenticated ,getIncidencesByTask)

export { router }