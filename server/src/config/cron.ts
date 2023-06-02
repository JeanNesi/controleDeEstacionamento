import cron from 'node-cron';

export function initCron() {
  cron.schedule('0 4 * * *', () => console.log('disparando as 4 horas'));
}
