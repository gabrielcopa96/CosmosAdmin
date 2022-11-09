import { Router } from 'express';

import { postComment, getCommentsByTask } from '../controllers/comment.controller';

import { isAuthenticated } from '../middleware/authenticated';

const router = Router();

    router
        .post('/',isAuthenticated ,postComment)
        .get('/task/:id', isAuthenticated ,getCommentsByTask)

export { router }