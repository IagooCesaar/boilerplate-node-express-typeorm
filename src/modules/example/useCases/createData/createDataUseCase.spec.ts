import { InMemoryDataRepository } from "@modules/example/repositories/in-memory/InMemoryData";

import { CreateDataError } from "./createDataError";
import { CreateDataUseCase } from "./createDataUseCase";

let createDataUseCase: CreateDataUseCase;
let dataRepository: InMemoryDataRepository;

describe("CreateDataUseCase", () => {
  beforeEach(() => {
    dataRepository = new InMemoryDataRepository();
    createDataUseCase = new CreateDataUseCase(dataRepository);
  });

  it("Should be able to create data", async () => {
    const title = "Some Title";
    const data = await createDataUseCase.execute({ title });
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("title");
    expect(data.title).toBe(title);
  });

  it("Should not be able to create data with same title", async () => {
    const title = "Some Title";
    await createDataUseCase.execute({ title });
    await expect(createDataUseCase.execute({ title })).rejects.toBeInstanceOf(
      CreateDataError.DataTitleAlreadyExistsError
    );
  });
});
