import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslationObject, provideTranslateService } from '@ngx-translate/core';

import { provideZonelessChangeDetection } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StatCounterComponent } from './stat-counter.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({} as TranslationObject);
  }
}

describe('StatCounterComponent', () => {
  let component: StatCounterComponent;
  let fixture: ComponentFixture<StatCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatCounterComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StatCounterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
