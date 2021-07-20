import { container } from "tsyringe";

import { DataRepository } from "@modules/example/infra/typeorm/repositories/DataRepository";
import { IDataRepository } from "@modules/example/repositories/IDataRepository";
import "./providers";

container.registerSingleton<IDataRepository>("DataRepository", DataRepository);
