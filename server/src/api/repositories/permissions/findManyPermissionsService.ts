import { prisma } from '../../../../prisma';

export function findManyPermissionsService() {
  return prisma.permissions.findMany({
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
  });
}
