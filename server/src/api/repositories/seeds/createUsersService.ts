/* eslint-disable no-console */
import { hashSync } from 'bcrypt';
import { prisma } from '../../../../prisma';
import { findPermissionByName } from '../permissions';

export const createAdminService = async () => {
  const permissionAdmin = await findPermissionByName({ name: 'admin' });
  const permissionUser = await findPermissionByName({ name: 'user' });

  await prisma.users.upsert({
    where: { email: 'admin@ada.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@ada.com',
      image: null,
      password: hashSync('123123123', 12),
      permissions: {
        create: {
          permissionId: permissionAdmin.id,
        },
      },
    },
  });

  await prisma.users.upsert({
    where: { email: 'user@ada.com' },
    update: {},
    create: {
      name: 'User',
      email: 'user@ada.com',
      image: null,
      password: hashSync('123123123', 12),
      permissions: {
        create: {
          permissionId: permissionUser.id,
        },
      },
    },
  });

  console.log('Users inserted.');
};
