import { BaseResponse } from './base.response';

export class SuccessResponse<T> extends BaseResponse {
  data: T;

  constructor(data: T) {
    super();
    this.data = data;
  }
}
