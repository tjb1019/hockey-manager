import express from "express";
import jwt from 'jsonwebtoken';
import { TokenPayload } from "../types/tokens";
import { errorResponse } from "../utils/response";

const router = express.Router();

router.use((req, res, next) => {
  try {
    const token = req.cookies.token;
    if (token) {
      // biome-ignore lint: secret is always defined
      req.token = jwt.verify(token, process.env.FITNESS_SECRET!) as TokenPayload;
      next();
    } else {
      return errorResponse(res, 'Failed to authenticate token', 401);
    }
  } catch (err) {
    return errorResponse(res, 'Failed to receive cookie with token', 400);
  }
});

export default router;