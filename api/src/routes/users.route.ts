import express from "express";
import db from "../db";
import { errorResponse, successResponse } from "../utils/response";
import { User } from "../types/users";
import { selectUsersSchema } from "../db/schema/users";

const router = express.Router();
const BASE_URL = "/users";

router.get(BASE_URL, async (_, res) => {
  try {
    const users = await db.query.usersTable.findMany();
    if (users.length) selectUsersSchema.parse(users[0]);
    return successResponse<User[]>(res, users);
  } catch (err) {
    const errorMessage = 'Failed to get users';
    console.error(`${errorMessage}: ${String(err)}`);
    return errorResponse(res, errorMessage);
  }
});

export default router;