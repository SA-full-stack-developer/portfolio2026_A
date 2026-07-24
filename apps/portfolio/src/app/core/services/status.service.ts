import { Service, computed, inject } from '@angular/core';

import { httpResource } from '@angular/common/http';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { Status } from '@portfolio/shared/models';
import { PlatformService } from '@shared-libs/services';

@Service()
export class StatusService {
  private readonly translate = inject(TranslateService);
  private readonly platformService = inject(PlatformService);
  private readonly apiUrl = `${
    this.platformService.isBrowser ? environment.browserApiUrl : environment.apiUrl
  }/status`;

  private readonly statusResource = httpResource<{ data: Status }>(() => this.apiUrl);

  readonly status = computed(() => this.statusResource.value()?.data.status ?? '');
  readonly isLoading = this.statusResource.isLoading;
  readonly error = computed(() =>
    this.statusResource.error() ? this.translate.instant('ERRORS.API') : null,
  );
}
