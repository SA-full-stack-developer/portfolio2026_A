import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Skill } from '@core/models/skill.model';
import { SkillCardComponent } from './skill-card.component';

// Mock del loader de traducciones
class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      SKILLS: {
        LEVELS: {
          EXPERT: 'Experto',
          INTERMEDIATE: 'Intermedio',
          BEGINNER: 'Básico',
        },
        YEARS_ONE: '{{count}} año de experiencia',
        YEARS_OTHER: '{{count}} años de experiencia',
      },
    } as TranslationObject);
  }
}

// Mocks de skills
const expertSkill: Skill = {
  id: '1',
  name: 'Angular',
  level: 90,
  category: 'frontend',
  icon: 'angular',
  highlighted: true,
  yearsOfExperience: 5,
};

const intermediateSkill: Skill = {
  id: '2',
  name: 'NestJS',
  level: 65,
  category: 'backend',
  icon: 'nestjs',
  highlighted: false,
  yearsOfExperience: 2,
};

const beginnerSkill: Skill = {
  id: '3',
  name: 'Flutter',
  level: 30,
  category: 'mobile',
  icon: 'flutter',
  highlighted: false,
  yearsOfExperience: 1,
};

describe('SkillCardComponent', () => {
  let fixture: ComponentFixture<SkillCardComponent>;
  let component: SkillCardComponent;

  // Helper para crear el componente con una skill concreta
  function createComponent(skill: Skill): void {
    fixture = TestBed.createComponent(SkillCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('skill', skill);
    fixture.detectChanges();
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SkillCardComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
    });

    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  it('should create', () => {
    createComponent(expertSkill);
    expect(component).toBeTruthy();
  });

  // Renderizado de datos
  it('should render skill name', () => {
    createComponent(expertSkill);
    const el = fixture.debugElement.query(By.css('.skill-card__name'));
    expect(el.nativeElement.textContent.trim()).toBe('Angular');
  });

  it('should render skill level percentage', () => {
    createComponent(expertSkill);
    const el = fixture.debugElement.query(By.css('.skill-card__percent'));
    expect(el.nativeElement.textContent.trim()).toBe('90%');
  });

  // CSS classes por nivel
  it('should apply expert class when level >= 80', () => {
    createComponent(expertSkill);
    const card = fixture.debugElement.query(By.css('.skill-card'));
    expect(card.classes['skill-card--expert']).toBe(true);
  });

  it('should apply intermediate class when level is between 50 and 79', () => {
    createComponent(intermediateSkill);
    const card = fixture.debugElement.query(By.css('.skill-card'));
    expect(card.classes['skill-card--intermediate']).toBe(true);
  });

  it('should apply beginner class when level is below 50', () => {
    createComponent(beginnerSkill);
    const card = fixture.debugElement.query(By.css('.skill-card'));
    expect(card.classes['skill-card--beginner']).toBe(true);
  });

  // Badge destacado
  it('should show badge when skill is highlighted', () => {
    createComponent(expertSkill); // highlighted: true
    const badge = fixture.debugElement.query(By.css('.skill-card__badge'));
    expect(badge).toBeTruthy();
  });

  it('should not show badge when skill is not highlighted', () => {
    createComponent(intermediateSkill); // highlighted: false
    const badge = fixture.debugElement.query(By.css('.skill-card__badge'));
    expect(badge).toBeNull();
  });

  it('should return expert key for level >= 80', () => {
    createComponent(expertSkill);
    expect(component.skillLevelKey()).toBe('SKILLS.LEVELS.EXPERT');
  });

  it('should return intermediate key for level between 50 and 79', () => {
    createComponent(intermediateSkill);
    expect(component.skillLevelKey()).toBe('SKILLS.LEVELS.INTERMEDIATE');
  });

  it('should return beginner key for level < 50', () => {
    createComponent(beginnerSkill);
    expect(component.skillLevelKey()).toBe('SKILLS.LEVELS.BEGINNER');
  });

  it('should return singular key when yearsOfExperience is 1', () => {
    createComponent(beginnerSkill);
    expect(component.tooltipKey()).toBe('SKILLS.YEARS_ONE');
  });

  it('should return plural key when yearsOfExperience > 1', () => {
    createComponent(expertSkill);
    expect(component.tooltipKey()).toBe('SKILLS.YEARS_OTHER');
  });

  it('should return correct tooltip params', () => {
    createComponent(expertSkill);
    expect(component.tooltipParams()).toEqual({ count: 5 });
  });

  // isVisible signal
  it('should set isVisible to false before 50ms', () => {
    createComponent(expertSkill);
    expect(component.isVisible()).toBe(false);
  });

  it('should set isVisible to true after 50ms', async () => {
    jest.useFakeTimers();
    createComponent(expertSkill);
    expect(component.isVisible()).toBe(false);
    jest.advanceTimersByTime(50);
    expect(component.isVisible()).toBe(true);
    jest.useRealTimers();
  });
});
