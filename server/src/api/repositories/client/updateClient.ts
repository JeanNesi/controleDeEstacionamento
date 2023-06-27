import { DateTime } from 'aws-sdk/clients/devicefarm';
import { prisma } from '../../../../prisma';
import { ErrorMessage } from '../../utils/error';

export async function updateClient(data: {
    id: string;
    userId: string;
    planId: string | undefined;
    name: string;
    email: string;
    phoneNumber: string;
    cpf: string;
    gender: string;
    birthDate: DateTime | undefined;
}) {

    let identifier = await prisma.clients.findFirst({
        select: { id: true },
        where: { id: data.id }
    })

    if (identifier == undefined || !identifier) {
        throw new ErrorMessage({
            statusCode: 404,
            message: 'Não foi possível localizar o cliente para alterá-lo.'
        });
    }

    await prisma.clients.update({
        where: {
            id: data.id
        }, data: {
            userId: data.userId,
            planId: data.planId,
            name: data.name,
            phoneNumber: data.phoneNumber,
            cpf: data.cpf,
            gender: data.gender,
            birthDate: data.birthDate,
        }
    })

    if (identifier) {
        return identifier.id; // Retorna apenas o ID, em vez do objeto completo
    } else {
        return null; // Ou qualquer outro valor que indique que não foi encontrado um registro com o ID especificado
    }
}