/* eslint-disable no-console */
import { prisma } from '../../../../prisma';

export const createManyPermissionsService = async () => {
  await prisma.permissions.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      name: 'admin',

      subPermissions: {
        createMany: {
          data: [
            {
              name: 'create',
            },
            {
              name: 'read',
            },
            {
              name: 'update',
            },
            {
              name: 'delete',
            },
          ],
        },
      },
    },
  });

  await prisma.permissions.upsert({
    where: { name: 'user' },
    update: {},
    create: {
      name: 'user',
      subPermissions: {
        createMany: {
          data: [
            {
              name: 'create',
            },
            {
              name: 'read',
            },
            {
              name: 'update',
            },
            {
              name: 'delete',
            },
          ],
        },
      },
    },
  });

  console.log('Permissions inserted.');
};
