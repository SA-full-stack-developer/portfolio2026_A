import { TestBed } from '@angular/core/testing';

import { Component, provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FeatureFlagService } from '@core/services/feature-flag.service';
import { FeatureFlagDirective } from './feature-flag.directive';

@Component({
  standalone: true,
  imports: [FeatureFlagDirective],
  template: `<div *appFeatureFlag="'SKILLS'">Skills visible</div>`,
})
class TestPublicComponent {}

@Component({
  standalone: true,
  imports: [FeatureFlagDirective],
  template: `<div *appFeatureFlag="'EXPERIMENTS'">Admin only</div>`,
})
class TestAdminComponent {}

describe('FeatureFlagDirective', () => {
  let featureFlagService: FeatureFlagService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    featureFlagService = TestBed.inject(FeatureFlagService);
  });

  it('should render public feature', () => {
    const fixture = TestBed.createComponent(TestPublicComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('div'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.textContent).toBe('Skills visible');
  });

  it('should not render admin feature when not admin', () => {
    const fixture = TestBed.createComponent(TestAdminComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('div'));
    expect(el).toBeNull();
  });

  it('should render admin feature when admin mode enabled', () => {
    featureFlagService.enableAdminMode('DEV_ADMIN_2026');
    const fixture = TestBed.createComponent(TestAdminComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('div'));
    expect(el).toBeTruthy();
  });
});
