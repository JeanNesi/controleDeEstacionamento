import { prisma } from '../../../../prisma';

export function findVehicles() {
    return prisma.plan.findMany({
        select: {
            id: true,
            amount: true,
            finalDate: true,
            createdAt: true,
            updatedAt: true,
            clients: true,
            vehicles: true,
        }
    });
}