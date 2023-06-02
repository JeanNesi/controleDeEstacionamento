import { prisma } from '../../../../prisma';

export async function updateLastAccessService(userId: string) {
  await prisma.users.update({
    data: {
      lastAccess: new Date(),
    },

    where: { id: userId },
  });
}
