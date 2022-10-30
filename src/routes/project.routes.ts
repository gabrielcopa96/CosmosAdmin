import { Router } from 'express';

import { postProject, getProjects, aggregateMembers } from '../controllers/project.controller';

const router = Router();

    // [[POST] -> Crear un nuevo proyecto, solo lo puede crear un usuario autenticado
    router
        .get('/', getProjects)
        .post('/', postProject)
        .patch('/:id/addmembers', aggregateMembers)

export { router }