import { Router } from "express";

import {
  postSubtask,
  getAllSubtasks,
  getSubtaskById,
  getSubtaskByTask,
  putSubtask,
  deleteSubtask,
} from "../controllers/subtask.controller";

import { isAuthenticated } from "../middleware/authenticated";

const router = Router();

router.post("/", isAuthenticated, postSubtask);
router.get("/task/:id", isAuthenticated, getSubtaskByTask);
router.get("/", isAuthenticated, getAllSubtasks);
router.get("/:id", isAuthenticated, getSubtaskById);
router.put("/:id", isAuthenticated, putSubtask);
router.delete("/:id", isAuthenticated, deleteSubtask);

export { router };
