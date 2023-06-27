import { prisma } from '../../../../prisma';
import { ErrorMessage } from '../../utils/error';

export async function deleteClient(id: string) {
    let identifier = await prisma.clients.findFirst({
        select: { id: true },
        where: { id: id }
    })

    if (identifier == undefined || !identifier){
        throw new ErrorMessage({
            statusCode: 404,
            message: 'Não foi possível localizar o cliente para excluí-lo.'
        });
    }

    await prisma.clients.delete({
        where: {
            id: id
        }
    })
}