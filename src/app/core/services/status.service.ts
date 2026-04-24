import { Injectable, inject, signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private readonly http = inject(HttpClient);
  private readonly translate = inject(TranslateService);
  private readonly platformService = inject(PlatformService);
  private readonly apiUrl = `${
    this.platformService.isBrowser ? environment.browserApiUrl : environment.apiUrl
  }/status`;
  private readonly _error = signal<string | null>(null);
  private readonly _status = signal<string>('');

  readonly status = this._status.asReadonly();

  constructor() {
    this.loadStatus();
  }

  loadStatus() {
    this.http
      .get<any>(this.apiUrl)
      .pipe(
        map((res) => res.data),
        catchError((err) => {
          const errorMessage = this.translate.instant('ERRORS.API');
          this._error.set(errorMessage);
          console.error('API Error:', err);
          return of({ status: '' });
        }),
      )
      .subscribe((data) => {
        this._status.set(data.status);
      });
  }
}
