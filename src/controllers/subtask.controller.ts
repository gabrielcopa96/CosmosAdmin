import { Request, Response } from "express";

import {
  createSubtask,
  getSubtasks,
  getOneSubtask,
  getAllSubtasksByTask,
  updateOneSubtask,
  deleteOneSubtask,
} from "../services/subtask.service";

const postSubtask = async ({ body }: Request, res: Response) => {
  try {
    const task = await createSubtask(body);

    res.status(201).json({
      ok: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
    });
  }
};

const getSubtaskByTask = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params; // id -> de la tarea a la cual pertenecen las subtareas

    const task = await getAllSubtasksByTask(id);

    res.status(200).json({
      ok: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
    });
  }
};

const getAllSubtasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getSubtasks();

    res.status(200).json({
      ok: true,
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
    });
  }
};

const getSubtaskById = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    const task = await getOneSubtask(id);

    res.status(200).json({
      ok: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
    });
  }
};

const putSubtask = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;

    const task = await updateOneSubtask(id, body);

    res.status(200).json({
      ok: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
    });
  }
};

const deleteSubtask = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    const task = await deleteOneSubtask(id);

    res.status(200).json({
      ok: true,
      task,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Hubo un error volvelo a intentar",
    });
  }
};

export {
  postSubtask,
  getAllSubtasks,
  getSubtaskById,
  getSubtaskByTask,
  putSubtask,
  deleteSubtask,
  // assignSubTaskUser
};
