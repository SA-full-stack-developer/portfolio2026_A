import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { Error404Component } from './error404.component';

describe('Error404Component', () => {
  let component: Error404Component;
  let fixture: ComponentFixture<Error404Component>;

  const mockRouter = {
    url: '/ruta-inexistente',
    navigate: jest.fn(),
  };

  const mockTimeline = {
    to: jest.fn().mockReturnThis(),
    call: jest.fn().mockImplementation((cb) => {
      cb();
      return mockTimeline;
    }),
  };

  const mockGsapService = {
    gsap: {
      timeline: jest.fn().mockReturnValue(mockTimeline),
    },
  };

  const mockPlatformService = {
    isBrowser: true,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Error404Component],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: GsapService, useValue: mockGsapService },
        { provide: PlatformService, useValue: mockPlatformService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the current failing route in the terminal', () => {
    expect(component.currentRoute).toBe('/ruta-inexistente');

    const debugElement = fixture.debugElement.query(By.css('.terminal__code'));
    expect(debugElement.nativeElement.textContent).toContain('/ruta-inexistente');
  });

  it('should trigger GSAP animation when fixSystem is called', () => {
    component.fixSystem();

    expect(mockGsapService.gsap.timeline).toHaveBeenCalled();
    expect(mockTimeline.to).toHaveBeenCalled();
  });

  it('should navigate to home after the animation completes', () => {
    component.fixSystem();

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should NOT start animation if platform is not browser', () => {
    (component as any).platformService.isBrowser = false;
    jest.clearAllMocks();

    component.fixSystem();

    expect(mockGsapService.gsap.timeline).not.toHaveBeenCalled();
  });

  it('should have the sudo button in the DOM', () => {
    const button = fixture.debugElement.query(By.css('.error-404__cta'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent).toContain('sudo fix --all');
  });
});
