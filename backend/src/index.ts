import express from "express";
import { connectDB, disconnectDB } from "./config/db";
import authRoutes from './routes/authRoute'
// import taskRoutes from './route/taskRoute'

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});



app.use("/api", authRoutes);
// app.use("/api/tasks", taskRoutes);

async function start() {
  await connectDB();
  const server = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });

  // graceful shutdown
  const graceful = async () => {
    console.log("Shutting down...");
    await disconnectDB();
    server.close(() => {
      process.exit(0);
    });
  };

  process.on("SIGINT", graceful);
  process.on("SIGTERM", graceful);
}

start().catch((err) => {
  console.error("Failed to start server:", err);
});
