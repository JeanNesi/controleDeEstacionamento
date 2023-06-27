import { Response, Request } from 'express';
import { findClients, createClient, updateClient, deleteClient } from '../../repositories/client';
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

        const retorno = await createClient({ userId, planId, name, email, phoneNumber, cpf, gender, birthDate })

        if (retorno == undefined) {
            res.status(404).json({
                statusCode: 404,
                message: 'Não foi possível inserir cliente.'
            });

            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível inserir cliente.'
            });
        }

        res.status(200).json({id: retorno});
    }

    async putClient(req: Request, res: Response): Promise<void> {

        const { id } = req.params

        const { userId,
            planId,
            name,
            email,
            phoneNumber,
            cpf,
            gender,
            birthDate } = req.body

        const retorno = await updateClient({ id, userId, planId, name, email, phoneNumber, cpf, gender, birthDate })

        if (retorno == undefined || retorno == null) {
            res.status(404).json({
                statusCode: 404,
                message: 'Não foi possível alterar o cliente.'
            });

            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível alterar o cliente.'
            });
        }

        res.status(200).json({id: retorno});
    }

    async deleteClient(req: Request, res: Response): Promise<void> {

        const { id } = req.params

        await deleteClient(id)

        res.status(200).json("Cliente removido com sucesso!");
    }
}

export default new clientController();
