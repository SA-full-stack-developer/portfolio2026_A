import { provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { GsapService, PlatformService } from '@shared-libs/services';
import { Observable, of } from 'rxjs';

import { StatsService } from '@core/services/stats';
import { Stat } from '@portfolio/shared/models';
import { HeroStatCounterComponent } from './hero-stat-counter';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      NAV: {
        CONTACT: 'Contáctame',
      },
    } as TranslationObject);
  }
}

describe('HeroStatCounterComponent', () => {
  let component: HeroStatCounterComponent;
  let fixture: ComponentFixture<HeroStatCounterComponent>;
  let scrollKill: jest.Mock;
  let gsapFrom: jest.Mock;

  const mockStatsService = {
    stats: signal<Stat[]>([]),
    isLoading: signal(false),
    error: signal<string | null>(null),
  };

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(HeroStatCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    scrollKill = jest.fn();
    gsapFrom = jest.fn((_cards: unknown, opts: { scrollTrigger?: { onEnter?: () => void } }) => {
      opts.scrollTrigger?.onEnter?.();
      return { scrollTrigger: { kill: scrollKill } };
    });

    TestBed.configureTestingModule({
      imports: [HeroStatCounterComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
        { provide: StatsService, useValue: mockStatsService },
        { provide: PlatformService, useValue: { isBrowser: true } },
        {
          provide: GsapService,
          useValue: {
            gsap: {
              set: jest.fn(),
              to: jest.fn().mockReturnValue({ kill: jest.fn() }),
              from: gsapFrom,
              fromTo: jest.fn().mockReturnValue({ scrollTrigger: null }),
            },
            init: jest.fn(),
          },
        },
      ],
    });

    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  describe('when not in browser', () => {
    beforeEach(async () => {
      TestBed.resetTestingModule();
      scrollKill = jest.fn();
      gsapFrom = jest.fn(() => ({ scrollTrigger: { kill: scrollKill } }));

      TestBed.configureTestingModule({
        imports: [HeroStatCounterComponent],
        providers: [
          provideZonelessChangeDetection(),
          provideTranslateService({
            loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
          }),
          { provide: StatsService, useValue: mockStatsService },
          { provide: PlatformService, useValue: { isBrowser: false } },
          {
            provide: GsapService,
            useValue: {
              gsap: {
                set: jest.fn(),
                to: jest.fn().mockReturnValue({ kill: jest.fn() }),
                from: gsapFrom,
                fromTo: jest.fn().mockReturnValue({ scrollTrigger: null }),
              },
              init: jest.fn(),
            },
          },
        ],
      });

      const translate = TestBed.inject(TranslateService);
      await translate.use('es').toPromise();
    });

    it('should not run GSAP animation after view init', async () => {
      await createComponent();
      expect(gsapFrom).not.toHaveBeenCalled();
    });
  });
});
