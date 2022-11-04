import { Request, Response } from 'express';

const postComment = async ({ body }: Request, res: Response) => {

    try {
        

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

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}

export { postComment, getCommentsByTask }
