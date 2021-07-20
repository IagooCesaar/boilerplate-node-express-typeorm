import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetDataUseCase } from "./getDataUseCase";

class GetDataController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getDataUseCase = container.resolve(GetDataUseCase);
    const datas = await getDataUseCase.execute();
    return response.status(200).json(datas);
  }
}

export { GetDataController };
