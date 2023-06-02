import { ITokenService } from './types';
import { ErrorMessage } from '../error/ErrorMessage';
import { prisma } from '../../../../prisma';

export const findToken = async ({ token }: ITokenService) => {
  const tokenData = await prisma.tokens.findFirst({
    where: {
      token,
      hasUsed: false,
    },
  });

  if (tokenData === null || tokenData === undefined) {
    throw new ErrorMessage({
      statusCode: 400,
      message: 'Token de ativação inválido ou já utilizado.',
    });
  }

  return tokenData;
};
