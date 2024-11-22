import { BaseResponse } from './base.response';

export class ErrorResponse extends BaseResponse {
  errorCode?: string;
  message?: string;

  constructor(errorCode?: string, message?: string) {
    super();
    this.errorCode = errorCode;
    this.message = message;
  }
}
