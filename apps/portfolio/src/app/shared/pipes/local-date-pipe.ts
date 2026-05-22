import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate',
  standalone: true,
  pure: true,
})
export class LocalDatePipe implements PipeTransform {
  transform(value: string | Date | null | undefined, lang: string = 'en'): string {
    if (!value) return '';
    const date = typeof value === 'string' ? new Date(value) : value;
    return new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric' }).format(date);
  }
}
