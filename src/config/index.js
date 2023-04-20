require('dotenv').config();

const config = {
  httpPort: process.env.PORT || 3000,
  mongoUrl: process.env.MONGO_URL,
  cors: {
      methods: ['GET','POST','PUT','DELETE'],
      optionsSuccessStatus: 204,
      credentials: true,
  },
  jwtSecret: process.env.JWT_SECRET,
  apiKey: process.env.API_KEY,
};

module.exports = { config }