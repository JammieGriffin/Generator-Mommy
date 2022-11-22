export interface IResponse<T> {
  success: boolean;
  code: number;
  message: string;
  result?: T;
}
