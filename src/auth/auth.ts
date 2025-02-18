import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
        // The structure of the token is "Bearer <token>"
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            const data = await jwt.verify(token, process.env.KEY || "secret");
            req.body.userSession = data;
            next();
        } else {
            res.status(401).json({ message: "Invalid token" });
        }
    } else {
        res.status(401).json({ message: "No token provided" });
    }
};