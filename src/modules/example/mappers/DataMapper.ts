import { IDataResponseDTO } from "../dtos/IDataResponseDTO";
import { Data } from "../infra/typeorm/entities/Data";

class DataMapper {
  static toDTO({ id, title, created_at }: Data): IDataResponseDTO {
    const user = {
      id,
      title,
    } as IDataResponseDTO;

    return user;
  }
}

export { DataMapper };
