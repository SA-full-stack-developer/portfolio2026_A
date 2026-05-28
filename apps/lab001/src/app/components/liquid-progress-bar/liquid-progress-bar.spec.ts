import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiquidProgressBar } from './liquid-progress-bar';

describe('LiquidProgressBar', () => {
  let component: LiquidProgressBar;
  let fixture: ComponentFixture<LiquidProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiquidProgressBar],
    }).compileComponents();

    fixture = TestBed.createComponent(LiquidProgressBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
