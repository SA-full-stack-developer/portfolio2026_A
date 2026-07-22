import {
  FOOTER_CONTACT,
  FOOTER_INFORMATION,
  FOOTER_LINKS,
} from '@core/constants/feaute-flags.constants';

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';
import { FooterContactComponent } from './components/footer-contact/footer-contact.component';
import { FooterInformationComponent } from './components/footer-information/footer-information.component';
import { FooterLinksComponent } from './components/footer-links/footer-links.component';

@Component({
  selector: 'app-footer',
  imports: [
    FooterInformationComponent,
    FooterLinksComponent,
    FooterContactComponent,
    FeatureFlagDirective,
  ],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly FOOTER_INFORMATION = FOOTER_INFORMATION;
  readonly FOOTER_LINKS = FOOTER_LINKS;
  readonly FOOTER_CONTACT = FOOTER_CONTACT;
}
