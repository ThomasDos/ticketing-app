import { ValidationError } from 'express-validator'

export class RequestValidationError extends Error {
  public statusCode = 400

  constructor(public errors: ValidationError[]) {
    super()

    // Only because it's extending a built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }

  serializeError() {
    return this.errors.map((error) => {
      return { message: error.msg, field: error.param }
    })
  }
}
