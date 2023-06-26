import { prisma } from '../../../../prisma';

export function findPlans() {
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