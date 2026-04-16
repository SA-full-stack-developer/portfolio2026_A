import { Injectable, inject, signal } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Stat } from '@core/models/stat.model';
import { environment } from '@env/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/stats`;

  readonly stats = signal<Stat[]>([]);

  constructor() {
    this.loadStats();
  }

  loadStats(): void {
    this.http
      .get<Stat[]>(this.apiUrl)
      .pipe(tap((data) => this.stats.set(data)))
      .subscribe();
  }
}
