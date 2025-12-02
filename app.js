const express = require("express");
const cors = require("./middlewares/corsMiddleware");
const dogsRoutes = require("./routes/dogsRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("안녕하세요. ~ 서버 입니다.");
});
app.use("/dogs", dogsRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
