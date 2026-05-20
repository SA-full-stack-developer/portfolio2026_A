import {
  HEADER_HAMBURGER,
  HEADER_LOGO,
  HEADER_NAV,
  LANGUAGE_SWITCHER,
} from '@core/constants/feaute-flags.constants';

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher.component';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { HeaderHamburgerComponent } from './components/header-hamburger/header-hamburger.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';

@Component({
  selector: 'app-header',
  imports: [
    LogoComponent,
    HeaderNavComponent,
    HeaderHamburgerComponent,
    LanguageSwitcherComponent,
    FeatureFlagDirective,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly HEADER_LOGO = HEADER_LOGO;
  readonly HEADER_NAV = HEADER_NAV;
  readonly LANGUAGE_SWITCHER = LANGUAGE_SWITCHER;
  readonly HEADER_HAMBURGER = HEADER_HAMBURGER;
}
