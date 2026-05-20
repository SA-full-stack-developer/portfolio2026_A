import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { SkillBadgeComponent } from './skill-badge.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SkillBadgeComponent', () => {
  let fixture: ComponentFixture<SkillBadgeComponent>;

  function createComponent(name: string, level: number) {
    fixture = TestBed.createComponent(SkillBadgeComponent);
    fixture.componentRef.setInput('name', name);
    fixture.componentRef.setInput('level', level);
    fixture.detectChanges();
    return fixture;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkillBadgeComponent],
      providers: [provideZonelessChangeDetection()],
    });
  });

  it('should render skill name', () => {
    createComponent('Angular', 90);
    const el = fixture.debugElement.query(By.css('.skill-name'));
    expect(el.nativeElement.textContent).toBe('Angular');
  });

  it('should render skill level', () => {
    createComponent('Angular', 90);
    const el = fixture.debugElement.query(By.css('.skill-level'));
    expect(el.nativeElement.textContent).toBe('90%');
  });

  it('should apply expert class when level >= 80', () => {
    createComponent('Angular', 90);
    const badge = fixture.debugElement.query(By.css('.skill-badge'));
    expect(badge.classes['skill-badge--expert']).toBe(true);
  });

  it('should apply intermediate class when level is between 50 and 79', () => {
    createComponent('CSS', 65);
    const badge = fixture.debugElement.query(By.css('.skill-badge'));
    expect(badge.classes['skill-badge--intermediate']).toBe(true);
  });

  it('should apply beginner class when level < 50', () => {
    createComponent('Rust', 20);
    const badge = fixture.debugElement.query(By.css('.skill-badge'));
    expect(badge.classes['skill-badge--beginner']).toBe(true);
  });
});
