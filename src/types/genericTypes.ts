import { Tests, Users } from "@prisma/client";

export type UserService = Omit<Users, "id">;

export type testService = Omit<Tests, "id">;