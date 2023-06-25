import { Router, Response, Request } from 'express';
import parkingController from './controllers/parking/parkingController'
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello word');
})
router.get('/parking/', parkingController.getParking)
router.get('/parking/slots', parkingController.getSlots)

export default router;

