import { registerAs } from '@nestjs/config';
export default registerAs('auth', () => ({
  jwtSecret: process.env.JWT_SECRET,
  jwt_Expiry: process.env.JWT_TIMEFRAME,
}));
