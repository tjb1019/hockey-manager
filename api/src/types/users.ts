import { usersTable } from "../db/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type User = InferSelectModel<typeof usersTable>;
export type NewUser = InferInsertModel<typeof usersTable>;