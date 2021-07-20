import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateDataUseCase } from "./createDataUseCase";

class CreateDataController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const createDataUseCase = container.resolve(CreateDataUseCase);
    const data = await createDataUseCase.execute({ title });

    return response.status(201).json(data);
  }
}

export { CreateDataController };
