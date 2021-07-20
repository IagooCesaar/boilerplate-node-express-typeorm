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
    await request(app).post("/").send({ title: "Some Title 1" });

    await request(app).post("/").send({ title: "Some Title 2" });

    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });
});
