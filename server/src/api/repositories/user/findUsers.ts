import { prisma } from '../../../../prisma';

export async function findUsers() {
  return await prisma.users.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      lastAccess: true,
      createdAt: true,
      updatedAt: true,
      addressId: true
    }
  });
}