import { Request, Response, NextFunction } from "express"

const authClient = (req: Request, res: Response, next: NextFunction) => {

    if(!req.isAuthenticated()){
        
        return res.status(403).send('No podes realizar esta peticion al menos que estes logueado')    
    
    }
    
    
    next();

}

export { authClient }