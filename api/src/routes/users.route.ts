import express from "express";
import bcrypt from 'bcrypt';
import db from "../db";
import { errorResponse, successResponse } from "../utils/response";
import { NewUser, User } from "../types/users";
import usersTable, { insertUsersSchema, selectUsersSchema } from "../db/schema/users";
import { generateToken } from "../utils/tokens";
import { TokenPayload } from "../types/tokens";

const router = express.Router();
const BASE_URL = "/users";

router.route(BASE_URL)
  .get(async (_, res) => {
    try {
      const users = await db.query.usersTable.findMany();
      if (users.length) selectUsersSchema.parse(users[0]);
      return successResponse<User[]>(res, users);
    } catch (err) {
      const errorMessage = 'Failed to get users';
      console.error(`${errorMessage}: ${String(err)}`);
      return errorResponse(res, errorMessage);
    }
  })
  .post(async (req, res) => {
    try {
      // hash password
      const password = await bcrypt.hash(req.body.password, 10);
      // add user to db
      const user: NewUser = {
        email: req.body.email,
        password,
        name: req.body.name,
      };
      insertUsersSchema.parse(user);
      const [newUser] = await db.insert(usersTable).values(user).returning();
      // create jwt and return in cookie
      const tokenPayload: TokenPayload = {
        userId: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt,
      };
      const token = generateToken(tokenPayload);
      res.cookie('token', token, { httpOnly: true });
      return successResponse(res, tokenPayload, 201);
    } catch (err) {
      return errorResponse(res, 'Failed to create new user.');
    }
  });

export default router;