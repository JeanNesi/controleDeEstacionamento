
import { Response } from 'express';
import { findClients } from '../../repositories/client';
import { ErrorMessage } from '../../utils/error';

export async function clientController(res: Response) {
    const clients = await findClients();

    if (!!!clients) {
        throw new ErrorMessage({
            statusCode: 404,
            message: 'Não foi possível localizar os clientes.'
        });
    }

    return res.status(200).json({ clients });
}