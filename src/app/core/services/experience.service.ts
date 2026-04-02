import { Injectable, signal } from '@angular/core';

import { EXPERIENCES_DATA } from '@core/data/experiences.data';
import { Experience } from '@core/models/experience.model';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  readonly experiences = signal<Experience[]>(EXPERIENCES_DATA).asReadonly();
}
