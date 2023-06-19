import { prisma } from '../../../../prisma';

export function findParkingLot() {
    return prisma.parkingLot.findMany({
        select: {
            id: true,
            name: true,
            amountPerHour: true,
            capacity: true,
            createdAt: true,
            updatedAt: true,
            //reservations: true,
        }
    });
}