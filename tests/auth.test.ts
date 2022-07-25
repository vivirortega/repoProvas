import supertest from "supertest";
import app from "../src/app";
import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();
const signup = { email: email, password: password, confirmPassword: password };
const login = { email: email, password: password };

describe("POST/sign-up", () => {
  it("given email and password, create user", async () => {
    const response = await supertest(app).post("/sign-up").send(signup);
    expect(response.status).toBe(201);
  });

  it("should answer status 500 when sent with no email and password", async () => {
    const response = await supertest(app).post("/sign-up").send();
    expect(response.status).toBe(500);
  });

  it("should answer status 409 when email is already in use", async () => {
    const response = await supertest(app).post("/sign-up").send(signup);
    expect(response.status).toBe(409);
  });

  it("should answer status 500 when sent with no confirm password", async () => {
    const response = await supertest(app).post("/sign-up").send({
      email: email,
      password: password,
    });
    expect(response.status).toBe(500);
  });
});

describe("POST/login", () => {
  it("should return 200 when credentials are valid", async () => {
    const response = await supertest(app).post("/login").send(login);
    expect(response.status).toBe(200);
  });

  it("should return 401 when email are invalid", async () => {
    const response = await supertest(app).post("/login").send({
      email: "123test@gmail.com",
      password: password,
    });
    expect(response.status).toBe(401);
  });

  it("should return 401 when password are invalid", async () => {
    const response = await supertest(app).post("/login").send({
      email: email,
      password: "wrong_password",
    });
    expect(response.status).toBe(401);
  });

  it("should return 500 when sent with no email and password", async () => {
    const response = await supertest(app).post("/login").send();
    expect(response.status).toBe(500);
  });
});
