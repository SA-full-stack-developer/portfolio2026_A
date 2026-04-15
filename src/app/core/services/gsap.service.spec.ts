import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GsapService } from './gsap.service';

describe('GsapService', () => {
  let service: GsapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(GsapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize correctly', () => {
    service.init();
    expect(service['initialized']).toBe(true);
  });

  it('should not initialize again if already initialized', () => {
    service.init();
    const initialGsap = service.gsap;
    service.init();
    expect(service.gsap).toBe(initialGsap);
  });

  it('should return gsap instance', () => {
    expect(service.gsap).toBeTruthy();
  });

  it('should return ScrollTrigger instance', () => {
    expect(service.scrollTrigger).toBeTruthy();
  });

  it('should not initialize on non-browser platform', () => {
    service['platformService'].isBrowser = false;
    service.init();
    expect(service['initialized']).toBe(false);
  });
});
