import { Router } from "express";
import { createCategoryController, loginController } from "../controllers/admin.controller";

export const adminRouter = Router();

adminRouter.post("/login", loginController);
// Private routes categories
adminRouter.post("/create-category", createCategoryController);