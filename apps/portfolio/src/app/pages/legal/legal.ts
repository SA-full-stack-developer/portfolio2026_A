import { Component, OnInit, inject } from '@angular/core';
import { BREADCRUMB_LEGAL, PAGE_SEO } from '@core/config/seo';

import { SeoService } from '@core/services/seo';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '@shared/pipes/safe-html';

@Component({
  selector: 'app-legal',
  imports: [TranslateModule, SafeHtmlPipe],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class LegalComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.update(PAGE_SEO['legal']);
    this.seoService.updateSchemas([BREADCRUMB_LEGAL]);
  }
}
