import { Response, Request } from 'express';
import { findVehicles } from '../../repositories/vehicle';
import { ErrorMessage } from '../../utils/error';

class vehicleController {
    async getVehicle(req: Request, res: Response): Promise<void> {

        const vehicles = await findVehicles();
        
        if (!Array.isArray(vehicles) || vehicles.length === 0) {
            res.status(404).json({
                statusCode: 404,
                message: 'Não foi possível localizar os veículos.'
            });

            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível localizar os veículos.'
            });
        }

        const formattedVehicles = vehicles.map((vehicles) => ({
            id: vehicles.id,
            clientId: vehicles.clientId,
            name: vehicles.name,
            plate: vehicles.plate,
            createdAt: vehicles.createdAt,
            updatedAt: vehicles.updatedAt,
            planId: vehicles.planId,
        }));

        res.status(200).json(formattedVehicles);

    }

}

export default new vehicleController();
