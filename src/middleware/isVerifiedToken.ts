import { Request, Response, NextFunction } from "express";
import { isVerifiedTokenUser } from "../services/auth.service";

const isVerifiedToken = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization;
    
    console.log('token', token);

    res.json({
        ok: true,
        msg: 'Token verificado correctamente'
    })
}

export { isVerifiedToken }