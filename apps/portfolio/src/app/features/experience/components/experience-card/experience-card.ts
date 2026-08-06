import { Component, OnInit, inject, input, output, signal } from '@angular/core';

import { LanguageService } from '@core/services/language';
import { SkillCardComponent } from '@features/skills/components/skill-card/skill-card';
import { TranslatePipe } from '@ngx-translate/core';
import { ResolvedExperience, Skill } from '@portfolio/shared/models';
import { LocalDatePipe } from '@shared/pipes/local-date-pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago';

@Component({
  selector: 'app-experience-card',
  imports: [TranslatePipe, LocalDatePipe, SkillCardComponent, TimeAgoPipe],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.scss',
})
export class ExperienceCardComponent implements OnInit {
  private readonly languageService = inject(LanguageService);

  showProjects = input.required<boolean>();
  experience = input.required<ResolvedExperience>();
  openProjectId = input<string | null>(null);
  projectClick = output<string>();
  selectedSkill = signal<Skill | undefined>(undefined);
  readonly currentLang = this.languageService.currentLang;

  ngOnInit() {
    this.selectedSkill.set(this.experience().skills[0]);
  }

  onTechClick(tech: Skill) {
    this.selectedSkill.set(tech);
  }

  onProjectClick(projectId: string): void {
    this.projectClick.emit(projectId);
  }

  isProjectOpen(projectId: string): boolean {
    return this.openProjectId() === projectId;
  }
}
