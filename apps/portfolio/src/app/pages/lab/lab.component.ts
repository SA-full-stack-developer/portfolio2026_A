import { Component, OnInit, Type, inject, signal } from '@angular/core';
import { BREADCRUMB_LAB, PAGE_SEO } from '@core/config/seo.config';

import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgComponentOutlet } from '@angular/common';
import { SeoService } from '@core/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lab',
  imports: [TranslateModule, NgComponentOutlet],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.scss',
})
export class LabComponent implements OnInit {
  private readonly seoService = inject(SeoService);
  remoteComponent = signal<Type<unknown> | null>(null);

  async ngOnInit(): Promise<void> {
    this.seoService.update(PAGE_SEO['lab']);
    this.seoService.updateSchemas([BREADCRUMB_LAB]);

    const m = await loadRemoteModule({
      remoteName: 'lab001',
      exposedModule: './Component',
    });
    this.remoteComponent.set(m.App);
  }
}
