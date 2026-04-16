import { Injectable, inject, signal } from '@angular/core';
import { catchError, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ResolvedExperience } from '@core/models/experience.model';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/experience`;
  private readonly translate = inject(TranslateService);
  private readonly _experiences = signal<ResolvedExperience[]>([]);
  private readonly _loading = signal<boolean>(false);
  private readonly _error = signal<string | null>(null);

  readonly experiences = this._experiences.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  constructor() {
    this.fetchExperience();
  }

  private fetchExperience() {
    this._loading.set(true);
    this._error.set(null);

    this.http
      .get<ResolvedExperience[]>(this.apiUrl)
      .pipe(
        catchError((err) => {
          const errorMessage = this.translate.instant('EXPERIENCE.ERRORS.FETCH_ERROR');
          this._error.set(errorMessage);
          this._loading.set(false);
          console.error('API Error:', err);
          return of([]);
        }),
      )
      .subscribe((data) => {
        this._experiences.set(data);
        this._loading.set(false);
      });
  }
}
