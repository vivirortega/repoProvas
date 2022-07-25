import supertest from "supertest";
import app from "../src/app";
import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();
const name = faker.word.conjunction();
const signup = { email: email, password: password, confirmPassword: password };
const login = { email: email, password: password };
const test = {
  name: name,
  pdfUrl: "www.google.com",
  categoryId: 1,
  teacherDisciplineId: 1,
};

describe("POST/sign-up", () => {
  it("given email and password, create user", async () => {
    const response = await supertest(app).post("/sign-up").send(signup);
    expect(response.status).toBe(201);
  });

  it("should answer status 400 when sent with no email and password", async () => {
    const response = await supertest(app).post("/sign-up").send();
    expect(response.status).toBe(400);
  });

  it("should answer status 409 when email is already in use", async () => {
    const response = await supertest(app).post("/sign-up").send(signup);
    expect(response.status).toBe(409);
  });

  it("should answer status 400 when sent with no confirm password", async () => {
    const response = await supertest(app).post("/sign-up").send({
      email: email,
      password: password,
    });
    expect(response.status).toBe(400);
  });
});

describe("POST/login", () => {
  it("should return 200 when credentials are valid", async () => {
    const response = await supertest(app).post("/login").send(login);
    const token = response.text;
    expect(token).not.toBeNull();
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

  it("should return 400 when sent with no email and password", async () => {
    const response = await supertest(app).post("/login").send();
    expect(response.status).toBe(400);
  });
});

describe("POST/create-test", () => {
  it("given a body, create test", async () => {
    const response = await supertest(app).post("/login").send(login);
    const token = response.body.token;
    const result = await supertest(app)
      .post("/create-test")
      .send(test)
      .set("Authorization", `Bearer ${token}`);
    expect(result.status).toBe(201);
  });

  it("should return 500 when sent with no body", async () => {
    const response = await supertest(app).post("/create-test").send();
    expect(response.status).toBe(500);
  });

  it("should return 500 when sent with invalid token", async () => {
    const response = await supertest(app)
      .post("/create-test")
      .send(test)
      .set("Authorization", `Bearer invalid-token`);
    expect(response.status).toBe(500);
  });

  it("should return 400 when sent with invalid body", async () => {
    const response = await supertest(app).post("/login").send(login);
    const token = response.body.token;
    const result = await supertest(app)
      .post("/create-test")
      .send({
        name: 2,
        pdfUrl: "www.google.com",
        categoryId: 1,
        teacherDisciplineId: 1,
      })
      .set("Authorization", `Bearer ${token}`);
    expect(result.status).toBe(400);
  });
});

describe("GET/tests/disciplines", () => {
  it("return tests by disciplines", async () => {
    const response = await supertest(app).post("/login").send(login);
    const token = response.body.token;
    const result = await supertest(app)
      .get("/tests/disciplines")
      .set("Authorization", `Bearer ${token}`);
    expect(result.status).toBe(200);
  });

  it("should return 500 when sent with invalid token", async () => {
    const response = await supertest(app)
      .get("/tests/disciplines")
      .set("Authorization", `Bearer invalid-token`);
    expect(response.status).toBe(500);
  });
});

describe("GET/tests/disciplines", () => {
  it("return tests by teachers", async () => {
    const response = await supertest(app).post("/login").send(login);
    const token = response.body.token;
    const result = await supertest(app)
      .get("/tests/teacher")
      .set("Authorization", `Bearer ${token}`);
    expect(result.status).toBe(200);
  });

  it("should return 500 when sent with invalid token", async () => {
    const response = await supertest(app)
      .get("/tests/teacher")
      .set("Authorization", `Bearer invalid-token`);
    expect(response.status).toBe(500);
  });
});