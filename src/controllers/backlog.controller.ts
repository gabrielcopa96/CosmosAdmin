import { Request, Response } from "express";

import {
  createBacklog,
  getBacklogByOwner,
  allsBacklogsByOwner,
} from "../services/backlog.service";

const postBacklog = async ({ body }: Request, res: Response) => {
  try {
    
    const backlog = await createBacklog(body);

    res.status(201).json({
      ok: true,
      msg: "Backlog creado correctamente",
      data: backlog,
    });

  } catch (error) {
    
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
    });

  }
};

const getOneBacklogByOwner = async ({ params }: Request, res: Response) => {
  try {

    const { id, owner } = params;

    const backlog = await getBacklogByOwner(id, owner);

    return res.status(200).json({
      ok: false,
      msg: "Backlog encontrado",
      data: backlog
    });

  } catch (error) {

    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
    });

  }
};

const getAllBacklogsByOwner = async ({ params }: Request, res: Response) => {
  try {
    
    const { owner } = params;

    const backlogs = await allsBacklogsByOwner(owner);

    return res.status(404).json({
        ok: false,
        msg: "Backlogs no encontrados",
        data: backlogs
    });


  } catch (error) {
    
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
    });

  }
};

export { postBacklog, getOneBacklogByOwner, getAllBacklogsByOwner };
