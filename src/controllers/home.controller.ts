// There are routes for home page and public data

import { Request, Response } from "express";
import { getCategories } from "../repositories/categories.respositry";
import { ICategory } from "../entities/Categories";

export const homeController = (req: Request, res: Response) => {
  res.json({ message: "🚀 Welcome to My Express App japones!" });
};

export const servicesController = async (req: Request, res: Response) => {
  try {
    // const services = await getServices()
  } catch (error) {
    console.log(error);
  }
};

export const ofersController = (req: Request, res: Response) => {
  res.json({ message: "🚀 Welcome to My Express App japones!" });
};  

export const categoriesController = async (req: Request, res: Response) => {
  try {
    const categories: ICategory[] = await getCategories()
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const productsByCategoriesController = (req: Request, res: Response) => {
  res.json({ message: "🚀 Welcome to My Express App japones!" });
};