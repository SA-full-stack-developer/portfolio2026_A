import { provideZonelessChangeDetection, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslationObject, provideTranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { GsapService } from '@core/services/gsap.service';
import { StatsService } from '@core/services/stats.service';
import { PortfolioComponent } from './portfolio.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({} as TranslationObject);
  }
}

class MockGsapService {
  gsap = {
    set: jest.fn(),
    to: jest.fn().mockReturnValue({ scrollTrigger: null }),
    from: jest.fn().mockReturnValue({ scrollTrigger: null }),
    fromTo: jest.fn().mockReturnValue({ scrollTrigger: null }),
  };
  init = jest.fn();
}

const mockStatsService = {
  stats: signal([]),
  loadStats: jest.fn(),
  refresh: jest.fn(),
};

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    TestBed.configureTestingModule({
      imports: [PortfolioComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
        { provide: GsapService, useClass: MockGsapService },
        { provide: StatsService, useValue: mockStatsService },
      ],
    });
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('should have ID_EXPERIENCE property equal to imported constant', async () => {
    await createComponent();
    expect(component.ID_EXPERIENCE).toBe('experience');
  });
});
