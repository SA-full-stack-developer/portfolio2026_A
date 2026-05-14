import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FeatureFlagService } from './feature-flag.service';

describe('FeatureFlagService', () => {
  let service: FeatureFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(FeatureFlagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show public flags by default', () => {
    expect(service.isVisible('SKILLS')).toBe(true);
  });

  it('should hide hidden flags always', () => {
    expect(service.isVisible('PROJECTS')).toBe(false);
  });

  it('should hide admin flags when not admin', () => {
    expect(service.isVisible('EXPERIMENTS')).toBe(false);
  });

  it('should return false for unknown flag', () => {
    expect(service.isVisible('NONEXISTENT')).toBe(false);
  });
});
