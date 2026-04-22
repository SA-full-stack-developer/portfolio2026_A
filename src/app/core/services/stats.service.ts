import { Injectable, inject, signal } from '@angular/core';
import { map, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Stat } from '@core/models/stat.model';
import { environment } from '@env/environment';

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
      .get<any>(this.apiUrl)
      .pipe(
        map((res) => res.data),
        tap((data) => this.stats.set(data)),
      )
      .subscribe();
  }
}
