import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { PlatformService } from './platform.service';

describe('PlatformService', () => {
  let service: PlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(PlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should detect platform correctly', () => {
    if (service.isBrowser) {
      expect(service.isServer).toBe(false);
    } else if (service.isServer) {
      expect(service.isBrowser).toBe(false);
    } else {
      fail('Platform is neither browser nor server');
    }
  });

  it('should return boolean values for isBrowser and isServer', () => {
    expect(typeof service.isBrowser).toBe('boolean');
    expect(typeof service.isServer).toBe('boolean');
  });
});
