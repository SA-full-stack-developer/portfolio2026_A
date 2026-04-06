import { Component, inject, input, output } from '@angular/core';

import { DatePipe } from '@angular/common';
import { ResolvedExperience } from '@core/models/experience.model';
import { LanguageService } from '@core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-card',
  imports: [TranslateModule, DatePipe],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
})
export class ExperienceCardComponent {
  private readonly languageService = inject(LanguageService);
  experience = input.required<ResolvedExperience>();
  delectedSkill = output<string>();

  onTechClick(tech: string) {
    this.delectedSkill.emit(tech);
  }

  currentLang(): string {
    return this.languageService.currentLang();
  }
}
