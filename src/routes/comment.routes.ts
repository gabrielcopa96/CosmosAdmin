import { Router } from 'express';

import { postComment, getCommentsByTask } from '../controllers/comment.controller';

const router = Router();

    router
        .post('/', postComment)
        .get('/task/:id', getCommentsByTask)

export { router }