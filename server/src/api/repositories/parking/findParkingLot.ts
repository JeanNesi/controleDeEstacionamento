import { prisma } from '../../../../prisma';

export async function findParkingLot() {
    return await prisma.parkingLot.findFirst({
        select: {
            id: true,
            name: true,
            amountPerHour: true,
            capacity: true,
            createdAt: true,
            updatedAt: true,
        }
    });
}