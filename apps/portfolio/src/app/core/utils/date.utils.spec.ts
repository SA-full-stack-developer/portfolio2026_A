import { calculateDaysBetweenDates, calculateYearsBetweenDates } from './date.utils';

describe('DateUtils', () => {
  it('should calculate years between dates correctly', () => {
    const startDate = new Date('2020-01-01');
    const endDate = new Date('2024-01-01');
    const years = calculateYearsBetweenDates(startDate, endDate);
    expect(years).toBe(4);
  });

  it('should calculate days between dates correctly', () => {
    const startDate = new Date('2020-01-01');
    const endDate = new Date('2020-01-10');
    const days = calculateDaysBetweenDates(startDate, endDate);
    expect(days).toBe(9);
  });

  it('should use current date as default end date', () => {
    const startDate = new Date('2020-01-01');
    const years = calculateYearsBetweenDates(startDate);
    const days = calculateDaysBetweenDates(startDate);
    const now = new Date();
    const expectedYears = Math.floor(
      (now.getTime() - startDate.getTime()) / (365 * 24 * 60 * 60 * 1000),
    );
    const expectedDays = Math.floor((now.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
    expect(years).toBe(expectedYears);
    expect(days).toBe(expectedDays);
  });

  it('should return 0 for same start and end date', () => {
    const date = new Date('2020-01-01');
    expect(calculateYearsBetweenDates(date, date)).toBe(0);
    expect(calculateDaysBetweenDates(date, date)).toBe(0);
  });

  it('should return positive values regardless of date order', () => {
    const startDate = new Date('2020-01-01');
    const endDate = new Date('2024-01-01');
    expect(calculateYearsBetweenDates(endDate, startDate)).toBe(4);
    expect(calculateDaysBetweenDates(endDate, startDate)).toBe(1461);
  });

  it('should handle leap years correctly', () => {
    const startDate = new Date('2019-01-01');
    const endDate = new Date('2020-01-01');
    expect(calculateYearsBetweenDates(startDate, endDate)).toBe(1);
    expect(calculateDaysBetweenDates(startDate, endDate)).toBe(365);
  });

  it('should handle invalid dates gracefully', () => {
    const invalidDate = new Date('invalid');
    expect(() => calculateYearsBetweenDates(invalidDate, new Date())).toThrow();
    expect(() => calculateDaysBetweenDates(invalidDate, new Date())).toThrow();
  });
});
