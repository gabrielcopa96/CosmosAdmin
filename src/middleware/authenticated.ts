import { Request, Response, NextFunction } from "express"


const checkAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    if(req.isAuthenticated() === true){
        
        // here you should make a redirect, for the main screen
        return res.json({
            msg: 'You are already authenticated'
        })

    }

    next();

}

export { checkAuthenticated }