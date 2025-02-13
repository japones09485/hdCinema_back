import { Request, Response } from "express";
import { Categories, ICategory } from "../entities/Categories";

export const loginController = (req: Request, res: Response) => {
  res.json({ message: "" });
};

export const createCategoryController = async (req: Request, res: Response) => {
    const { name, description, img1, img2 } = req.body;
    const newCategory: ICategory = {
        name,
        description,
        img1,
        img2
    }
    const category = new Categories(newCategory);
    await category.save();
    res.json(category);
};