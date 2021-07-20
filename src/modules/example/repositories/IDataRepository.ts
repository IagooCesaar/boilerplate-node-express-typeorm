import { ICreateDataDTO } from "../dtos/ICreateDataDTO";
import { Data } from "../infra/typeorm/entities/Data";

interface IDataRepository {
  create(data: ICreateDataDTO): Promise<Data>;
  getAll(): Promise<Data[]>;
  findByTitle(title: string): Promise<Data>;
}

export { IDataRepository };
