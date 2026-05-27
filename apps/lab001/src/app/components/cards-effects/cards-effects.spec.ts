import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardEffects } from './cards-effects';

describe('CardEffects', () => {
  let component: CardEffects;
  let fixture: ComponentFixture<CardEffects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEffects],
    }).compileComponents();

    fixture = TestBed.createComponent(CardEffects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
