import { OnDestroy, Pipe, PipeTransform, inject } from '@angular/core';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
  pure: false,
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
  private translate = inject(TranslateService);
  private lastValue = '';
  private lastInput = '';
  private langSub: Subscription;

  constructor() {
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.lastInput = '';
    });
  }

  transform(value: string | Date | null | undefined): string {
    if (!value) return '';

    const date = value instanceof Date ? value : new Date(value);
    if (isNaN(date.getTime())) return '';

    const inputKey = `${date.getTime()}-${this.translate.currentLang()}`;
    if (inputKey === this.lastInput) return this.lastValue;

    this.lastInput = inputKey;
    this.lastValue = this.getLabel(date);
    return this.lastValue;
  }

  private getLabel(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);
    const remainingMonths = diffMonths - diffYears * 12;

    if (diffMins < 1) return this.t('TIME_AGO.JUST_NOW');
    if (diffMins < 60)
      return diffMins === 1
        ? this.t('TIME_AGO.MINUTES_ONE')
        : this.t('TIME_AGO.MINUTES_OTHER', { count: diffMins });
    if (diffHours < 24)
      return diffHours === 1
        ? this.t('TIME_AGO.HOURS_ONE')
        : this.t('TIME_AGO.HOURS_OTHER', { count: diffHours });
    if (diffDays < 30)
      return diffDays === 1
        ? this.t('TIME_AGO.DAYS_ONE')
        : this.t('TIME_AGO.DAYS_OTHER', { count: diffDays });
    if (diffMonths < 12)
      return diffMonths === 1
        ? this.t('TIME_AGO.MONTHS_ONE')
        : this.t('TIME_AGO.MONTHS_OTHER', { count: diffMonths });

    if (remainingMonths === 0) {
      return diffYears === 1
        ? this.t('TIME_AGO.YEARS_ONE')
        : this.t('TIME_AGO.YEARS_OTHER', { count: diffYears });
    }

    if (diffYears === 1 && remainingMonths === 1) return this.t('TIME_AGO.YEARS_MONTHS_ONE_ONE');
    if (diffYears === 1)
      return this.t('TIME_AGO.YEARS_MONTHS_ONE_OTHER', { months: remainingMonths });
    if (remainingMonths === 1)
      return this.t('TIME_AGO.YEARS_MONTHS_OTHER_ONE', { years: diffYears });
    return this.t('TIME_AGO.YEARS_MONTHS_OTHER_OTHER', {
      years: diffYears,
      months: remainingMonths,
    });
  }

  private t(key: string, params?: object): string {
    return this.translate.instant(key, params);
  }

  ngOnDestroy(): void {
    this.langSub.unsubscribe();
  }
}
