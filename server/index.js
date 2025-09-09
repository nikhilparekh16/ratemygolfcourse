import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// --- API routes ---
app.get("/", (req, res) => {
  res.send("Welcome to the RateMyGolfCourse API");
});

app.get("/api/courses", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM courses");
    res.json(result.rows);
  } catch (err) {
    console.error("DB ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// --- Serve Vite React build ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/dist")));

// Fallback: send index.html for all non-API routes (needed for React Router)
app.get("*", (req, res) => {
  // Only handle requests that are not API calls
  if (!req.path.startsWith("/api")) {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  }
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
