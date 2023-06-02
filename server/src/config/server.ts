import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import 'express-async-errors';

import { corsOptions } from './corsOptions';
import { errorHandler } from '../api/utils/error';
import { serverRouter } from '../api/routes';
import { initCron } from './cron';

export const server = express();

initCron();

server.use(cors(corsOptions));
server.use(express.json());

server.use('/api', serverRouter);

server.use(helmet());
server.use(errorHandler);
