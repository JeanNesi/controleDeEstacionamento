import { Response, Request } from 'express';
import { findNumberSlots, findParkingLot } from '../../repositories/parking';
import { ErrorMessage } from '../../utils/error';

class parkingController {
    async getParking(req: Request, res: Response): Promise<void> {

        const parking = await findParkingLot();

        if (!parking) {
            res.status(404).json({
                statusCode: 404,
                message: 'Não foi possível localizar o estacionamento.'
            });

            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível localizar o estacionamento.'
            });
        }


        res.status(200).json({
            id: parking.id,
            name: parking.name,
            amountPerHour: parking.amountPerHour,
            capacity: parking.capacity,
            createdAt: parking.createdAt,
            updatedAt: parking.updatedAt
        });
    }

    async getSlots(req: Request, res: Response): Promise<void> {

        const slots = await findNumberSlots(req.params.someParam);

        if (!slots) {
            res.status(404).json({
                statusCode: 404,
                message: 'Não foi possível buscar a quantidade de vagas.'
            });

            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível buscar a quantidade de vagas.'
            });
        }

        res.status(200).json({
            capacity: slots.capacity,
            slotsOccupied: slots.slotsOccupied,
            slots: slots.slots
        });
    }
}

export default new parkingController();
