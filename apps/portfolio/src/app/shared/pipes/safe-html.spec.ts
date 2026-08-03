import { TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html';

describe('SafeHtmlPipe', () => {
  let pipe: SafeHtmlPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      providers: [SafeHtmlPipe],
    });
    pipe = TestBed.inject(SafeHtmlPipe);
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('should create', () => expect(pipe).toBeTruthy());

  it('returns empty string for null', () => expect(pipe.transform(null)).toBe(''));

  it('returns empty string for undefined', () => expect(pipe.transform(undefined)).toBe(''));

  it('returns a SafeHtml object for a plain string', () => {
    const result = pipe.transform('Hello world');
    expect(result).toBeTruthy();
  });

  it('returns a SafeHtml object for a string with HTML tags', () => {
    const result = pipe.transform("<span class='highlight'>Cristian</span>");
    expect(result).toBeTruthy();
  });

  it('returns a SafeHtml object for a string with nested HTML', () => {
    const result = pipe.transform('<h1><span>Title</span></h1>');
    expect(result).toBeTruthy();
  });

  it('produces the same result as bypassSecurityTrustHtml', () => {
    const html = "<span class='highlight'>Cristian</span>";
    const expected = sanitizer.bypassSecurityTrustHtml(html);
    expect(pipe.transform(html)).toEqual(expected);
  });
});
