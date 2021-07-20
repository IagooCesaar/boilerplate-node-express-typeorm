import { Router } from "express";

import { CreateDataController } from "@modules/example/useCases/createData/createDataController";
import { GetDataController } from "@modules/example/useCases/getData/getDataController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createDataController = new CreateDataController();
const getDataController = new GetDataController();

const exampleRoutes = Router();

exampleRoutes.post("/", createDataController.handle);
exampleRoutes.get("/", getDataController.handle);

export { exampleRoutes };
