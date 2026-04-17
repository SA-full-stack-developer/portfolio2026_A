import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { ScrollProgressComponent } from './scroll-progress.component';

describe('ScrollProgressComponent', () => {
  let component: ScrollProgressComponent;
  let fixture: ComponentFixture<ScrollProgressComponent>;

  const mockGsap = {
    to: jest.fn().mockReturnValue({
      scrollTrigger: {
        refresh: jest.fn(),
        kill: jest.fn(),
      },
    }),
  };

  const mockGsapService = {
    gsap: mockGsap,
  };

  const mockPlatformService = {
    isBrowser: true,
  };

  const mockResizeObserver = jest.fn().mockImplementation((callback: any) => {
    const instance = {
      observe: jest.fn(),
      disconnect: jest.fn(),
      trigger: (entries: any[]) => callback(entries, instance),
    };

    return instance;
  });

  beforeEach(async () => {
    mockPlatformService.isBrowser = true;
    (global as any).ResizeObserver = mockResizeObserver;

    await TestBed.configureTestingModule({
      imports: [ScrollProgressComponent],
      providers: [
        { provide: GsapService, useValue: mockGsapService },
        { provide: PlatformService, useValue: mockPlatformService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollProgressComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize GSAP animation on AfterViewInit if in browser', () => {
    component.ngAfterViewInit();

    expect(mockGsap.to).toHaveBeenCalledWith(
      '.scroll-progress__bar',
      expect.objectContaining({
        width: '100%',
        scrollTrigger: expect.objectContaining({
          end: 'max',
          scrub: 0.3,
        }),
      }),
    );
  });

  it('should NOT initialize GSAP if not in browser', () => {
    (component as any).platformService.isBrowser = false;
    jest.clearAllMocks();

    component.ngAfterViewInit();

    expect(mockGsap.to).not.toHaveBeenCalled();
  });

  it('should disconnect resizeObserver and kill scrollTrigger on destroy', () => {
    component.ngAfterViewInit();

    const resizeObserver = (component as any).resizeObserver as { disconnect: jest.Mock };
    const disconnectSpy = jest.spyOn(resizeObserver, 'disconnect');
    const killSpy = jest.spyOn((component as any).scrollTriggerInstance, 'kill');

    component.ngOnDestroy();

    expect(resizeObserver.observe).toHaveBeenCalledWith(document.documentElement);
    expect(disconnectSpy).toHaveBeenCalled();
    expect(killSpy).toHaveBeenCalled();
  });

  it('should call refresh on scrollTrigger when resizeObserver triggers', () => {
    component.ngAfterViewInit();

    const refreshSpy = jest.spyOn((component as any).scrollTriggerInstance, 'refresh');
    const resizeObserver = (component as any).resizeObserver as {
      trigger: (entries: any[]) => void;
    };

    expect(resizeObserver).toBeDefined();
    resizeObserver.trigger([{ target: document.documentElement }]);
    expect(refreshSpy).toHaveBeenCalled();
  });
});
