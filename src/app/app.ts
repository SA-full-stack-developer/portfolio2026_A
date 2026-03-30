import { Component, inject } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { GsapService } from '@core/services/gsap.service';
import { LanguageService } from '@core/services/language.service';
import { SeoService } from '@core/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, LanguageSwitcherComponent, RouterOutlet],
  templateUrl: './app.html',
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
