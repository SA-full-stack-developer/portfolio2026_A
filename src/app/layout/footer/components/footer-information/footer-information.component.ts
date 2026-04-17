import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StatusDotComponent } from '@shared/components/status-dot/status-dot.component';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';
import { HeaderLogoComponent } from 'src/app/layout/header/components/header-logo/header-logo.component';

@Component({
  selector: 'app-footer-information',
  imports: [HeaderLogoComponent, FeatureFlagDirective, StatusDotComponent, TranslateModule],
  templateUrl: './footer-information.component.html',
  styleUrl: './footer-information.component.scss',
})
export class FooterInformationComponent {}
