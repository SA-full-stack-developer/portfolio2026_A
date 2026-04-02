import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHamburgerComponent } from './header-hamburger.component';

describe('HeaderHamburgerComponent', () => {
  let component: HeaderHamburgerComponent;
  let fixture: ComponentFixture<HeaderHamburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderHamburgerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderHamburgerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
