import { Data } from "../infra/typeorm/entities/Data";

type IDataResponseDTO = Omit<Data, "created_at">;

export { IDataResponseDTO };
