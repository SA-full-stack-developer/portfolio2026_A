import { Component, inject } from '@angular/core';

import { HEADER_LOGO } from '@core/constants/feature-flags';
import { StatusService } from '@core/services/status';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from '@shared/components/logo/logo';
import { StatusDotComponent } from '@shared/components/status-dot/status-dot';
import { FeatureFlagDirective } from '@shared/directives/feature-flag';

@Component({
  selector: 'app-footer-information',
  imports: [LogoComponent, FeatureFlagDirective, StatusDotComponent, TranslateModule],
  templateUrl: './footer-information.html',
  styleUrl: './footer-information.scss',
})
export class FooterInformationComponent {
  private readonly statusService = inject(StatusService);

  readonly status = this.statusService.status;
  readonly HEADER_LOGO = HEADER_LOGO;
}
