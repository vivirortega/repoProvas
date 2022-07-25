import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import prisma from "../../src/config/database";

function createLogin() {
  const email = faker.internet.email();
  const password = faker.internet.password();
  return {
    email: email,
    password: password,
    confirmPassword: password,
  };
}

interface Login {
  email: string;
  password: string;
}

async function createUser(login: Login) {
  const user = await prisma.users.create({
    data: {
      email: login.email,
      password: bcrypt.hashSync(login.password, 10),
    },
  });

  return { ...user, encryptedPassword: login.password };
}

const authFactory = {
  createLogin,
  createUser
};

export default authFactory;
