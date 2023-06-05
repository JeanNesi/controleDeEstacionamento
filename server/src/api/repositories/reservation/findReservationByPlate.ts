import { prisma } from '../../../../prisma';

export function findReservationByPLate(licensePlate: string) {
    return prisma.reservations.findMany({
        select: {
            id: true,
            userId: true,
            startTime: true,
            endTime: true,
            createdAt: true,
            updatedAt: true,
            user: {
                select: {
                    id: true,
                    name: true,
                }
            }
        },
        where: {
            licensePlate: licensePlate.toLowerCase(),
        },
    },
    );
}