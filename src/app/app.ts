import { Component, inject } from '@angular/core';

import { LanguageService } from '@core/services/language.service';
import { HeroStatCounterComponent } from '@features/hero/hero-stat-counter/hero-stat-counter.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';
import { SkillsComponent } from './features/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SkillsComponent,
    FeatureFlagDirective,
    TranslateModule,
    LanguageSwitcherComponent,
    HeroStatCounterComponent,
  ],
  templateUrl: './app.html',
})
export class App {
  private readonly languageService = inject(LanguageService);

  constructor() {
    this.languageService.init();
  }
}
