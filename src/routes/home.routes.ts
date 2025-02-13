import { Router } from "express";
import { categoriesController, homeController, ofersController, productsByCategoriesController, servicesController } from "../controllers/home.controller";

export const homeRouter = Router();

homeRouter.get("/", homeController);
homeRouter.get("/services", servicesController);
homeRouter.get("/ofers", ofersController);
homeRouter.get("/categories", categoriesController);
homeRouter.post("/products-by-categories", productsByCategoriesController);
