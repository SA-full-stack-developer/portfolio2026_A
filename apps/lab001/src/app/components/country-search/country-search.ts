import { Component, debounced, signal } from '@angular/core';

import { DecimalPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';

interface Country {
  name: { common: string };
  capital?: string[];
  population: number;
  flags: { svg: string };
}

@Component({
  selector: 'app-country-search',
  imports: [DecimalPipe],
  templateUrl: './country-search.html',
  styleUrl: './country-search.scss',
})
export class CountrySearch {
  readonly query = signal('');
  readonly debouncedQuery = debounced(this.query, 400);

  readonly results = httpResource<Country[]>(() => {
    const term = this.debouncedQuery.value();
    if (!term || term.trim().length < 2) {
      return undefined;
    }
    return `https://countries.dev/name/${encodeURIComponent(term)}`;
  });

  onInput(value: string) {
    this.query.set(value);
  }
}
