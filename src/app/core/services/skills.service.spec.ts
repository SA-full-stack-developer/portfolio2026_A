import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { SKILLS_DATA } from '@core/data/skills.data';
import { SkillsService } from './skills.service';

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

  it('should start with all skills from SKILLS_DATA', () => {
    expect(service.skills()).toHaveLength(SKILLS_DATA.length);
  });

  it('should start with default filter', () => {
    expect(service.filter().category).toBe('all');
    expect(service.filter().onlyHighlighted).toBe(false);
  });

  it('should start showing first page of skills when filter is default', () => {
    expect(service.filteredSkills()).toHaveLength(service.PAGE_SIZE);
  });

  it('should have allFilteredSkills equal to all skills on init', () => {
    expect(service.allFilteredSkills()).toHaveLength(SKILLS_DATA.length);
  });

  it('should return unique categories', () => {
    const categories = service.categories();
    const unique = new Set(categories);
    expect(categories.length).toBe(unique.size);
  });

  it('should include frontend in categories', () => {
    expect(service.categories()).toContain('frontend');
  });

  it('should return correct totalSkills', () => {
    expect(service.totalSkills()).toBe(SKILLS_DATA.length);
  });

  it('should return correct highlightedCount', () => {
    const expected = SKILLS_DATA.filter((s) => s.highlighted).length;
    expect(service.highlightedCount()).toBe(expected);
  });

  it('should filter by category', () => {
    service.setFilter({ category: 'frontend' });
    const filtered = service.filteredSkills();
    expect(filtered.every((s) => s.category === 'frontend')).toBe(true);
  });

  it('should filter by highlighted', () => {
    service.setFilter({ onlyHighlighted: true });
    const filtered = service.filteredSkills();
    expect(filtered.every((s) => s.highlighted)).toBe(true);
  });

  it('should filter by category and highlighted combined', () => {
    service.setFilter({ category: 'frontend', onlyHighlighted: true });
    const filtered = service.filteredSkills();
    expect(filtered.every((s) => s.category === 'frontend' && s.highlighted)).toBe(true);
  });

  it('should update only the provided filter property', () => {
    service.setFilter({ category: 'frontend' });
    service.setFilter({ onlyHighlighted: true });
    expect(service.filter().category).toBe('frontend');
    expect(service.filter().onlyHighlighted).toBe(true);
  });

  it('should reset filter to default', () => {
    service.setFilter({ category: 'frontend', onlyHighlighted: true });
    service.resetFilter();
    expect(service.filter().category).toBe('all');
    expect(service.filter().onlyHighlighted).toBe(false);
  });

  it('should show first page of skills after reset', () => {
    service.setFilter({ category: 'frontend' });
    service.resetFilter();
    expect(service.filteredSkills()).toHaveLength(service.PAGE_SIZE);
  });

  it('should toggle highlight on a skill', () => {
    const skill = SKILLS_DATA[0];
    const before = service.skills().find((s) => s.id === skill.id)!.highlighted;
    service.toggleHighlight(skill.id);
    const after = service.skills().find((s) => s.id === skill.id)!.highlighted;
    expect(after).toBe(!before);
  });

  it('should not mutate original array on toggleHighlight', () => {
    const before = service.skills();
    service.toggleHighlight(SKILLS_DATA[0].id);
    const after = service.skills();
    expect(before).not.toBe(after);
  });

  it('should not affect other skills when toggling one', () => {
    const targetId = SKILLS_DATA[0].id;
    const othersBefore = service
      .skills()
      .filter((s) => s.id !== targetId)
      .map((s) => s.highlighted);

    service.toggleHighlight(targetId);

    const othersAfter = service
      .skills()
      .filter((s) => s.id !== targetId)
      .map((s) => s.highlighted);

    expect(othersBefore).toEqual(othersAfter);
  });
});
