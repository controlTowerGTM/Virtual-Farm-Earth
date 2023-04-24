require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  httpPort: process.env.PORT || 3000,
  mongoUrl: process.env.MONGODB_URI,
  cors: {
    methods: ["GET", "POST", "PUT", "DELETE"],
    optionsSuccessStatus: 204,
    credentials: true,
  },
  jwtSecret: process.env.JWT_SECRET,
  apiKey: process.env.API_KEY,
};

module.exports = { config };
