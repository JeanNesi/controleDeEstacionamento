import express from 'express';
import 'express-async-errors';
import router from '../api/routes';

export const server = express();

server.use('/api', router);
