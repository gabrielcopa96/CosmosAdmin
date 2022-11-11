import { Request, Response } from 'express';
import { getOneTask, getAllTasksByBacklog, newTask, updateOneTask, deleteOneTask } from '../services/task.service';

const getTaskById = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params;

        const task = getOneTask(id);

        return res.status(200).json({
            ok: true,
            task
        });

    } catch (error: any) {
        

        res.status(500).json({
            ok: false,
            msg: "Hubo un error volvelo a intentar",
            error: error.message,
          });
    }
}

const getTasksByBacklog = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params;

        const tasks = getAllTasksByBacklog(id);

        return res.status(200).json({
            ok: true,
            tasks
        });


    } catch (error: any) {
        

        res.status(500).json({
            ok: false,
            msg: "Hubo un error volvelo a intentar",
            error: error.message,
          });
    }
}

const createTask = async ({ body }: Request, res: Response) => {

    try {
        
        const task = newTask(body);

        return res.status(200).json({
            ok: true,
            task
        });


    } catch (error: any) {
        

        res.status(500).json({
            ok: false,
            msg: "Hubo un error volvelo a intentar",
            error: error.message,
          });
    }
}

const updateTask = async ({ params, body }: Request, res: Response) => {

    try {

        const { id } = params;

        const task = updateOneTask(id, body);

        return res.status(200).json({
            ok: true,
            task
        });

        
    } catch (error: any) {
        
        res.status(500).json({
            ok: false,
            msg: "Hubo un error volvelo a intentar",
            error: error.message,
          });

    }
}

const deleteTask = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params;

        const task = deleteOneTask(id);

        return res.status(200).json({
            ok: true,
            task
        });


    } catch (error: any) {
        
        res.status(500).json({
            ok: false,
            msg: "Hubo un error volvelo a intentar",
            error: error.message,
          });
    }
}

export { getTaskById, getTasksByBacklog, createTask, updateTask, deleteTask }