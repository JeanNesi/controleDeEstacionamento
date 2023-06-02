export interface IRemoveDays {
  date: Date;
  days: number;
}

export function removeDays({ date, days }: IRemoveDays) {
  const newDate = new Date(date);

  date.setDate(date.getDate() - days);

  return newDate;
}
