import { Router, Response, Request } from 'express';
import parkingController from './controllers/parking/parkingController'
import clientController from './controllers/client/clientController'
import vehicleController from './controllers/vehicle/vehicleController'
import planController from './controllers/plan/planController'
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello word');
})

router.get('/client/', clientController.getClient)
router.get('/plan/', planController.getPlan)
router.get('/vehicle/', vehicleController.getVehicle)
router.get('/parking/', parkingController.getParking)
router.get('/parking/slots', parkingController.getSlots)

export default router;

