import { Service, computed, inject } from '@angular/core';

import { httpResource } from '@angular/common/http';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { Stat } from '@portfolio/shared/models';
import { PlatformService } from '@shared-libs/services';

@Service()
export class StatsService {
  private readonly translate = inject(TranslateService);
  private readonly platformService = inject(PlatformService);
  private readonly apiUrl = `${
    this.platformService.isBrowser ? environment.browserApiUrl : environment.apiUrl
  }/stats`;

  private readonly statsResource = httpResource<{ data: Stat[] }>(() => this.apiUrl);

  readonly stats = computed(() => this.statsResource.value()?.data ?? []);
  readonly isLoading = this.statsResource.isLoading;
  readonly error = computed(() =>
    this.statsResource.error() ? this.translate.instant('ERRORS.API') : null,
  );
}
