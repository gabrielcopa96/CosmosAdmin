import { Request, Response, NextFunction } from "express"


const checkAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    if(req.isAuthenticated() === true){
        
        // here you should make a redirect, for the main screen
        return res.status(401).json({
            isAuth: true,
            msg: 'You are already authenticated'
        })

    }

    next();

}

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    
        if(req.isAuthenticated() === true){
            return next();
        }
    
        return res.status(401).json({
            msg: 'You are not authenticated'
        })
    
}

export { checkAuthenticated, isAuthenticated }