import { AxiosError } from "axios";

export class ForbiddenError extends AxiosError {
  constructor(error: AxiosError) {
    super(error.message, error.code, error.config, error.request, error.response);
    this.name = "ForbiddenError";
    this.message = "You are not authorized to access this resource";
  }
}
