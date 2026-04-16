import { Test, TestingModule } from '@nestjs/testing';

import { SkillsService } from '../skills/skills.service';
import { StatsService } from './stats.service';

describe('StatsService', () => {
  let service: StatsService;
  let skillsService: SkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StatsService,
        {
          provide: SkillsService,
          useValue: {
            getHighlightedCount: jest.fn().mockReturnValue(10),
          },
        },
      ],
    }).compile();

    service = module.get<StatsService>(StatsService);
    skillsService = module.get<SkillsService>(SkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should return 4 stats with calculated values', () => {
    const result = service.findAll();

    expect(result.length).toBe(4);
    const expStat = result.find((s) => s.id === 'experience');
    expect(expStat?.value).toBeGreaterThanOrEqual(8);
    expect(expStat?.showPlus).toBe(true);
  });

  it('should calculate multiplier for coffees correctly', () => {
    const result = service.findAll();
    const coffeeStat = result.find((s) => s.id === 'coffee');

    expect(coffeeStat?.value).toBeGreaterThan(5000);
  });

  it('should get highlighted count from SkillsService', () => {
    const result = service.findAll();
    const skillsStat = result.find((s) => s.id === 'skills');

    expect(skillsStat?.value).toBe(10);
    expect(skillsService.getHighlightedCount).toHaveBeenCalled();
  });
});
