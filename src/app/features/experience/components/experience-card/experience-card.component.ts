import { Component, OnInit, inject, input, output, signal } from '@angular/core';

import { DatePipe } from '@angular/common';
import { ResolvedExperience } from '@core/models/experience.model';
import { Skill } from '@core/models/skill.model';
import { LanguageService } from '@core/services/language.service';
import { SkillCardComponent } from '@features/skills/components/skill-card/skill-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-card',
  imports: [TranslateModule, DatePipe, SkillCardComponent],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
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
