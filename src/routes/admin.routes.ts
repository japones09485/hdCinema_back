import { Router } from "express";
import {
  createCategoryController,
  createProductController,
  deleteCategoryController,
  loginController,
  updateCategoryController,
} from "../controllers/admin.controller";
import { authMiddleware } from "../auth/auth";
import upload from "../middlewares/multerConfig";

export const adminRouter = Router();

adminRouter.post("/login", loginController);
// Private routes categories
adminRouter.post("/create-category", createCategoryController);
adminRouter.post("/update-category", updateCategoryController);
adminRouter.get("/delete-category/:id", deleteCategoryController);
// Private routes products
adminRouter.post(
  "/create-product",
  upload.fields([{ name: "img1" }, { name: "img2" }]),
  createProductController
);
adminRouter.post("/update-product", updateCategoryController);
adminRouter.get("/delete-product/:id", deleteCategoryController);
adminRouter.get("/list-products", deleteCategoryController);
