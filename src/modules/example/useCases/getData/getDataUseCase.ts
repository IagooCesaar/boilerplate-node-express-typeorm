import { inject, injectable } from "tsyringe";

import { IDataResponseDTO } from "@modules/example/dtos/IDataResponseDTO";
import { DataMapper } from "@modules/example/mappers/DataMapper";
import { IDataRepository } from "@modules/example/repositories/IDataRepository";

@injectable()
class GetDataUseCase {
  constructor(
    @inject("DataRepository")
    private dataRepository: IDataRepository
  ) {}

  async execute(): Promise<IDataResponseDTO[]> {
    const datas = await this.dataRepository.getAll();
    return datas.map((data) => DataMapper.toDTO(data));
  }
}

export { GetDataUseCase };
