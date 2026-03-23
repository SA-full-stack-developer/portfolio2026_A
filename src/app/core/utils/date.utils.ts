export function calculateYearsBetweenDates(startDate: Date, endDate: Date = new Date()): number {
  const diffInSeconds = Math.abs(endDate.getTime() - startDate.getTime()) / 1000;
  const diffInYears = diffInSeconds / (365 * 24 * 60 * 60);
  return Math.floor(diffInYears);
}

export function calculateDaysBetweenDates(startDate: Date, endDate: Date = new Date()): number {
  const diffInSeconds = Math.abs(endDate.getTime() - startDate.getTime()) / 1000;
  const diffInDays = diffInSeconds / (24 * 60 * 60);
  return Math.floor(diffInDays);
}
