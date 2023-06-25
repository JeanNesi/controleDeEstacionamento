import { Response, Request } from 'express';
import { findNumberSlots, findParkingLot } from '../../repositories/parking';
import { ErrorMessage } from '../../utils/error';

class parkingController {
    async getParking(res: Response): Promise<void> {

        const parking = await findParkingLot();

        if (!!!parking) {
            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível localizar o estacionamento.'
            });
        }

        console.log(parking);
        res.status(200).json({ parking });

    }

    async getSlots(req: Request, res: Response): Promise<void> {

        const slots = await findNumberSlots(req.params.someParam);

        if (!!!slots) {
            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível buscar a quantidade de vagas.'
            });
        }

        res.status(200).json({ slots });

    }
}

export default new parkingController();
