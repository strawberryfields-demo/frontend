import { AxiosError } from "axios";

export class UnauthorizedError extends AxiosError {
  constructor(error: AxiosError) {
    super(error.message, error.code, error.config, error.request, error.response);
    this.name = "UnauthorizedError";
    this.message = "Please log in to access this resource";
  }
}
