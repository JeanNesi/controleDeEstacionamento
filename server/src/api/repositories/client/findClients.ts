import { prisma } from '../../../../prisma';

export function findClients() {
    return prisma.clients.findMany({
        select: {
            id: true,
            userId: true,
            planId: true,
            name: true,
            email: true,
            phoneNumber: true,
            cpf: true,
            gender: true,
            birthDate: true,
            createdAt: true,
            updatedAt: true,
            plan: true,
            user: true,
        }
    });
}