import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroStatCounterComponent } from './hero-stat-counter.component';

describe('HeroStatCounterComponent', () => {
  let component: HeroStatCounterComponent;
  let fixture: ComponentFixture<HeroStatCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroStatCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroStatCounterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
