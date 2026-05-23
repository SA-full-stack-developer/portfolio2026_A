jest.mock('@angular/core', () => {
  const actual = jest.requireActual('@angular/core');
  return {
    ...actual,
    afterNextRender: jest.fn((cb: () => void) => {
      Promise.resolve().then(() => cb());
    }),
  };
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { HeaderHamburgerComponent } from './header-hamburger.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      NAV: {
        CONTACT: 'Contáctame',
      },
    } as TranslationObject);
  }
}

describe('HeaderHamburgerComponent', () => {
  let component: HeaderHamburgerComponent;
  let fixture: ComponentFixture<HeaderHamburgerComponent>;
  let mockPlatformService: { isBrowser: boolean };
  let mockGsapService: { gsap: { fromTo: jest.Mock } };

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(HeaderHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    mockPlatformService = { isBrowser: true };
    mockGsapService = {
      gsap: {
        fromTo: jest.fn((target, from, to) => {
          if (to.onComplete) {
            to.onComplete();
          }
          return { kill: jest.fn() };
        }),
      },
    };

    TestBed.configureTestingModule({
      imports: [HeaderHamburgerComponent, RouterTestingModule],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
        { provide: GsapService, useValue: mockGsapService },
        { provide: PlatformService, useValue: mockPlatformService },
      ],
    });

    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('should have isOpen signal initialized to false', async () => {
    await createComponent();
    expect(component.isOpen()).toBeFalsy();
  });

  it('should set isOpen to true when open() is called', async () => {
    await createComponent();
    component.open();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(component.isOpen()).toBeTruthy();
  });

  it('should set isOpen to false when close() is called', async () => {
    await createComponent();
    component.open();
    fixture.detectChanges();
    component.close();
    fixture.detectChanges();
    expect(component.isOpen()).toBeFalsy();
  });

  it('should toggle isOpen when toggleDrawer() is called', async () => {
    await createComponent();
    component.toggleDrawer();
    fixture.detectChanges();
    expect(component.isOpen()).toBeTruthy();
    component.toggleDrawer();
    fixture.detectChanges();
    expect(component.isOpen()).toBeFalsy();
  });

  it('should prevent event propagation when stopPropagation() is called', async () => {
    await createComponent();
    const event = new Event('click');
    jest.spyOn(event, 'stopPropagation');
    component.stopPropagation(event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should apply scrollbar compensation when opening drawer', async () => {
    await createComponent();
    Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
    Object.defineProperty(document.documentElement, 'clientWidth', { value: 1180, writable: true });
    component.open();
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toBe('var(--scrollbar-width)');
  });

  it('should remove scrollbar compensation when closing drawer', async () => {
    await createComponent();
    Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
    Object.defineProperty(document.documentElement, 'clientWidth', { value: 1180, writable: true });
    component.open();
    fixture.detectChanges();
    expect(document.body.style.overflow).toBe('hidden');
    component.close();
    fixture.detectChanges();
    expect(document.body.style.overflow).toBe('');
    expect(document.body.style.paddingRight).toBe('');
  });

  it('should have correct translation for contact button', async () => {
    await createComponent();
    const translate = TestBed.inject(TranslateService);
    const translation = translate.instant('NAV.CONTACT');
    expect(translation).toBe('Contáctame');
  });

  it('should not open or call GSAP when not in browser', async () => {
    mockPlatformService.isBrowser = false;
    await createComponent();

    component.open();

    expect(document.body.style.overflow).toBe('');
    expect(document.body.style.paddingRight).toBe('');
    expect(mockGsapService.gsap.fromTo).not.toHaveBeenCalled();
  });

  it('should not close or call GSAP when not in browser', async () => {
    mockPlatformService.isBrowser = false;
    await createComponent();

    component.close();

    expect(mockGsapService.gsap.fromTo).not.toHaveBeenCalled();
  });

  it('should safely handle missing drawer when opening', async () => {
    await createComponent();
    jest.spyOn(component['el'].nativeElement, 'querySelector').mockReturnValue(null);
    mockGsapService.gsap.fromTo.mockClear();

    component.open();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(mockGsapService.gsap.fromTo).not.toHaveBeenCalled();
  });

  it('should safely handle missing drawer when closing', async () => {
    await createComponent();
    jest.spyOn(component['el'].nativeElement, 'querySelector').mockReturnValue(null);
    mockGsapService.gsap.fromTo.mockClear();

    component.close();

    expect(mockGsapService.gsap.fromTo).not.toHaveBeenCalled();
  });

  it('should call gsap.fromTo when opening with drawer present', async () => {
    await createComponent();
    const drawer = document.createElement('div');
    drawer.classList.add('header-hamburger__drawer');
    component['el'].nativeElement.appendChild(drawer);

    component.open();
    await fixture.whenStable();

    expect(mockGsapService.gsap.fromTo).toHaveBeenCalledWith(
      drawer,
      { x: '100%', opacity: 0 },
      expect.objectContaining({ x: '0%', opacity: 1, duration: 0.4, ease: 'power2.out' }),
    );
  });
});
