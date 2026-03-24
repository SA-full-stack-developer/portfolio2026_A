import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideTranslateService, TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { HeroStatCounterComponent } from './hero-stat-counter.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({} as TranslationObject);
  }
}

describe('HeroStatCounterComponent', () => {
  let component: HeroStatCounterComponent;
  let fixture: ComponentFixture<HeroStatCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroStatCounterComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroStatCounterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
