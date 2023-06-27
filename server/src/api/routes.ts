import { Router, Response, Request } from 'express';
import parkingController from './controllers/parking/parkingController'
import clientController from './controllers/client/clientController'
import userController from './controllers/user/userController'
import vehicleController from './controllers/vehicle/vehicleController'
import planController from './controllers/plan/planController'
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello word');
})

router.post('/client/', clientController.postClient)
router.put('/client/:id', clientController.putClient)
router.delete('/client/:id', clientController.deleteClient)
router.get('/client/', clientController.getClient)

router.get('/user/', userController.getUsers)

router.get('/plan/', planController.getPlan)

router.get('/vehicle/', vehicleController.getVehicle)

router.get('/parking/', parkingController.getParking)

router.get('/parking/slots', parkingController.getSlots)

export default router;

