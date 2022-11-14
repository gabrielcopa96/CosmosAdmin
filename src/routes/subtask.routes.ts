import { Router } from 'express';

import { postSubtask, getSubtaskByTask, assignSubTaskUser } from '../controllers/subtask.controller';

const router = Router();

    router.post('/', postSubtask);
    router.get('/:id', getSubtaskByTask);
    router.put('/:id', assignSubTaskUser);

export { router };