import { inject, injectable } from "tsyringe";

import { ICreateDataDTO } from "@modules/example/dtos/ICreateDataDTO";
import { IDataResponseDTO } from "@modules/example/dtos/IDataResponseDTO";
import { DataMapper } from "@modules/example/mappers/DataMapper";
import { IDataRepository } from "@modules/example/repositories/IDataRepository";

import { CreateDataError } from "./createDataError";

@injectable()
class CreateDataUseCase {
  constructor(
    @inject("DataRepository")
    private dataRepository: IDataRepository
  ) {}

  async execute({ title }: ICreateDataDTO): Promise<IDataResponseDTO> {
    const dataTitleAlreadyExists = await this.dataRepository.findByTitle(title);
    if (dataTitleAlreadyExists) {
      throw new CreateDataError.DataTitleAlreadyExistsError();
    }

    const data = await this.dataRepository.create({ title });
    return DataMapper.toDTO(data);
  }
}

export { CreateDataUseCase };
