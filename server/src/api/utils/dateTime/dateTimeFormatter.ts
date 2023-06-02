export function dateTimeFormatter(date: string | Date) {
  return new Date(date).toLocaleString('pt-BR');
}
