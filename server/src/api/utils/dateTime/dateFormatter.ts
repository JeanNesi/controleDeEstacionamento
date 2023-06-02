export function dateFormatter(date: string | Date) {
  return new Date(date).toLocaleDateString('pt-BR', {
    timeZone: 'UTC',
  });
}
