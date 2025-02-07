import { StatusCodeError, StatusCodeErrorEnum } from "./StatusCodeError"

export class AppError extends StatusCodeError{
  public readonly message: string
  public readonly statusCode: StatusCodeErrorEnum

  constructor(message: string, statusCode: StatusCodeErrorEnum) {
    super(message, statusCode)
    this.message = message
    this.statusCode = statusCode
  }
}
