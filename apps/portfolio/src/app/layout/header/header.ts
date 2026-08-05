import {
  HEADER_HAMBURGER,
  HEADER_LOGO,
  HEADER_NAV,
  LANGUAGE_SWITCHER,
} from '@core/constants/feature-flags';

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '@shared/components/language-switcher/language-switcher';
import { FeatureFlagDirective } from '@shared/directives/feature-flag';
import { LogoComponent } from '../../shared/components/logo/logo';
import { HeaderHamburgerComponent } from './components/header-hamburger/header-hamburger';
import { HeaderNavComponent } from './components/header-nav/header-nav';

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
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  readonly HEADER_LOGO = HEADER_LOGO;
  readonly HEADER_NAV = HEADER_NAV;
  readonly LANGUAGE_SWITCHER = LANGUAGE_SWITCHER;
  readonly HEADER_HAMBURGER = HEADER_HAMBURGER;
}
