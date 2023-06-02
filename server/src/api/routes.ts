import { Router } from 'express';
import { swaggerLoader, swaggerUI } from '../config/swagger';
import { authController } from './controllers/auth';

export const serverRouter = Router();

serverRouter.use('/docs', swaggerUI.serve, (_req: any, res: any) => {
  res.send(swaggerUI.generateHTML(swaggerLoader));
});

serverRouter.post('/login', authController);
