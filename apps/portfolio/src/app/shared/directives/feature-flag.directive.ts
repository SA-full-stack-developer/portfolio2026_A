import { Directive, TemplateRef, ViewContainerRef, effect, inject, input } from '@angular/core';

import { FeatureFlagService } from '@core/services/feature-flag.service';

@Directive({
  selector: '[appFeatureFlag]',
  standalone: true,
})
export class FeatureFlagDirective {
  appFeatureFlag = input.required<string>();

  private readonly featureFlagService = inject(FeatureFlagService);
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainer = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      const flagId = this.appFeatureFlag();
      this.viewContainer.clear();
      if (this.featureFlagService.isVisible(flagId)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });
  }
}
