import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { LabDetailComponent } from './lab-detail';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<any> {
    return of({});
  }
}

describe('LabDetailComponent', () => {
  let component: LabDetailComponent;
  let fixture: ComponentFixture<LabDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LabDetailComponent
      ],
        providers: [provideTranslateService({
                      loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
                    })]
    }).compileComponents();

    fixture = TestBed.createComponent(LabDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
