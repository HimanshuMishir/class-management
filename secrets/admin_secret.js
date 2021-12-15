import {}from 'dotenv/config';

export default  {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
  jwt_secret: process.env.JWT_SECRET,
};