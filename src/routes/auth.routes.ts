import { Router } from "express";

import passport from "passport";

import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller";

import { checkAuthenticated } from "../middleware/authenticated";

const router = Router();

router.post("/signup", registerUser);
router.post(
  "/login",
  checkAuthenticated,
  passport.authenticate("local", {
    successMessage: true,
    failureMessage: true,
  }),
  loginUser
);
router.delete("/signout", logoutUser);

export { router };
