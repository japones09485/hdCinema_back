import { Request, Response } from "express";

export const homeController = (req: Request, res: Response) => {
  res.json({ message: "🚀 Welcome to My Express App japones!" });
};
