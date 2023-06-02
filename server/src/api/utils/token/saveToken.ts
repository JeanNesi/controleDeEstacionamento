import { prisma } from '../../../../prisma';
import { ITokenService } from './types';

export const saveTokenInDatabase = async ({ token }: ITokenService) => {
  await prisma.tokens.create({
    data: {
      token,
    },
  });
};
