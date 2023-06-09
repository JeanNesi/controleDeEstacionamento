import { DateTime } from 'aws-sdk/clients/devicefarm';
import { prisma } from '../../../../prisma';
import { v4 as uuidv4 } from 'uuid';

export async function createClient(data: {
    userId: string;
    planId: string | undefined;
    name: string;
    email: string;
    phoneNumber: string;
    cpf: string;
    gender: string;
    birthDate: DateTime | undefined;
}) {
    const id: string = uuidv4();

    await prisma.clients.create({
        data: {
            id: id,
            userId: data.userId,
            planId: data.planId,
            name: data.name,
            phoneNumber: data.phoneNumber,
            cpf: data.cpf,
            gender: data.gender,
            birthDate: data.birthDate,
        }
    });

    const identifier = await prisma.clients.findFirst({
        select: {
            id: true,
        },
        where: { id: id }
    })

    if (identifier) {
        console.log(identifier.id)
        return identifier.id; // Retorna apenas o ID, em vez do objeto completo
      } else {
        return null; // Ou qualquer outro valor que indique que não foi encontrado um registro com o ID especificado
      }
}