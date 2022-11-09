import { Router } from "express";

import {
  getTaskById,
  getTasksByBacklog,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";

import { isAuthenticated } from "../middleware/authenticated";

const router = Router();

        router
            .get("/:id", isAuthenticated ,getTaskById)
            .get("/backlog/:id", isAuthenticated ,getTasksByBacklog)
            .post("/", isAuthenticated ,createTask)
            .put("/:id", isAuthenticated ,updateTask)
            .delete("/:id", isAuthenticated ,deleteTask);

export { router };
