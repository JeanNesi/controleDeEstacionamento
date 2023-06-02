export interface IAddDays {
  date: Date;
  days: number;
}

export function addDays({ date, days }: IAddDays) {
  const newDate = new Date(date);

  newDate.setDate(newDate.getDate() + days);

  return newDate;
}
