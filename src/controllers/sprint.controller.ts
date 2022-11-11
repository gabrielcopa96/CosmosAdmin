import { Request, Response } from "express";
import {
  createSprint,
  getOneSprint,
  updateSprint,
  deleteOneSprint,
} from "../services/sprint.service";

const postSprint = ({ body }: Request, res: Response) => {
  try {

    const sprint = createSprint(body);

    return res.status(200).json({
      ok: true,
      sprint,
    });

  } catch (error: any) {

    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
      error: error.message,
    });

  }
};

const getSprint = ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    const sprint = getOneSprint(id);

    return res.status(200).json({
        ok: true,
        sprint
    });

  } catch (error: any) {
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
      error: error.message,
    });
  }
};

const putSprint = ({ body, params }: Request, res: Response) => {
  try {

    const { id } = params;

    const sprint = updateSprint(id, body);

    return res.status(200).json({
        ok: true,
        sprint
    });

  } catch (error: any) {
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
      error: error.message,
    });
  }
};

const deleteSprint = ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    const sprint = deleteOneSprint(id);

    return res.status(200).json({
        ok: true,
        sprint
    });

  } catch (error: any) {
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
      error: error.message,
    });
  }
};

export { postSprint, getSprint, putSprint, deleteSprint };
