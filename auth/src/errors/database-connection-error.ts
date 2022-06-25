export class DatabaseConnectionError extends Error {
  private reason = 'Error connection to database'
  public statusCode = 500

  constructor() {
    super()

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeError() {
    return [{ message: this.reason }]
  }
}
