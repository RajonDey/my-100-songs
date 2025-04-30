// app.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const songRoutes = require("./routes/songRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");


const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON request body
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("🎶 Welcome to My 100 Songs API");
});

// Songs API Routes
app.use("/api/songs", songRoutes);

// Start the server
const PORT = process.env.PORT || 3007;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.use(errorHandler); 