import { computed, inject, Service } from '@angular/core';

import { httpResource } from '@angular/common/http';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { ResolvedExperience } from '@portfolio/shared/models';
import { PlatformService } from '@shared-libs/services';

@Service()
export class ExperienceService {
  private readonly translate = inject(TranslateService);
  private readonly platformService = inject(PlatformService);
  private readonly apiUrl = `${
    this.platformService.isBrowser ? environment.browserApiUrl : environment.apiUrl
  }/experience`;

  private readonly experienceResource = httpResource<{ data: ResolvedExperience[] }>(
    () => this.apiUrl,
  );

  readonly experiences = computed(() => this.experienceResource.value()?.data ?? []);
  readonly isLoading = this.experienceResource.isLoading;
  readonly error = computed(() =>
    this.experienceResource.error() ? this.translate.instant('ERRORS.API') : null,
  );
}
