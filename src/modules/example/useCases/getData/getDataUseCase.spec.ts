import { InMemoryDataRepository } from "@modules/example/repositories/in-memory/InMemoryData";

import { GetDataUseCase } from "./getDataUseCase";

let getDataUseCase: GetDataUseCase;
let dataRepository: InMemoryDataRepository;

describe("CreateDataUseCase", () => {
  beforeEach(() => {
    dataRepository = new InMemoryDataRepository();
    getDataUseCase = new GetDataUseCase(dataRepository);
  });

  it("Should be able to data list", async () => {
    await dataRepository.create({ title: "Some Title 1" });
    await dataRepository.create({ title: "Some Title 2" });

    const datas = await getDataUseCase.execute();
    expect(datas).toHaveLength(2);
  });
});
