
import { prisma } from '../../../../prisma';

export function findPayments() {
    return prisma.payments.findMany({
        select: {
            id: true,
            amount: true,
            paymentDate: true,
            reservationId: true,
            createdAt: true,
            updatedAt: true,
            clientId: true,
        }
    });
}
