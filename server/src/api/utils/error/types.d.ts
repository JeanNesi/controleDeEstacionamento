export interface IErrorMessage {
  statusCode: 200 | 201 | 400 | 401 | 403 | 404;
  message: string;
}
