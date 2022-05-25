class AppError {
  readonly message: string;
  readonly status: number;

  constructor(message = "", status = 400) {
    this.message = message;
    this.status = status;
  }
}

export { AppError };
