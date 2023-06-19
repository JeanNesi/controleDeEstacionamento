import { prisma } from '../../../../prisma';

export function findVehicles() {
    return prisma.vehicles.findMany({
        select: {
            id: true,
            clientId: true,
            name: true,
            plate: true,
            createdAt: true,
            updatedAt: true,
            planId: true,
        }
    });
}