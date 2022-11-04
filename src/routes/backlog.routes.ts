import { Router } from 'express';

import { postBacklog, getOneBacklogByOwner, getAllBacklogsByOwner } from '../controllers/backlog.controller';

const router = Router();

    router
        .post('/', postBacklog)
        .get('/:id/owner/:owner', getOneBacklogByOwner)
        .get('/owner/:owner', getAllBacklogsByOwner)




export { router }