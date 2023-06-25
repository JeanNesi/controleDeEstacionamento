import { prisma } from '../../../../prisma';

export async function findNumberSlots(parkingId: string) {
    const parkingLot = await prisma.parkingLot.findFirst({
        select: {
            capacity: true,
        },
        where: { id: parkingId },
    });

    if (!parkingLot) {
        throw new Error('Parking lot not found');
    }

    const slotsOccupied = await prisma.reservations.findMany({
        include: {
            _count: {
                select: { payments: true },
            },
        },
        where: {
            endTime: null || undefined,
        },
    });

    const slots: number = parkingLot.capacity - slotsOccupied.length;

    return {
        capacity: parkingLot.capacity,
        slotsOccupied: slotsOccupied.length,
        slots: slots
    };
}
