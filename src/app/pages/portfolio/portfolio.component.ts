import { Component, inject, OnInit } from '@angular/core';

import { PAGE_SEO } from '@core/config/seo.config';
import { ID_EXPERIENCE } from '@core/constants/sections.constants';
import { SeoService } from '@core/services/seo.service';
import { ExperienceComponent } from '@features/experience/experience.component';
import { HeroComponent } from '@features/hero/hero.component';
import { SkillsComponent } from '@features/skills/skills.component';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';

@Component({
  selector: 'app-portfolio',
  imports: [SkillsComponent, FeatureFlagDirective, HeroComponent, ExperienceComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  readonly ID_EXPERIENCE = ID_EXPERIENCE;

  ngOnInit(): void {
    this.seoService.update(PAGE_SEO['portfolio']);
  }
}
