import { prisma } from '../../../../prisma';

export function findReservationByPlate(licensePlate: string) {
    return prisma.reservations.findMany({
        select: {
            id: true,
            clientId: true,
            startTime: true,
            endTime: true,
            createdAt: true,
            updatedAt: true,
            vehicleId: true,
            client: {
                select: {
                    id: true,
                    name: true,
                }
            },
            vehicle: {
                select: {
                    id: true,
                    name: true,
                    plate: true,
                }
            }
        },
        where: {
            vehicle: {
                plate: licensePlate.toLocaleLowerCase(),
            },
        }
    });
}