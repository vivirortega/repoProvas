import { Tests, Users } from "@prisma/client";

export type UserService = Omit<Users, "id">;

export type TestService = Omit<Tests, "id">;