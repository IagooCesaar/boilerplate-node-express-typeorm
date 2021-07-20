import { getRepository, Repository } from "typeorm";

import { ICreateDataDTO } from "@modules/example/dtos/ICreateDataDTO";
import { IDataRepository } from "@modules/example/repositories/IDataRepository";

import { Data } from "../entities/Data";

class DataRepository implements IDataRepository {
  private repository: Repository<Data>;
  constructor() {
    this.repository = getRepository(Data);
  }

  async create({ title }: ICreateDataDTO): Promise<Data> {
    const data = this.repository.create({ title });
    await this.repository.save(data);
    return data;
  }

  async getAll(): Promise<Data[]> {
    const datas = await this.repository.find();
    return datas;
  }

  async findByTitle(title: string): Promise<Data> {
    const data = await this.repository.findOne({ title });
    return data;
  }
}

export { DataRepository };
