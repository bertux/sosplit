import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret',
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/soflowdb',
};
