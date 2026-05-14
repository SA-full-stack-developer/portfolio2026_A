import { TestBed } from '@angular/core/testing';
import { SessionService } from './session.service';

describe('SessionService', () => {
  let service: SessionService;

  beforeEach(() => {
    sessionStorage.clear();

    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionService);
  });

  afterEach(() => {
    sessionStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initial state', () => {
    it('should initialize isAdmin as false when sessionStorage is empty', () => {
      expect(service.isAdmin()).toBe(false);
    });

    it('should initialize isAdmin as true when sessionStorage has admin_session set', () => {
      sessionStorage.setItem('admin_session', 'true');

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({});
      const freshService = TestBed.inject(SessionService);

      expect(freshService.isAdmin()).toBe(true);
    });

    it('should initialize isAdmin as false when admin_session is not "true"', () => {
      sessionStorage.setItem('admin_session', 'false');

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({});
      const freshService = TestBed.inject(SessionService);

      expect(freshService.isAdmin()).toBe(false);
    });
  });

  describe('setAdmin', () => {
    it('should set isAdmin signal to true', () => {
      service.setAdmin(true);

      expect(service.isAdmin()).toBe(true);
    });

    it('should set isAdmin signal to false', () => {
      service.setAdmin(true);
      service.setAdmin(false);

      expect(service.isAdmin()).toBe(false);
    });

    it('should persist true in sessionStorage', () => {
      service.setAdmin(true);

      expect(sessionStorage.getItem('admin_session')).toBe('true');
    });

    it('should remove key from sessionStorage when set to false', () => {
      service.setAdmin(true);
      service.setAdmin(false);

      expect(sessionStorage.getItem('admin_session')).toBeNull();
    });

    it('should not add key to sessionStorage when setting false on a clean state', () => {
      service.setAdmin(false);

      expect(sessionStorage.getItem('admin_session')).toBeNull();
    });
  });

  describe('isAdmin readonly signal', () => {
    it('should expose isAdmin as a readonly signal', () => {
      expect(typeof service.isAdmin).toBe('function');
      expect((service.isAdmin as any).set).toBeUndefined();
    });
  });
});
