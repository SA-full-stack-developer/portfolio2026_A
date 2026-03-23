export const STAT_KIND = {
  STATIC: 'static',
  DYNAMIC: 'dynamic',
  SERVICE: 'service',
} as const;

export const STAT_CALCULATION = {
  YEARS: 'years',
  DAYS: 'days',
} as const;

export type StatKind = (typeof STAT_KIND)[keyof typeof STAT_KIND];
export type StatCalculation = (typeof STAT_CALCULATION)[keyof typeof STAT_CALCULATION];

export type StatValue =
  | { kind: typeof STAT_KIND.STATIC; value: number; showPlus?: boolean }
  | {
      kind: typeof STAT_KIND.DYNAMIC;
      startDate: Date;
      calculation: StatCalculation;
      showPlus?: boolean;
    }
  | { kind: typeof STAT_KIND.SERVICE };

export interface Stat {
  id: string;
  label: string;
  stat: StatValue;
  icon: string;
}
