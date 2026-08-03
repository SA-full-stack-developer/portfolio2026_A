import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DEFAULT_SEO } from '@core/config/seo.config';
import { SeoService } from './seo';

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

  it('should create and inject schema script tag', () => {
    const schemas = [{ '@context': 'https://schema.org', '@type': 'Person', name: 'Test' }];
    service.updateSchemas(schemas);

    const script = document.getElementById('schema-json-ld') as HTMLScriptElement;
    expect(script).toBeTruthy();
    expect(script.type).toBe('application/ld+json');
    expect(JSON.parse(script.textContent!)).toEqual(schemas);
  });

  it('should update existing schema script tag instead of creating a new one', () => {
    const schemas1 = [{ '@context': 'https://schema.org', '@type': 'Person', name: 'First' }];
    const schemas2 = [{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Second' }];

    service.updateSchemas(schemas1);
    service.updateSchemas(schemas2);

    const scripts = document.querySelectorAll('#schema-json-ld');
    expect(scripts.length).toBe(1); // no duplicados
    expect(JSON.parse(scripts[0].textContent!)).toEqual(schemas2);
  });

  it('should handle empty schemas array', () => {
    expect(() => service.updateSchemas([])).not.toThrow();
  });
});
