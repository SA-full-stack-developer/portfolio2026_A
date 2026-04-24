import { Injectable, inject, signal } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Stat } from '@core/models/stat.model';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private readonly http = inject(HttpClient);
  private readonly translate = inject(TranslateService);
  private readonly platformService = inject(PlatformService);
  private readonly apiUrl = `${
    this.platformService.isBrowser ? environment.browserApiUrl : environment.apiUrl
  }/stats`;
  private readonly _error = signal<string | null>(null);

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
        catchError((err) => {
          const errorMessage = this.translate.instant('ERRORS.API');
          this._error.set(errorMessage);
          console.error('API Error:', err);
          return of({ status: '' });
        }),
      )
      .subscribe();
  }
}
