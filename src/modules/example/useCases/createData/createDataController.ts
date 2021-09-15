import { Request, Response } from "express";
import { container } from "tsyringe";
import * as Yup from "yup";

import { CreateDataUseCase } from "./createDataUseCase";

const schema = Yup.object().shape({
  title: Yup.string()
    .required("O campo title é obrigatório")
    .min(5, "O title deverá ter no mínimo 5 caracteres")
    .max(80, "O title deverá ter no máximo 80 caracteres"),
});

class CreateDataController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;
    await schema.validate({ title }, { abortEarly: false });

    const createDataUseCase = container.resolve(CreateDataUseCase);
    const data = await createDataUseCase.execute({ title });

    return response.status(201).json(data);
  }
}

export { CreateDataController };
