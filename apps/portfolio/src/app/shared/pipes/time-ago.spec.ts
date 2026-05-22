import { TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { TimeAgoPipe } from './time-ago.pipe';

const mockTranslate = {
  instant: (key: string, params?: { count?: number; years?: number; months?: number }) => {
    const map: Record<string, string> = {
      'TIME_AGO.JUST_NOW': 'just now',
      'TIME_AGO.MINUTES_ONE': '1 minute ago',
      'TIME_AGO.MINUTES_OTHER': `${params?.count} minutes ago`,
      'TIME_AGO.HOURS_ONE': '1 hour ago',
      'TIME_AGO.HOURS_OTHER': `${params?.count} hours ago`,
      'TIME_AGO.DAYS_ONE': '1 day ago',
      'TIME_AGO.DAYS_OTHER': `${params?.count} days ago`,
      'TIME_AGO.MONTHS_ONE': '1 month ago',
      'TIME_AGO.MONTHS_OTHER': `${params?.count} months ago`,
      'TIME_AGO.YEARS_ONE': '1 year ago',
      'TIME_AGO.YEARS_OTHER': `${params?.count} years ago`,
      'TIME_AGO.YEARS_MONTHS_ONE_ONE': '1 year and 1 month ago',
      'TIME_AGO.YEARS_MONTHS_ONE_OTHER': `1 year and ${params?.months} months ago`,
      'TIME_AGO.YEARS_MONTHS_OTHER_ONE': `${params?.years} years and 1 month ago`,
      'TIME_AGO.YEARS_MONTHS_OTHER_OTHER': `${params?.years} years and ${params?.months} months ago`,
    };
    return map[key] ?? key;
  },
  currentLang: 'en',
  onLangChange: new Subject(),
};

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeAgoPipe, { provide: TranslateService, useValue: mockTranslate }],
    });
    pipe = TestBed.inject(TimeAgoPipe);
  });

  afterEach(() => pipe.ngOnDestroy());

  const minutesAgo = (m: number) => new Date(Date.now() - m * 60000);
  const hoursAgo = (h: number) => new Date(Date.now() - h * 3600000);
  const daysAgo = (d: number) => new Date(Date.now() - d * 86400000);
  const monthsAgo = (mo: number) => new Date(Date.now() - mo * 30 * 86400000);
  const yearsAgo = (y: number) => new Date(Date.now() - y * 365 * 86400000);

  it('should create', () => expect(pipe).toBeTruthy());

  it('returns empty string for null', () => expect(pipe.transform(null)).toBe(''));
  it('returns empty string for undefined', () => expect(pipe.transform(undefined)).toBe(''));
  it('returns empty string for invalid date string', () =>
    expect(pipe.transform('not-a-date')).toBe(''));

  it('returns "just now" for less than 1 minute', () =>
    expect(pipe.transform(minutesAgo(0))).toBe('just now'));

  it('returns singular minutes', () => expect(pipe.transform(minutesAgo(1))).toBe('1 minute ago'));

  it('returns plural minutes', () => expect(pipe.transform(minutesAgo(45))).toBe('45 minutes ago'));

  it('returns singular hours', () => expect(pipe.transform(hoursAgo(1))).toBe('1 hour ago'));

  it('returns plural hours', () => expect(pipe.transform(hoursAgo(5))).toBe('5 hours ago'));

  it('returns singular days', () => expect(pipe.transform(daysAgo(1))).toBe('1 day ago'));

  it('returns plural days', () => expect(pipe.transform(daysAgo(15))).toBe('15 days ago'));

  it('returns singular months', () => expect(pipe.transform(monthsAgo(1))).toBe('1 month ago'));

  it('returns plural months', () => expect(pipe.transform(monthsAgo(6))).toBe('6 months ago'));

  it('returns singular years', () => expect(pipe.transform(yearsAgo(1))).toBe('1 year ago'));

  it('returns plural years', () => expect(pipe.transform(yearsAgo(3))).toBe('3 years ago'));

  it('accepts a Date object', () => expect(pipe.transform(yearsAgo(2))).toBe('2 years ago'));

  it('accepts a date string', () => {
    const d = new Date(Date.now() - 2 * 365 * 86400000).toISOString();
    expect(pipe.transform(d)).toBe('2 years ago');
  });

  it('returns years only when no remaining months', () =>
    expect(pipe.transform(yearsAgo(2))).toBe('2 years ago'));

  it('returns 1 year and 1 month', () => {
    const d = new Date(Date.now() - (365 + 30) * 86400000);
    expect(pipe.transform(d)).toBe('1 year and 1 month ago');
  });

  it('returns 1 year and N months', () => {
    const d = new Date(Date.now() - (365 + 90) * 86400000);
    expect(pipe.transform(d)).toBe('1 year and 3 months ago');
  });

  it('returns N years and 1 month', () => {
    const d = new Date(Date.now() - (730 + 30) * 86400000);
    expect(pipe.transform(d)).toBe('2 years and 1 month ago');
  });

  it('returns N years and N months', () => {
    const d = new Date(Date.now() - (730 + 60) * 86400000);
    expect(pipe.transform(d)).toBe('2 years and 2 months ago');
  });
});
