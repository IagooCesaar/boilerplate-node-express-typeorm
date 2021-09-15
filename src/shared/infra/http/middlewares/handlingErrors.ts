import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";

import { AppError } from "../../../errors/appError";

interface IValidationErrors {
  [key: string]: {
    message: string;
    type?: string;
  };
}

export function handlingErrors(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      errorCode: err.errorCode,
      message: err.message,
    });
  }

  if (err instanceof Yup.ValidationError) {
    const validationErrors: IValidationErrors = {};
    err.inner.forEach((error) => {
      validationErrors[String(error.path)] = error;
    });
    return response.status(400).json({
      errorCode: "ValidationsErrors",
      errors: validationErrors,
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error: \n${err.message}`,
    error: err,
  });

  next();
}
