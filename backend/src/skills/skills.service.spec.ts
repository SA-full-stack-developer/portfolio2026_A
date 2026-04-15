import { Test, TestingModule } from '@nestjs/testing';

import { SkillsService } from './skills.service';

describe('SkillsService', () => {
  let service: SkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkillsService],
    }).compile();

    service = module.get<SkillsService>(SkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all skills sorted by highlight and level', () => {
    const skills = service.findAll();
    expect(skills.length).toBeGreaterThan(0);
    if (skills.length > 1) {
      expect(skills[0].highlighted).toBe(true);
    }
  });

  it('should filter by category correctly', () => {
    const category = 'frontend';
    const filtered = service.findAll(category);
    const allMatch = filtered.every((s) => s.category === category);
    expect(allMatch).toBe(true);
  });

  it('should return unique categories', () => {
    const categories = service.getCategories();
    expect(Array.isArray(categories)).toBe(true);
    const uniqueCategories = new Set(categories);
    expect(categories.length).toBe(uniqueCategories.size);
  });
});
