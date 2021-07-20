/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-namespace */
import { AppError } from "@shared/errors/appError";

export namespace CreateDataError {
  export class DataTitleAlreadyExistsError extends AppError {
    constructor() {
      super(
        "CreateDataError.DataTitleAlreadyExistsError",
        "A data was found with the same title"
      );
    }
  }
}
