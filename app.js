const express = require("express");
require("dotenv").config();
const cors = require("./middlewares/corsMiddleware");
const dogsRoutes = require("./routes/dogsRoutes");

const app = express();
const PORT = process.env.PORT || 3000; // Use Render's dynamic port if available

// Middleware
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("안녕하세요. ~ 서버 입니다.");
});
app.use("/api/dogs", dogsRoutes); // Adjusted route for clarity

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
