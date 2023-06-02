export interface IRemoveMinutes {
  date: Date;
  minutes: number;
}

export function removeMinutes({ date, minutes }: IRemoveMinutes) {
  return new Date(date.getTime() - minutes * 60000);
}
