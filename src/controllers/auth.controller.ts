import { Request, Response, NextFunction } from "express";

import { signup } from "../services/auth.service";

import { OutPutResponseRegister } from '../interfaces/users.interface';

interface Error {
  ok: boolean;
  msg: string;
}

const registerUser = async ({ body }: Request, res: Response): Promise<any | Error | OutPutResponseRegister> => {
  try {
    const newUser = await signup(body);

    res.status(201).json({
      ok: true,
      msg: "Usuario creado correctamente",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Try again",
    });
  }
};

const loginUser = (req: Request, res: Response) => {
  try {

    const user = req.user

    res.status(200).json({
      ok: true,
      msg: "User logueado correctamente",
      userAuth: user
    });
    
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Error volve a intentar",
    });
  }
};

const logoutUser = (req: Request, res: Response, next: NextFunction) => {
  try {

    req.logout(function (err) {
      if (err) {
        return next(err);
      }

      res.status(200).json({
        ok: true,
        msg: "successful signout",
      });
    });
  } catch (error: any) {
    res.status(500).json({
      msg: "Error al desloguearte",
      error: error.message,
    });
  }
};

export { registerUser, loginUser, logoutUser };
