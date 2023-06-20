
import { Response } from 'express';
import { findAddresses } from '../../repositories/address';
import { ErrorMessage } from '../../utils/error';

export async function addressController(res: Response) {
    const addresses = await findAddresses();
    console.log('passou aqui')
    if (!!!addresses) {
        throw new ErrorMessage({
            statusCode: 401,
            message: 'Não foi possível localizar os endereços.'
        });
    }

    return res.status(200).json({ addresses });
}