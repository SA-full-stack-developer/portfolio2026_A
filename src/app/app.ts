import { Component, inject } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { GsapService } from '@core/services/gsap.service';
import { LanguageService } from '@core/services/language.service';
import { SeoService } from '@core/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';
import { HeaderComponent } from './layout/header/header.component';
import { GoToTopComponent } from './layout/go-to-top/go-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, RouterOutlet, HeaderComponent, FeatureFlagDirective, GoToTopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);
  private readonly gsapService = inject(GsapService);

  constructor() {
    this.languageService.init();
    this.seoService.init();
    this.gsapService.init();
  }
}
