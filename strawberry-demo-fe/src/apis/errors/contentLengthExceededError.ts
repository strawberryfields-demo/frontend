import { MAX_CONTENT_LENGTH } from "@/constants/https";
import { AxiosError } from "axios";

export class ContentLengthExceededError extends AxiosError {
  constructor(actualLength: number) {
    super();
    this.name = "ContentLengthExceededError";
    this.code = "CONTENT_LENGTH_EXCEEDED";
    this.message = `Content-Length over ${MAX_CONTENT_LENGTH}. Current: ${actualLength}`;
  }
}
