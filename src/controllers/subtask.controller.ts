import { Request, Response} from 'express';

const postSubtask = async ({ body }: Request, res: Response) => {
    try {
        



    } catch (error) {
     
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })
    }
}

const getSubtaskByTask = async ({ params }: Request, res: Response) => {

    try {

        const { id } = params // id -> de la tarea a la cual pertenecen las subtareas

        
    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })
    }
}

const assignSubTaskUser = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params // id -> del usuario al cual se le esta asignando la subtarea

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })
    }
}

export { postSubtask, getSubtaskByTask, assignSubTaskUser }