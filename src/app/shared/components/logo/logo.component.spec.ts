import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderLogoComponent } from './logo.component';

describe('HeaderLogoComponent', () => {
  let component: HeaderLogoComponent;
  let fixture: ComponentFixture<HeaderLogoComponent>;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(HeaderLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HeaderLogoComponent, RouterTestingModule],
      providers: [provideZonelessChangeDetection()],
    });
  });

  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  it('should render logo link', async () => {
    await createComponent();
    const link = fixture.debugElement.query(By.css('a'));
    expect(link).toBeTruthy();
    expect(link.attributes['routerLink']).toBe('/');
    expect(link.nativeElement.textContent).toContain('CS');
  });
});
