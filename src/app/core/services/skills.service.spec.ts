import { Skill, SkillsService } from './skills.service';

import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

const mockSkills: Skill[] = [
  { id: '1', name: 'Angular', level: 90, category: 'frontend', highlighted: true },
  { id: '2', name: 'NestJS', level: 70, category: 'backend', highlighted: false },
  { id: '3', name: 'SCSS', level: 85, category: 'frontend', highlighted: false },
];

describe('SkillsService', () => {
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(SkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start with empty skills', () => {
    expect(service.skills()).toHaveLength(0);
    expect(service.totalSkills()).toBe(0);
  });

  it('should set skills correctly', () => {
    service.setSkills(mockSkills);
    expect(service.skills()).toHaveLength(3);
    expect(service.totalSkills()).toBe(3);
  });

  it('should filter frontend skills via computed', () => {
    service.setSkills(mockSkills);
    const frontend = service.frontendSkills();
    expect(frontend).toHaveLength(2);
    expect(frontend.every((s) => s.category === 'frontend')).toBe(true);
  });

  it('should toggle highlight correctly', () => {
    service.setSkills(mockSkills);

    // Angular está highlighted=true, lo desmarcamos
    service.toggleHighlight('1');
    expect(service.skills().find((s) => s.id === '1')?.highlighted).toBe(false);

    // Lo volvemos a marcar
    service.toggleHighlight('1');
    expect(service.skills().find((s) => s.id === '1')?.highlighted).toBe(true);
  });

  it('should not mutate original array on toggleHighlight', () => {
    service.setSkills(mockSkills);
    const before = service.skills();
    service.toggleHighlight('2');
    const after = service.skills();
    // Inmutabilidad: debe ser un nuevo array
    expect(before).not.toBe(after);
  });
});
