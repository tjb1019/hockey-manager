import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/tokens';

const tokenTTL = '1h';

export const generateToken = (payload: TokenPayload): string => {
  // biome-ignore lint: secret will always be defined
  const secret = process.env.TOKEN_SECRET!;
  return jwt.sign(payload, secret, { expiresIn: tokenTTL });
};