import { Response, Request } from 'express';
import { findPayments } from '../../repositories/payment';
import { findReport } from '../../repositories/procedures/reports';
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

    async getReport(res: Response, req: Request): Promise<void>{
        const plate = req.params.plate
        console.log(plate)
        let report = findReport(plate)

        if (!Array.isArray(report) || report.length === 0) {
            res.status(404).json({
                statusCode: 404,
                message: 'Não foi possível localizar o relatorio.'
            });

            throw new ErrorMessage({
                statusCode: 404,
                message: 'Não foi possível localizar o relatorio.'
            });
        }

        const formattedReport = report.map((report) => ({
            placa: report.placa,
            Mensalista: report.Mensalista,
            Plano_ativo: report.Plano_ativo,
            Nome_cliente: report.Nome_cliente,
            Valor_arrecadado: report.Valor_arrecadado,
            Valor_a_pagar: report.Valor_a_pagar
        }));
        
        res.status(200).json(formattedReport);
    }
}

export default new paymentController();
