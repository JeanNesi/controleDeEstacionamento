import { prisma } from '../../../../prisma';
import { checkExists } from '../../utils/validator';
import { IFindPermissionByName } from './types';

export const findPermissionByName = async ({ name }: IFindPermissionByName) => {
  const permission = await prisma.permissions.findFirst({
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
    where: {
      name,
    },
  });

  checkExists([{ label: 'permissão', variable: permission }]);

  return permission!;
};
