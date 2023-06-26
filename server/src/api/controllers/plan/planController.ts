import { Response, Request } from 'express';
import { findPlans } from '../../repositories/plan';
import { ErrorMessage } from '../../utils/error';

class planController {
    async getPlan(req: Request, res: Response): Promise<void> {

        const plans = await findPlans();

        if (!Array.isArray(plans) || plans.length === 0) {
            res.status(404).json({
                statusCode: 404,
                message: 'Não foi possível localizar o plano.'
            });

            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível localizar o plano.'
            });
        }
        const formattedPlans = plans.map((plans) => ({
            id: plans.id,
            amount: plans.amount,
            finalDate: plans.finalDate,
            createdAt: plans.createdAt,
            updatedAt: plans.updatedAt
        }));

        res.status(200).json(formattedPlans);

    }

}

export default new planController();
