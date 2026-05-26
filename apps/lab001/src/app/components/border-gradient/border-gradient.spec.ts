import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorderGradient } from './border-gradient';

describe('BorderGradient', () => {
  let component: BorderGradient;
  let fixture: ComponentFixture<BorderGradient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorderGradient],
    }).compileComponents();

    fixture = TestBed.createComponent(BorderGradient);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
