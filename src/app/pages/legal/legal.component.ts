import { Component, OnInit, inject } from '@angular/core';
import { BREADCRUMB_LEGAL, PAGE_SEO } from '@core/config/seo.config';

import { SeoService } from '@core/services/seo.service';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '@shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-legal',
  imports: [TranslateModule, SafeHtmlPipe],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss',
})
export class LegalComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.update(PAGE_SEO['legal']);
    this.seoService.updateSchemas([BREADCRUMB_LEGAL]);
  }
}
