import jwt from "jsonwebtoken";
import { type Request, type Response, type NextFunction } from "express";
import type { ObjectId, Types } from "mongoose";

export const auth = (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.headers.authorization?.split(" ")[1];

		if (!token) return res.status(401).json({ message: "Unauthorized" });

		const decoded = jwt.verify(token, process.env.JWT_SECRET!);
		// @ts-ignore
		req.user = decoded;

		next();
	} catch (error) {
		return res.status(401).json({ message: "Invalid token" });
	}
};

export const generateToken = (userId: string, email: string) => {
	const token = jwt.sign(
		{ id: userId, email: email },
		process.env.JWT_SECRET!,
		{ expiresIn: "7d" }
	);
	return token;
};
