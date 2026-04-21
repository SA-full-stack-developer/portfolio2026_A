import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { StatusDotComponent } from '@shared/components/status-dot/status-dot.component';
import { FeatureFlagDirective } from '@shared/directives/feature-flag.directive';

@Component({
  selector: 'app-footer-information',
  imports: [LogoComponent, FeatureFlagDirective, StatusDotComponent, TranslateModule],
  templateUrl: './footer-information.component.html',
  styleUrl: './footer-information.component.scss',
})
export class FooterInformationComponent {}
