import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HeroAvatarComponent } from './hero-avatar.component';

describe('HeroAvatarComponent', () => {
  let component: HeroAvatarComponent;
  let fixture: ComponentFixture<HeroAvatarComponent>;

  async function createComponent(avatarSrc: string, avatarAlt: string): Promise<void> {
    fixture = TestBed.createComponent(HeroAvatarComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('avatarSrc', avatarSrc);
    fixture.componentRef.setInput('avatarAlt', avatarAlt);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HeroAvatarComponent],
      providers: [provideZonelessChangeDetection()],
    });
  });

  it('should create', async () => {
    await createComponent('https://example.com/avatar.jpg', 'Avatar de prueba');
    expect(component).toBeTruthy();
  });

  it('should render avatar image with correct src and alt', async () => {
    const testSrc = 'https://example.com/avatar.jpg';
    const testAlt = 'Avatar de prueba';
    await createComponent(testSrc, testAlt);
    const avatarImg = fixture.debugElement.query(By.css('img'));
    expect(avatarImg).toBeTruthy();
    expect(avatarImg.nativeElement.src).toBe(testSrc);
    expect(avatarImg.nativeElement.alt).toBe(testAlt);
  });
});
