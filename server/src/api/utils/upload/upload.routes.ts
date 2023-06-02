// LIBS
import { Router } from 'express';

// FUNCTIONS
import { upload } from './upload';

// ROUTES
export const uploadRouter = Router();

uploadRouter.post('/file', upload);
