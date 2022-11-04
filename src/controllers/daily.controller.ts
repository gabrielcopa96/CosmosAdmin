import { Request, Response } from "express";

const postDaily = async ({ body }: Request, res: Response) => {
    try {
  
    
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

export { postDaily, getDailyBySprint, getDailyById  }