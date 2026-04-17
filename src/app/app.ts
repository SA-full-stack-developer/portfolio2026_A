import { Component, inject } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { GsapService } from '@core/services/gsap.service';
import { LanguageService } from '@core/services/language.service';
import { SeoService } from '@core/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';
import { FooterCopyrightComponent } from './layout/footer/components/footer-copyright/footer-copyright.component';
import { FooterComponent } from './layout/footer/footer.component';
import { GoToTopComponent } from './layout/go-to-top/go-to-top.component';
import { HeaderComponent } from './layout/header/header.component';
import { ScrollProgressComponent } from './layout/scroll-progress/scroll-progress.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TranslateModule,
    RouterOutlet,
    HeaderComponent,
    FeatureFlagDirective,
    GoToTopComponent,
    ScrollProgressComponent,
    FooterComponent,
    FooterCopyrightComponent,
  ],
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
