import {
  FOOTER_CONTACT,
  FOOTER_INFORMATION,
  FOOTER_LINKS,
} from '@core/constants/feaute-flags.constants';

import { Component } from '@angular/core';
import { FeatureFlagDirective } from '@shared/directives/feature-flag';
import { FooterContactComponent } from './components/footer-contact/footer-contact';
import { FooterInformationComponent } from './components/footer-information/footer-information';
import { FooterLinksComponent } from './components/footer-links/footer-links';

@Component({
  selector: 'app-footer',
  imports: [
    FooterInformationComponent,
    FooterLinksComponent,
    FooterContactComponent,
    FeatureFlagDirective,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly FOOTER_INFORMATION = FOOTER_INFORMATION;
  readonly FOOTER_LINKS = FOOTER_LINKS;
  readonly FOOTER_CONTACT = FOOTER_CONTACT;
}
