import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DEFAULT_SEO } from '@core/config/seo.config';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(SeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with default SEO config', () => {
    jest.spyOn(service['title'], 'setTitle');
    jest.spyOn(service['meta'], 'updateTag');
    service.init();
    expect(service['title'].setTitle).toHaveBeenCalledWith(DEFAULT_SEO.title);
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      name: 'description',
      content: DEFAULT_SEO.description,
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      name: 'keywords',
      content: DEFAULT_SEO.keywords.join(', '),
    });
  });

  it('should update SEO config with partial config', () => {
    jest.spyOn(service['title'], 'setTitle');
    jest.spyOn(service['meta'], 'updateTag');
    service.init();
    service.update({ title: 'Updated Title' });
    expect(service['title'].setTitle).toHaveBeenCalledWith('Updated Title');
  });

  it('should update SEO config with full config', () => {
    jest.spyOn(service['title'], 'setTitle');
    jest.spyOn(service['meta'], 'updateTag');
    service.init();
    service.update({
      title: 'Full Update',
      description: 'Updated description',
      keywords: ['updated', 'keywords'],
      ogTitle: 'OG Title',
      ogDescription: 'OG Description',
      ogUrl: 'https://example.com',
      ogImage: 'https://example.com/image.png',
      twitterCard: 'summary',
    });
    expect(service['title'].setTitle).toHaveBeenCalledWith('Full Update');
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      name: 'description',
      content: 'Updated description',
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      name: 'keywords',
      content: 'updated, keywords',
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      property: 'og:title',
      content: 'OG Title',
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      property: 'og:description',
      content: 'OG Description',
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      property: 'og:type',
      content: 'website',
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      property: 'og:url',
      content: 'https://example.com',
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      property: 'og:image',
      content: 'https://example.com/image.png',
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      name: 'twitter:card',
      content: 'summary',
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      name: 'twitter:title',
      content: 'OG Title',
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      name: 'twitter:description',
      content: 'OG Description',
    });
    expect(service['meta'].updateTag).toHaveBeenCalledWith({
      name: 'twitter:image',
      content: 'https://example.com/image.png',
    });
  });

  it('should fallback to defaults for missing optional fields', () => {
    jest.spyOn(service['title'], 'setTitle');
    jest.spyOn(service['meta'], 'updateTag');
    service.init();
    service.update({ title: 'Partial Update' });
    expect(service['title'].setTitle).toHaveBeenCalledWith('Partial Update');
  });

  it('should handle empty config update', () => {
    jest.spyOn(service['title'], 'setTitle');
    jest.spyOn(service['meta'], 'updateTag');
    service.init();
    service.update({});
    expect(service['title'].setTitle).toHaveBeenCalledWith(DEFAULT_SEO.title);
  });

  it('should handle undefined config update', () => {
    jest.spyOn(service['title'], 'setTitle');
    jest.spyOn(service['meta'], 'updateTag');
    service.init();
    service.update(undefined as any);
    expect(service['title'].setTitle).toHaveBeenCalledWith(DEFAULT_SEO.title);
  });

  it('should handle null config update', () => {
    jest.spyOn(service['title'], 'setTitle');
    jest.spyOn(service['meta'], 'updateTag');
    service.init();
    service.update(null as any);
    expect(service['title'].setTitle).toHaveBeenCalledWith(DEFAULT_SEO.title);
  });

  it('should not throw error when updating with invalid config', () => {
    expect(() => service.update({ title: 123 } as any)).not.toThrow();
  });
});
