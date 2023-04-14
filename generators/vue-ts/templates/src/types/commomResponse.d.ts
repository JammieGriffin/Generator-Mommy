import { AxiosResponse } from "axios";
export interface IResponse<T> extends AxiosResponse {
  data: {
    success: boolean;
    code: number;
    message: string;
    result?: T;
  };
}
