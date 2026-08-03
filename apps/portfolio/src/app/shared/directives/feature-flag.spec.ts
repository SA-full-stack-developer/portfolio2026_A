import { Component, provideZonelessChangeDetection } from '@angular/core';

import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FeatureFlagService } from '@core/services/feature-flag';
import { SessionService } from '@core/services/session';
import { FeatureFlagDirective } from './feature-flag';

@Component({
  standalone: true,
  imports: [FeatureFlagDirective],
  template: `<div *appFeatureFlag="SKILLS">Skills visible</div>`,
})
class TestPublicComponent {}

@Component({
  standalone: true,
  imports: [FeatureFlagDirective],
  template: `<div *appFeatureFlag="LAB">Admin only</div>`,
})
class TestAdminComponent {}

describe('FeatureFlagDirective', () => {
  let featureFlagService: FeatureFlagService;
  let sessionService: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    featureFlagService = TestBed.inject(FeatureFlagService);
    sessionService = TestBed.inject(SessionService);
    sessionService.setAdmin(false); // estado limpio
  });

  afterEach(() => {
    sessionStorage.clear(); // limpiar entre tests
  });

  it('should not render admin feature when not admin', () => {
    const fixture = TestBed.createComponent(TestAdminComponent);
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('div'));
    expect(el).toBeNull();
  });
});
