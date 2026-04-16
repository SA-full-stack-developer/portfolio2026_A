import { provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { StatsService } from '@core/services/stats.service';
import { HeroStatCounterComponent } from './hero-stat-counter.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      NAV: {
        CONTACT: 'Contáctame',
      },
    } as TranslationObject);
  }
}

const mockStatsService = {
  stats: signal([]),
  loadStats: jest.fn(),
  refresh: jest.fn(),
};

describe('HeroStatCounterComponent', () => {
  let component: HeroStatCounterComponent;
  let fixture: ComponentFixture<HeroStatCounterComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(HeroStatCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HeroStatCounterComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
        { provide: StatsService, useValue: mockStatsService },
      ],
    });

    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('should have statsVisible signal initialized to false', async () => {
    await createComponent();
    expect(component.statsVisible()).toBeFalsy();
  });

  it('should not animate stats on non-browser platforms', async () => {
    await createComponent();
    component['platformService'].isBrowser = false;
    const animateStatsSpy = jest.spyOn<any>(component, 'animateStats');
    component.ngAfterViewInit();
    expect(animateStatsSpy).not.toHaveBeenCalled();
  });
});
