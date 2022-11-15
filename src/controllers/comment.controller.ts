import { Request, Response } from 'express';

import {
    createCommentByTask,
    createCommentBySubTask,
    getAllCommentsByTask,
    getAllCommentsBySubtask,
    getOneComment,
    updateOneComment,
    deleteOneComment
} from "../services/comment.service";

const postCommentByTask = async ({ body }: Request, res: Response) => {

    try {
        
        const comment = await createCommentByTask(body);

        res.status(201).json({
            ok: true,
            comment,
        });

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }

}

const postCommentBySubstask = async ({body}: Request, res: Response) => {

    try {
        
        const comment = await createCommentBySubTask(body);

        res.status(201).json({
            ok: true,
            comment,
        });


    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}

const getCommentsByTask = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params

        const comments = await getAllCommentsByTask(id);

        res.status(200).json({
            ok: true,
            comments
        });

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}

const getCommentById = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params

        const comment = await getOneComment(id);

        res.status(200).json({
            ok: true,
            comment
        });

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}


const putComment = async ({ params, body }: Request, res: Response) => {

    try {
        
        const { id } = params

        const comment = await updateOneComment(id, body);

        res.status(200).json({
            ok: true,
            comment
        });

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}

const deleteComment = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params

        const comment = await deleteOneComment(id);

        res.status(200).json({
            ok: true,
            comment
        });

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}

export {
    postCommentByTask,
    postCommentBySubstask,
    getCommentsByTask,
    getCommentById,
    putComment,
    deleteComment
}
