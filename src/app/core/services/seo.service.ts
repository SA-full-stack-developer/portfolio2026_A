import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { DEFAULT_SEO } from '@core/config/seo.config';
import { SeoConfig } from '@core/models/seo.model';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  init(): void {
    this.update(DEFAULT_SEO);
  }

  update(config: Partial<SeoConfig>): void {
    const merged = { ...DEFAULT_SEO, ...config };
    this.title.setTitle(merged.title);
    this.meta.updateTag({ name: 'description', content: merged.description });
    this.meta.updateTag({ name: 'keywords', content: merged.keywords.join(', ') });
    this.meta.updateTag({ property: 'og:title', content: merged.ogTitle ?? merged.title });
    this.meta.updateTag({
      property: 'og:description',
      content: merged.ogDescription ?? merged.description,
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: merged.ogUrl ?? '' });
    this.meta.updateTag({ property: 'og:image', content: merged.ogImage ?? '' });
    this.meta.updateTag({
      name: 'twitter:card',
      content: merged.twitterCard ?? 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: merged.ogTitle ?? merged.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: merged.ogDescription ?? merged.description,
    });
    this.meta.updateTag({ name: 'twitter:image', content: merged.ogImage ?? '' });
  }
}
