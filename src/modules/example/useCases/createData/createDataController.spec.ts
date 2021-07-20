import request from "supertest";
import { Connection } from "typeorm";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";

let connection: Connection;

describe("CreateDataController", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("Should be able to create data", async () => {
    const response = await request(app).post("/").send({ title: "Some Title" });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("title");
  });

  it("Should not be able to create data with same title", async () => {
    const response = await request(app).post("/").send({ title: "Some Title" });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errorCode");
    expect(response.body.errorCode).toBe(
      "CreateDataError.DataTitleAlreadyExistsError"
    );
  });
});
