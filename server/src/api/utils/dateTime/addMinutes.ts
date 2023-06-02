export interface IAddMinutes {
  date: Date;
  minutes: number;
}

export function addMinutes({ date, minutes }: IAddMinutes) {
  return new Date(date.getTime() + minutes * 60000);
}
