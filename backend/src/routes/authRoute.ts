import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../model/user";
import { generateToken } from "../middleware/auth";

const router = express.Router();

router.post("/register", async (req, res) => {
	try {
		const { username, email, password } = req.body;

		const exists = await User.findOne({ email });
		if (exists)
			return res.status(400).json({ message: "Email already in use" });

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			username,
			email,
			password: hashedPassword,
		});

		const token = generateToken(user._id.toString(), user.email as string);

		res.json({
			message: "User registered successfully",
			data: { token, username: user.username },
		});
	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}
});

router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user || !user.password)
			return res
				.status(400)
				.json({ message: "Invalid email or password" });

		const valid = await bcrypt.compare(password, user.password);
		if (!valid)
			return res
				.status(400)
				.json({ message: "Invalid email or password" });

		const token = generateToken(user._id.toString(), user.email as string);

		res.json({
			message: "Login successfully",
			data: { token, username: user.username },
		});
	} catch (err) {
		console.log("Error: ", err);
		res.status(500).json({ message: "Server error" });
	}
});

export default router;
