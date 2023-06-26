import { Response, Request } from 'express';
import { findReservationByPlate } from '../../repositories/reservation';
import { ErrorMessage } from '../../utils/error';

class reservationController {
    async getParking(res: Response, req: Request): Promise<void> {

        const reservation = await findReservationByPlate(req.params.someParam);

        if (!!!reservation) {
            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível localizar a reserva.'
            });
        }

        console.log(reservation);
        res.status(200).json({ reservation });

    }
}

export default new reservationController();
