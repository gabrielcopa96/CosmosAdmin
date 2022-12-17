import { Request, Response } from "express";

import { getAllProjects, createProject, addMember } from '../services/project.service';

const postProject = async ({ body }: Request, res: Response) => {

    try {

        const project = await createProject(body);

        res.status(201).json({
            msg: 'Proyecto creado exitosamente',
            project
        })
        
    } catch (error: any) {

        res.status(500).json(error)
    }
}

const getProjects = async (req: Request, res: Response) => {

    try {
        
        const projects = await getAllProjects();

        res.status(200).json({
            msg: 'Aqui tienes todos tus proyectos',
            projects
        })

    } catch (error: any) {
        res.status(500).json({
            msg: 'Este es mi error',
            error: error.message
        })
    }
}

const aggregateMembers = async ({ params, body }: Request, res: Response) => {

    try {
        
        const { id } = params

        const members = await addMember(id, body);

        res.status(200).json({
            ok: 'se actualizo el proyecto y agrego nuevos miembros',
            members
        })

    } catch (error: any) {
        res.status(500).json({
            msg: 'Este es mi error',
            error: error.message
        })
    }
}

export { postProject, getProjects, aggregateMembers }