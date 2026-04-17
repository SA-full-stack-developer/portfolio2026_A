import { Component } from '@angular/core';
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
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
