import { Response, Request } from 'express';
import { findClients, createClient } from '../../repositories/client';
import { ErrorMessage } from '../../utils/error';


class clientController {
    async getClient(req: Request, res: Response): Promise<void> {

        const clients = await findClients();
        
        if (!Array.isArray(clients) || clients.length === 0) {
            res.status(404).json({
                statusCode: 404,
                message: 'Não foi possível localizar clientes.'
            });

            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível localizar clients.'
            });
        }

        const formattedClients = clients.map((client) => ({
            id: client.id,
            userId: client.userId,
            planId: client.planId,
            name: client.name,
            email: client.email,
            phoneNumber: client.phoneNumber,
            cpf: client.cpf,
            gender: client.gender,
            birthDate: client.birthDate,
            createdAt: client.createdAt,
            updatedAt: client.updatedAt
        }));

        res.status(200).json(formattedClients);
    }

    async postClient(req: Request, res: Response): Promise<void> {

        const { userId, planId, name, email, phoneNumber, cpf, gender, birthDate } = req.body
        
        const retorno = createClient({ userId, planId, name, email, phoneNumber, cpf, gender, birthDate })

        res.status(200).json(retorno);
    }
}

export default new clientController();
