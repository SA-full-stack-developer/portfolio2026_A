import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createMockGsapService, createMockPlatformService } from '@core/mocks/ai.service';
import { GsapService, PlatformService } from '@shared-libs/services';

import { provideTranslateService } from '@ngx-translate/core';
import { AboutMeComponent } from './about-me';

describe('AboutMeComponent', () => {
  let mockPlatformService: ReturnType<typeof createMockPlatformService>;
  let mockGsapService: ReturnType<typeof createMockGsapService>;
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    mockPlatformService = createMockPlatformService(true);
    mockGsapService = createMockGsapService();

    await TestBed.configureTestingModule({
      imports: [AboutMeComponent],
      providers: [
        { provide: PlatformService, useValue: mockPlatformService },
        { provide: GsapService, useValue: mockGsapService },
          provideTranslateService({})
    ],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title from translate pipe', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');
    expect(title).toBeTruthy();
  });

  it('should have a defined profile section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const profileSection = compiled.querySelector('.about-me');
    expect(profileSection).not.toBeNull();
  });

  it('should not run GSAP animation on non-browser platform', async () => {
    mockPlatformService.isBrowser = false;
    mockGsapService.gsap.from.mockClear();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(mockGsapService.gsap.from).not.toHaveBeenCalled();
  });
});
