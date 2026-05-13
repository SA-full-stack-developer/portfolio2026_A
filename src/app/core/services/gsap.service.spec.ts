import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GsapService } from './gsap.service';
import { PlatformService } from './platform.service';

describe('GsapService', () => {
  let service: GsapService;
  let platformServiceMock: { isBrowser: boolean; isServer: boolean };

  beforeEach(() => {
    platformServiceMock = {
      isBrowser: true,
      isServer: false,
    };

    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        { provide: PlatformService, useValue: platformServiceMock },
      ],
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
    platformServiceMock.isBrowser = false;
    service.init();
    expect(service['initialized']).toBe(false);
  });

  it('should throw when accessing gsap on non-browser platform', () => {
    platformServiceMock.isBrowser = false;
    expect(() => service.gsap).toThrow('GSAP is only available in the browser');
  });

  it('should throw when accessing scrollTrigger on non-browser platform', () => {
    platformServiceMock.isBrowser = false;
    expect(() => service.scrollTrigger).toThrow('ScrollTrigger is only available in the browser');
  });
});
