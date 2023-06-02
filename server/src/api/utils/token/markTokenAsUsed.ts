import { prisma } from '../../../../prisma';
import { ITokenService } from './types';

export const markTokenAsUsed = async ({ token }: ITokenService) => {
  await prisma.tokens.update({
    data: {
      hasUsed: true,
    },
    where: {
      token,
    },
  });
};
