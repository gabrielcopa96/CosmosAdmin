import { Router } from 'express';

import {
    postCommentByTask,
    postCommentBySubstask,
    getCommentsByTask,
    getCommentById,
    putComment,
    deleteComment
} from '../controllers/comment.controller';

import { isAuthenticated } from '../middleware/authenticated';

const router = Router();

    router
        .post('/task/:id',isAuthenticated ,postCommentByTask)
        .post('/subtask/:id', isAuthenticated ,postCommentBySubstask)
        .get('/task/:id', isAuthenticated ,getCommentsByTask)
        .get('/:id', isAuthenticated ,getCommentById)
        .put('/:id', isAuthenticated ,putComment)
        .delete('/:id', isAuthenticated ,deleteComment);

export { router }