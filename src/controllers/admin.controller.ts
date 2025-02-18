import { Request, Response } from "express";
import { Categories, ICategory } from "../entities/Categories";
import jwt from 'jsonwebtoken'
import md5 from 'md5'
import { User } from "../entities/Users";
import { IProduct, Products } from "../entities/Products";

export const loginController = async (req: Request, res: Response) => {
    try {
        const {user,password} = req.body;
        const us = await User.findOne({where: {email: user, password: md5(password)}});
        if (us) {
            const token = jwt.sign({ user: "admin" }, process.env.KEY || "secret");
            res.json({ token });
        }else{
            throw new Error("Invalid user or password");
        }
    } catch (error) {
        res.status(400).json({ message: "Invalid user or password" });
    }
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

export const updateCategoryController = async (req: Request, res: Response) => {
    const { id, name, description, img1, img2 } = req.body;
    const category = await Categories.findOne({where: {id}});
    if (!category) {
        res.status(404).json({ message: "Category not found" });
        return;
    }
    category.name = name;
    category.description = description;
    category.img1 = img1;
    category.img2 = img2;
    await category.save();
    res.json(category);
};

export const deleteCategoryController = async (req: Request, res: Response) => {
    const id  = req.params.id;
    const category = await Categories.findOne({where: {id}});
    if (!category) {
        res.status(404).json({ message: "Category not found" });
        return;
    }
    await Categories.delete(id);
    res.json({ message: "Category deleted" });
};

export const createProductController = async (req: Request, res: Response) => {
    try {
        const { name, description, img1, img2, img3, fk_category } = req.body;
        const newProduct: IProduct = {
            name,
            description,
            img1,
            img2,
            img3,
            fk_category
        }
        const product = new Products(newProduct);
        await product.save();
        res.json(product);
    } catch (error) {
        
    }
};