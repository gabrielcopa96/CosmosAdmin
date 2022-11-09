import { Router } from "express";

import {
  postSprint,
  getSprint,
  putSprint,
  deleteSprint,
  getSprintsByUser,
} from "../controllers/sprint.controller";

import { isAuthenticated } from '../middleware/authenticated';

const router = Router();

    router
        .post("/", isAuthenticated ,postSprint)
        .get("/:id", isAuthenticated ,getSprint)
        .put("/:id", isAuthenticated ,putSprint)
        .delete("/:id", isAuthenticated ,deleteSprint)
        .get("/user/:id", isAuthenticated ,getSprintsByUser);

export { router };
