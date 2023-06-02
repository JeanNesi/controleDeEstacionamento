import { IErrorMessage } from './types';

export class ErrorMessage {
  public readonly statusCode: number;

  public readonly message: string;

  constructor({ statusCode, message }: IErrorMessage) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
