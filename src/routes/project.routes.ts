import { Router } from 'express';

import { postProject, getProjects, aggregateMembers } from '../controllers/project.controller';

import { isAuthenticated } from '../middleware/authenticated';

const router = Router();

    // [[POST] -> Crear un nuevo proyecto, solo lo puede crear un usuario autenticado
    router
        .get('/', isAuthenticated ,getProjects)
        .post('/', isAuthenticated ,postProject)
        .patch('/:id/addmembers', isAuthenticated ,aggregateMembers)

export { router }