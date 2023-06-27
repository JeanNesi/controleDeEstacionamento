import { prisma } from '../../../../../prisma';

export async function findReport(plate: string) {
    return await prisma.$transaction([
        prisma.$queryRaw`exec GerarRelatorio @plate = ${plate};`
    ])
}