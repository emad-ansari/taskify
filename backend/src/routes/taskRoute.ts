import express from "express";
import { type JwtPayload } from "jsonwebtoken";
import { auth } from "../middleware/auth";
import { Task } from "../model/task";

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const { title, dueDate, priority, status, description } = req.body;

    const task = await Task.create({
      userId: req.user!.id,
      title,
      description,
      dueDate,
      priority,
      status
    });

    res.json({ message: "Task created", task });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user!.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.put("/:id", auth, async (req, res) => {
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user!.id },
      req.body,
      { new: true }
    );

    res.json({ message: "Task updated", updated });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.delete("/:id", auth, async (req, res) => {
  try {
    await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user!.id,
    });

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

