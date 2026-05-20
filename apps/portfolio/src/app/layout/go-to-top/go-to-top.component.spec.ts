import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { PlatformService } from '@core/services/platform.service';
import { GoToTopComponent } from './go-to-top.component';

describe('GoToTopComponent', () => {
  let component: GoToTopComponent;
  let fixture: ComponentFixture<GoToTopComponent>;
  const mockPlatformService = { isBrowser: true };

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(GoToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    mockPlatformService.isBrowser = true;

    TestBed.configureTestingModule({
      imports: [GoToTopComponent],
      providers: [
        provideZonelessChangeDetection(),
        { provide: PlatformService, useValue: mockPlatformService },
      ],
    });
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('should scroll to top when scrollToTop is called', async () => {
    await createComponent();
    window.scrollTo = jest.fn();

    component.scrollToTop();

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should update visible signal when window scroll crosses threshold', async () => {
    await createComponent();
    Object.defineProperty(window, 'scrollY', { value: 400, configurable: true });

    window.dispatchEvent(new Event('scroll'));
    expect(component['visible']()).toBe(true);

    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true });
    window.dispatchEvent(new Event('scroll'));
    expect(component['visible']()).toBe(false);
  });

  it('should not subscribe to scroll events when not in browser', async () => {
    mockPlatformService.isBrowser = false;
    jest.spyOn(window, 'addEventListener');

    await createComponent();

    expect(window.addEventListener).not.toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should not call scrollTo when not in browser', async () => {
    await createComponent();
    component['platformService'].isBrowser = false;
    window.scrollTo = jest.fn();

    component.scrollToTop();

    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
