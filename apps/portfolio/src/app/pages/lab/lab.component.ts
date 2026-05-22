import { Component, OnInit, inject } from '@angular/core';
import { BREADCRUMB_LAB, PAGE_SEO } from '@core/config/seo.config';

import { SeoService } from '@core/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lab',
  imports: [TranslateModule],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.scss',
})
export class LabComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.update(PAGE_SEO['lab']);
    this.seoService.updateSchemas([BREADCRUMB_LAB]);
  }
}
