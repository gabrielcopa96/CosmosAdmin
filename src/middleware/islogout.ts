import { Request, Response, NextFunction } from "express"


const islogout = (req: Request, res: Response, next: NextFunction) => {

    if(req.isAuthenticated()){
        
        // here you should make a redirect, for the main screen
        next();

    }

    return res.send('sdfsfgdfg')

}

export { islogout }