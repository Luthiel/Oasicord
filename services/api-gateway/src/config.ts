import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || '4000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  services: {
    user: process.env.USER_SERVICE_URL || 'http://localhost:8081/graphql',
    wardrobe: process.env.WARDROBE_SERVICE_URL || 'http://localhost:8082/graphql',
    social: process.env.SOCIAL_SERVICE_URL || 'http://localhost:8083/graphql',
  },
};
