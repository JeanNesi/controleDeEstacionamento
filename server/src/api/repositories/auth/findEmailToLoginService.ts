import { prisma } from '../../../../prisma';
import { IPermissions } from '../../../types/token';
import { ErrorMessage } from '../../utils/error';

export async function findEmailToLoginService(email: string) {
  const user = await prisma.users.findFirst({
    select: {
      id: true,
      password: true,
      isBlocked: true,
      permissions: {
        select: {
          permission: {
            select: {
              id: true,
              name: true,
              subPermissions: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },

    where: {
      email: email.toLowerCase(),
    },
  });

  if (!user) {
    throw new ErrorMessage({
      statusCode: 404,
      message: 'E-mail ou senha incorreto.',
    });
  }

  // #region PROCESS DATA
  const permissions: IPermissions[] = [];

  user.permissions.forEach((permission) => {
    permissions.push({ ...permission.permission });
  });

  // #endregion
  return {
    user: { id: user.id, isBlocked: user.isBlocked, password: user.password },
    permissions,
  };
}
