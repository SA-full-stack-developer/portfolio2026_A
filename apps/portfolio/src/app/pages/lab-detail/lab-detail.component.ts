import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgComponentOutlet } from '@angular/common';
import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { BREADCRUMB_LAB, PAGE_SEO } from '@core/config';
import { LAB_CONFIG } from '@core/config/lab.config';
import {
  BORDER_GRADIENT,
  CARD_EFFECT,
  FLIPCARD,
  LIQUID_PROGRESS_BAR,
  SPLITTEXT,
} from '@core/constants';
import { LabConfig } from '@core/models/lab.model';
import { SeoService } from '@core/services';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lab-detail',
  imports: [TranslateModule, NgComponentOutlet],
  templateUrl: './lab-detail.component.html',
  styleUrl: './lab-detail.component.scss',
})
export class LabDetailComponent implements OnInit {
  protected readonly BORDER_GRADIENT = BORDER_GRADIENT;
  protected readonly CARD_EFFECT = CARD_EFFECT;
  protected readonly LIQUID_PROGRESS_BAR = LIQUID_PROGRESS_BAR;
  protected readonly FLIPCARD = FLIPCARD;
  protected readonly SPLITTEXT = SPLITTEXT;
  private readonly seoService = inject(SeoService);

  // Para que funcione bien debe ser exactamente el mismo nombre que pusimos como parametro de ruta en el routes
  labId = input<string>();

  labConfig = computed<LabConfig | undefined>(() => {
    const id = this.labId();
    console.log(LAB_CONFIG);
    return id ? LAB_CONFIG[id] : undefined;
  });

  loadedComponent = signal<LabConfig | null>(null);

  async ngOnInit(): Promise<void> {
    this.seoService.update(PAGE_SEO['lab']);
    this.seoService.updateSchemas([BREADCRUMB_LAB]);

    const config = this.labConfig();
    if (!config) return;

    const m = await loadRemoteModule({
      remoteName: config.remoteName,
      exposedModule: config.exposedModule,
    });

    this.loadedComponent.set({
      ...config,
      component: m[config.exportName],
    });
  }
}
