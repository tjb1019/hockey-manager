import { TokenPayload } from '../tokens';

declare global {
  namespace Express {
    interface Request {
      token: TokenPayload;
    }
  }
}