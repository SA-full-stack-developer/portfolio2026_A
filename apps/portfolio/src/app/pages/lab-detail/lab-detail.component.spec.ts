import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabDetailComponent } from './lab-detail.component';

describe('LabDetailComponent', () => {
  let component: LabDetailComponent;
  let fixture: ComponentFixture<LabDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
