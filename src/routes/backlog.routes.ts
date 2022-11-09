import { Router } from 'express';

import { postBacklog, getOneBacklogByOwner, getAllBacklogsByOwner } from '../controllers/backlog.controller';

import { isAuthenticated } from '../middleware/authenticated';

const router = Router();

    router
        .post('/', isAuthenticated ,postBacklog)
        .get('/:id/owner/:owner', isAuthenticated ,getOneBacklogByOwner)
        .get('/owner/:owner', isAuthenticated ,getAllBacklogsByOwner)




export { router }