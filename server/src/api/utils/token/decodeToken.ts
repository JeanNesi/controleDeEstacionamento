import { verify } from 'jsonwebtoken';
import { ErrorMessage } from '../error/ErrorMessage';
import 'dotenv/config';

export const decodeToken = (token: string) => {
  try {
    return verify(token, process.env.JWT_SECRET!);
  } catch (error) {
    throw new ErrorMessage({
      statusCode: 400,
      message: 'Token de ativação inválido ou já utilizado.',
    });
  }
};
