import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Company } from '@core/models/company.model';
import { Project } from '@core/models/project.model';
import { Skill } from '@core/models/skill.model';
import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()],
    });
    service = TestBed.inject(ExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the right company', () => {
    const company: Company | undefined = service.getCompany('1');
    expect(company).not.toBe(undefined);
  });

  it('should return undefined', () => {
    const company: Company | undefined = service.getCompany('nonexistent');
    expect(company).toBe(undefined);
  });

  it('should return full projects array', () => {
    const projects: Project[] = service.getProjects(['1']);
    expect(projects.length).toBe(1);
  });

  it('should return empty projects array', () => {
    const projects: Project[] = service.getProjects([]);
    expect(projects.length).toBe(0);
  });

  it('should return empty projects array', () => {
    const projects: Project[] = service.getProjects(['nonexistent']);
    expect(projects.length).toBe(0);
  });

  it('should return full projects array', () => {
    const projects: Project[] = service.getProjects(['1', '2']);
    expect(projects.length).toBe(2);
  });

  it('should return middle projects array', () => {
    const projects: Project[] = service.getProjects(['1', 'nonexistent']);
    expect(projects.length).toBe(1);
  });

  it('should return full skills array', () => {
    const skills: Skill[] = service.getSkillsByName(['Angular']);
    expect(skills.length).toBe(1);
  });

  it('should return empty skills array', () => {
    const skills: Skill[] = service.getSkillsByName([]);
    expect(skills.length).toBe(0);
  });

  it('should return empty skills array', () => {
    const skills: Skill[] = service.getSkillsByName(['nonexistent']);
    expect(skills.length).toBe(0);
  });

  it('should return full skills array', () => {
    const skills: Skill[] = service.getSkillsByName(['Angular', 'TypeScript']);
    expect(skills.length).toBe(2);
  });

  it('should return middle skills array', () => {
    const skills: Skill[] = service.getSkillsByName(['Angular', 'nonexistent']);
    expect(skills.length).toBe(1);
  });

  it('should return resolved experiences with company, projects and skills', () => {
    const resolvedExperiences = service.resolvedExperiences();
    expect(resolvedExperiences.length).toBeGreaterThan(0);
    const exp = resolvedExperiences[0];
    expect(exp.company).not.toBe(undefined);
    expect(exp.projects).not.toBe(undefined);
    expect(exp.skills).not.toBe(undefined);
  });
});
