import * as navUtils from '@core/utils/navigation.utils';

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
import { PlatformService } from '@core/services/platform.service';
import { HeaderNavComponent } from './header-nav.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      NAV: {
        STACK: 'Habilidades',
        EXPERIENCE: 'Experiencia',
        PROJECTS: 'Proyectos',
      },
    } as TranslationObject);
  }
}

describe('HeaderNavComponent', () => {
  let component: HeaderNavComponent;
  let fixture: ComponentFixture<HeaderNavComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(HeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    const mockPlatformService = {
      isBrowser: true,
    };

    TestBed.configureTestingModule({
      imports: [HeaderNavComponent, RouterTestingModule],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
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

  it('should have ID constants defined', async () => {
    await createComponent();
    expect(component.ID_SKILLS).toBeDefined();
    expect(component.ID_EXPERIENCE).toBeDefined();
  });

  it('should have vertical input initialized to false', async () => {
    await createComponent();
    expect(component.vertical()).toBeFalsy();
  });

  it('should emit linkClicked event when scrollTo is called', async () => {
    await createComponent();
    jest.spyOn(component.linkClicked, 'emit');
    component.scrollTo(component.ID_SKILLS);
    expect(component.linkClicked.emit).toHaveBeenCalled();
  });

  it('should not attempt to scroll if not in browser environment', async () => {
    await createComponent();
    const platformService = TestBed.inject(PlatformService) as any;
    platformService.isBrowser = false;
    jest.spyOn(document, 'getElementById');
    component.scrollTo(component.ID_SKILLS);
    expect(document.getElementById).not.toHaveBeenCalled();
  });

  it('should navigate to home and scroll when not on home page', async () => {
    await createComponent();
    const platformService = TestBed.inject(PlatformService) as any;
    platformService.isBrowser = true;
    jest.spyOn(component['router'], 'url', 'get').mockReturnValue('/other');
    jest.spyOn(component['router'], 'navigate').mockResolvedValue(true);
    const mockElement = document.createElement('div');
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);
    const navScrollSpy = jest.spyOn(navUtils, 'navScrollTo').mockImplementation(() => {});
    jest.spyOn(component.linkClicked, 'emit');

    jest.useFakeTimers();
    component.scrollTo(component.ID_SKILLS);
    await Promise.resolve();
    jest.advanceTimersByTime(100);

    expect(component['router'].navigate).toHaveBeenCalledWith(['/']);
    expect(navScrollSpy).toHaveBeenCalledWith(mockElement);
    expect(component.linkClicked.emit).toHaveBeenCalled();
    jest.useRealTimers();
  });

  it('should scroll to element if already on home page', async () => {
    await createComponent();
    const platformService = TestBed.inject(PlatformService) as any;
    platformService.isBrowser = true;
    jest.spyOn(component['router'], 'url', 'get').mockReturnValue('/');
    const mockElement = document.createElement('div');
    jest.spyOn(document, 'getElementById').mockReturnValue(mockElement);
    const navScrollSpy = jest.spyOn(navUtils, 'navScrollTo').mockImplementation(() => {});
    jest.spyOn(component.linkClicked, 'emit');

    component.scrollTo(component.ID_SKILLS);

    expect(navScrollSpy).toHaveBeenCalledWith(mockElement);
    expect(component.linkClicked.emit).toHaveBeenCalled();
  });

  it('should use translations from TranslateService', async () => {
    await createComponent();
    const translate = TestBed.inject(TranslateService);
    expect(translate.instant('NAV.STACK')).toBe('Habilidades');
    expect(translate.instant('NAV.EXPERIENCE')).toBe('Experiencia');
    expect(translate.instant('NAV.PROJECTS')).toBe('Proyectos');
  });

  it('should have correct ID constants', async () => {
    await createComponent();
    expect(component.ID_SKILLS).toBe('skills');
    expect(component.ID_EXPERIENCE).toBe('experience');
  });
});
