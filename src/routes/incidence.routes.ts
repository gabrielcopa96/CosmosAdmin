import { Router } from 'express';

import { postIncidences, getIncidencesByTask } from '../controllers/incidences.controller';

const router = Router();

    router
        .post('/', postIncidences)
        .get('/task/:id', getIncidencesByTask)

export { router }