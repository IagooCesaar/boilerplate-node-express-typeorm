import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import "@shared/container";

import express, { Request, Response } from "express";
import path from "path";
import { createConnection } from "typeorm";

import { handlingErrors } from "./middlewares/handlingErrors";
import { router } from "./routes";

createConnection();
const app = express();
app.use(express.json());
app.use(
  "/api/coverage",
  express.static(
    path.resolve(__dirname, "..", "..", "..", "..", "coverage", "lcov-report")
  )
);
app.use("/api/coverage", (request: Request, response: Response) => {
  return response.sendFile(
    path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "coverage",
      "lcov-report",
      "index.html"
    )
  );
});

app.use(router);
app.use(handlingErrors);

export { app };
