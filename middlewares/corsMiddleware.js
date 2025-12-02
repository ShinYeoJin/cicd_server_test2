const cors = require("cors");

const corsMiddleware = cors({
  origin: process.env.ALLOWED_ORIGIN || "*", // Allow all origins by default, restrict in production
  methods: ["GET", "POST", "PUT", "DELETE"], // 허용할 HTTP 메서드
  allowedHeaders: ["Content-Type", "Authorization"], // 허용할 헤더
});

module.exports = corsMiddleware;
