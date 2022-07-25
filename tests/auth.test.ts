import supertest from "supertest";
import app from "../src/app";
import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();
const confirmPassword = password;
const login = { email: email, password: password };

describe("POST/sign-up", () => {
  it("given email and password, create user", async () => {
    const response = await supertest(app).post("/sign-up").send(login);
    expect(response.status).toBe(201);
  });

  it("should answer status 500 when sent with no email and password", async () => {
    const response = await supertest(app).post("/sign-up").send();
    expect(response.status).toBe(500); 
  });

  it("should answer status 409 when email is already in use", async () => {
    const response = await supertest(app).post("/sign-up").send({
      email: email,
      password: password,
    });
    expect(response.status).toBe(409);
  });
});
