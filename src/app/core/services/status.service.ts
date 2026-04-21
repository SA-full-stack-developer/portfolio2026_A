import { Injectable, inject, signal } from '@angular/core';
import { catchError, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Status } from '@core/models/status.model';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private readonly http = inject(HttpClient);
  private readonly translate = inject(TranslateService);
  private readonly apiUrl = `${environment.apiUrl}/status`;
  private readonly _error = signal<string | null>(null);
  private readonly _status = signal<string>('');

  readonly status = this._status.asReadonly();

  constructor() {
    this.loadStatus();
  }

  loadStatus() {
    this.http
      .get<Status>(this.apiUrl)
      .pipe(
        catchError((err) => {
          const errorMessage = this.translate.instant('STATUS.ERROR');
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
