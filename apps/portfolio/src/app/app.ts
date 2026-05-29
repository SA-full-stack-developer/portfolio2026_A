import { Component, inject } from '@angular/core';
import { BREADCRUMB_HOME, PERSON_SCHEMA, WEBSITE_SCHEMA } from '@core/config/seo.config';
import {
  CHAT_MESSAGE,
  COPYRIGHT,
  FOOTER,
  GO_TO_TOP,
  HEADER,
} from '@core/constants/feaute-flags.constants';
import { GsapService } from '@shared-libs/services';

import { RouterOutlet } from '@angular/router';
import { LanguageService } from '@core/services/language.service';
import { SeoService } from '@core/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';
import { AskMeFabComponent } from './layout/ask-me-fab/ask-me-fab.component';
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
    AskMeFabComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly languageService = inject(LanguageService);
  private readonly seoService = inject(SeoService);
  private readonly gsapService = inject(GsapService);
  readonly HEADER = HEADER;
  readonly GO_TO_TOP = GO_TO_TOP;
  readonly FOOTER = FOOTER;
  readonly COPYRIGHT = COPYRIGHT;
  readonly CHAT_MESSAGE = CHAT_MESSAGE;

  constructor() {
    this.languageService.init();
    this.seoService.init();
    this.gsapService.init();
    this.seoService.updateSchemas([PERSON_SCHEMA, WEBSITE_SCHEMA, BREADCRUMB_HOME]);
  }
}
