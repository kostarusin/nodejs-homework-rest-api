import express from "express";
import authController from "../../controllers/auth-controller.js";

import { validateBody } from "../../decorators/index.js";

import { authenticate } from "../../middlewares/index.js";

import {
  userSignupSchema,
  userSigninSchema,
} from "../../utils/validation/authValidationScemas.js";

const userSignupValidate = validateBody(userSignupSchema);
const userSigninValidate = validateBody(userSigninSchema);

const authRouter = express.Router();

authRouter.post("/signup", userSignupValidate, authController.signup);

authRouter.post("/signin", userSigninValidate, authController.signin);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/signout", authenticate, authController.signout);

export default authRouter;
