import { Request, Response } from "express";

import { createDaily, getAllDailysBySprint, getOneDaily, updateOneDaily, deleteOneDaily } from "../services/daily.service";

const postDaily = async ({ body }: Request, res: Response) => {
    try {
  
        const daily = await createDaily(body);

        res.status(201).json({
            ok: true,
            daily,
        });

    } catch (error) {
    
        res.status(500).json({
            ok: false,
            msg: "Hubo un error volvelo a intentar",
        });

  }
};


const getDailyBySprint = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params

        const dailys = await getAllDailysBySprint(id);

        res.status(200).json({
            ok: true,
            dailys
        });

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}

const getDailyById = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params

        const daily = await getOneDaily(id);

        res.status(200).json({
            ok: true,
            daily
        });

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}

const getDailyByProject = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}


const putDaily = async ({ params, body }: Request, res: Response) => {

    try {
        
        const { id } = params

        const daily = await updateOneDaily(id, body);

        res.status(200).json({
            ok: true,
            daily
        });

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}

const deleteDaily = async ({ params }: Request, res: Response) => {

    try {
        
        const { id } = params

        const daily = await deleteOneDaily(id);

        res.status(200).json({
            ok: true,
            daily
        });

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            msg: 'Hubo un error volvelo a intentar'
        })

    }
}

export { postDaily, getDailyBySprint, getDailyById, putDaily, deleteDaily }