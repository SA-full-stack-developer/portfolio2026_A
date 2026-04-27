import { Component, OnInit, inject } from '@angular/core';

import { PAGE_SEO } from '@core/config/seo.config';
import { SeoService } from '@core/services/seo.service';

@Component({
  selector: 'app-lab',
  imports: [],
  templateUrl: './lab.component.html',
  styleUrl: './lab.component.scss',
})
export class LabComponent implements OnInit {
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.update(PAGE_SEO['lab']);
  }
}
