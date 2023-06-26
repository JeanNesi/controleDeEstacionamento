import { Response, Request } from 'express';
import { findPayments } from '../../repositories/payment';
import { ErrorMessage } from '../../utils/error';

class paymentController {
    async getParking(res: Response): Promise<void> {

        const payment = await findPayments();

        if (!Array.isArray(payment) || payment.length === 0) {
            res.status(404).json({
                statusCode: 404,
                message: 'Não foi possível localizar o pagamento.'
            });

            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível localizar o pagamento.'
            });
        }
        const formattedPayments = payment.map((payment) => ({
            id: payment.id,
            amount: payment.amount,
            paymentDate: payment.paymentDate,
            reservationId: payment.reservationId,
            createdAt: payment.createdAt,
            updatedAt: payment.updatedAt,
            clientId: payment.clientId,
        }));

        res.status(200).json(formattedPayments);

    }
}

export default new paymentController();
