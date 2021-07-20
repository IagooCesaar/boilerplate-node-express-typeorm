import { ICreateDataDTO } from "@modules/example/dtos/ICreateDataDTO";
import { Data } from "@modules/example/infra/typeorm/entities/Data";

import { IDataRepository } from "../IDataRepository";

class InMemoryDataRepository implements IDataRepository {
  datas: Data[] = [];

  async create({ title }: ICreateDataDTO): Promise<Data> {
    const data = new Data();
    Object.assign(data, { title });
    this.datas.push(data);
    return data;
  }

  async getAll(): Promise<Data[]> {
    return this.datas;
  }

  async findByTitle(title: string): Promise<Data> {
    const data = this.datas.find((item) => item.title === title);
    return data;
  }
}

export { InMemoryDataRepository };
