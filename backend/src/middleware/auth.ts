import jwt from "jsonwebtoken";
import { type Request,type Response,type NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    // @ts-ignore
    req.user = decoded

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
