import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { BREADCRUMB_LAB, PAGE_SEO } from '@core/config/seo.config';

import { loadRemoteModule } from '@angular-architects/native-federation';
import { LAB_CONFIG } from '@core/config/lab.config';
import { LabConfig } from '@core/models/lab.model';
import { FeatureFlagService } from '@core/services';
import { SeoService } from '@core/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';
import { FeatureFlagDirective } from '@shared/directives';
import { LabCardComponent } from './components/lab-card/lab-card';

@Component({
  selector: 'app-lab',
  imports: [TranslateModule, LabCardComponent, FeatureFlagDirective],
  templateUrl: './lab.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './lab.component.scss',
})
export class LabComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  private readonly featureFlagService = inject(FeatureFlagService);

  remotesComponent = signal<LabConfig[]>(Object.values(LAB_CONFIG));

  async ngOnInit(): Promise<void> {
    const tmpComponents: LabConfig[] = [];
    this.seoService.update(PAGE_SEO['lab']);
    this.seoService.updateSchemas([BREADCRUMB_LAB]);

    for (const lab of this.remotesComponent()) {
      const m = await loadRemoteModule({
        remoteName: lab.remoteName,
        exposedModule: lab.exposedModule,
      });

      const tmpComponent: LabConfig = {
        ...lab,
        component: m[lab.exportName],
      };

      tmpComponents.push(tmpComponent);
    }

    this.remotesComponent.update(() => tmpComponents);
  }

  getVisibilityName(tag: string) {
    return this.featureFlagService.getVisibility(tag);
  }
}
