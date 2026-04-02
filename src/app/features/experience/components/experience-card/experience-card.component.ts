import { Component, input, output } from '@angular/core';

import { DatePipe } from '@angular/common';
import { Experience } from '@core/models/experience.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-card',
  imports: [TranslateModule, DatePipe],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
})
export class ExperienceCardComponent {
  experience = input.required<Experience>();
  delectedSkill = output<string>();

  onTechClick(tech: string) {
    this.delectedSkill.emit(tech);
  }
}
