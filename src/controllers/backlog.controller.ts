import { Request, Response } from 'express';

const postBacklog = async ({ body }: Request, res: Response) => {

    try {
        

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }

}

const getOneBacklogByOwner = async ({ params }: Request, res: Response) => {

    try {
        
        const { id, owner } = params

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}

const getAllBacklogsByOwner = async ({ params }: Request, res: Response) => {

    try {

        const { id, owner } = params

        
    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}  

// const filterUserByBacklog = async ({ params, query }: Request, res: Response) => {

//     try {
        
//         const { id } = params


//     } catch (error) {
        
//         res.status(500).json({
//             ok: false,
//             msg: 'Hubo un error volvelo a intentar'
//         })

//     }
// }

export { postBacklog, getOneBacklogByOwner, getAllBacklogsByOwner }