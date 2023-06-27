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
            email: data.email,
            phoneNumber: data.phoneNumber,
            cpf: data.cpf,
            gender: data.gender,
            birthDate: data.birthDate,
        }
    });

    let name = prisma.clients.findFirst({
        select:
        {
            name: true
        },
        where: {
            id: id
        }
    })
    
    return "sucess";
}