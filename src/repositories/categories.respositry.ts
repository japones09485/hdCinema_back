import { Categories, ICategory } from "../entities/Categories"

export const getCategories = async (): Promise<ICategory[]> => {
    const categories = await Categories.find()
    return categories
}