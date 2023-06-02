/* eslint-disable no-console */
import { server } from './config/server';
import 'dotenv/config';

server.listen(process.env.PORT || 8080, () =>
  console.log('\n\n\n 🚀️ Server is running 🚀️ \n\n', `📰️ http://localhost:8080/api/docs\n\n`),
);
