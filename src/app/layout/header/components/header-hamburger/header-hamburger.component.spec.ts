import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
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

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(HeaderHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    const mockGsapService = {
      gsap: {
        fromTo: jest.fn((target, from, to) => {
          if (to.onComplete) {
            to.onComplete();
          }
          return { kill: jest.fn() };
        }),
      },
    };

    const mockPlatformService = {
      isBrowser: true,
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

  // it('should not open drawer on non-browser platforms', async () => {
  //   jest.spyOn(TestBed.inject(PlatformService), 'isBrowser', 'get').mockReturnValue(false);
  //   await createComponent();
  //   component.open();
  //   expect(component.isOpen()).toBeFalsy();
  // });

  // it('should not close drawer on non-browser platforms', async () => {
  //   await createComponent();
  //   component.open();
  //   jest.spyOn(TestBed.inject(PlatformService), 'isBrowser', 'get').mockReturnValue(false);
  //   component.close();
  //   expect(component.isOpen()).toBeTruthy(); // Should remain true since close does nothing
  // });

  it('should apply scrollbar compensation when opening drawer', async () => {
    await createComponent();
    Object.defineProperty(window, 'innerWidth', { value: 1200, writable: true });
    Object.defineProperty(document.documentElement, 'clientWidth', { value: 1180, writable: true });
    component.open();
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.paddingRight).toBe('20px');
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
});
