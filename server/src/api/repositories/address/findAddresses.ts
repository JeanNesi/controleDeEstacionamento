import { prisma } from '../../../../prisma';

export function findAddresses() {
    return prisma.addresses.findMany({
        select: {
            id: true,
            street: true,
            city: true,
            uf: true,
            zipCode: true,
            createdAt: true,
            updatedAt: true,
        }
    });
}