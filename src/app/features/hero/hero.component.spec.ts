import { provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslationObject, provideTranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { StatsService } from '@core/services/stats.service';
import { HeroComponent } from './hero.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({} as TranslationObject);
  }
}

const mockStatsService = {
  stats: signal([]),
  loadStats: jest.fn(),
  refresh: jest.fn(),
};

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HeroComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
        { provide: StatsService, useValue: mockStatsService },
      ],
    });
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });
});
