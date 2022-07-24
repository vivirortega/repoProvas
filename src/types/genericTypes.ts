import { Users } from "@prisma/client";

export type UserService = Omit<Users, "id">;