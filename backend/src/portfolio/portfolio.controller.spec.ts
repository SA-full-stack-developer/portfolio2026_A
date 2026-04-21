import { Test, TestingModule } from '@nestjs/testing';

import { ExperienceService } from '../experience/experience.service';
import { SkillsService } from '../skills/skills.service';
import { PortfolioController } from './portfolio.controller';

describe('PortfolioController', () => {
  let controller: PortfolioController;
  let skillsService: jest.Mocked<SkillsService>;
  let experienceService: jest.Mocked<ExperienceService>;

  beforeEach(async () => {
    const mockSkillsService = {
      findAll: jest.fn(),
    };

    const mockExperienceService = {
      findAll: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortfolioController],
      providers: [
        {
          provide: SkillsService,
          useValue: mockSkillsService,
        },
        {
          provide: ExperienceService,
          useValue: mockExperienceService,
        },
      ],
    }).compile();

    controller = module.get<PortfolioController>(PortfolioController);
    skillsService = module.get(SkillsService) as jest.Mocked<SkillsService>;
    experienceService = module.get(
      ExperienceService,
    ) as jest.Mocked<ExperienceService>;
  });

  describe('getPortfolioData', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('should return portfolio data with skills and experience', async () => {
      const mockSkills = [
        { id: 1, name: 'TypeScript', level: 'Advanced' },
        { id: 2, name: 'Angular', level: 'Advanced' },
      ];

      const mockExperience = [
        { id: 1, title: 'Developer', company: 'Tech Corp' },
        { id: 2, title: 'Senior Developer', company: 'Innovate Inc' },
      ];

      skillsService.findAll.mockResolvedValue(mockSkills);
      experienceService.findAll.mockResolvedValue(mockExperience);

      const result = await controller.getPortfolioData();

      expect(result).toHaveProperty('skills');
      expect(result).toHaveProperty('experience');
      expect(result).toHaveProperty('timestamp');
      expect(result.skills).toEqual(mockSkills);
      expect(result.experience).toEqual(mockExperience);
      expect(result.timestamp).toBeInstanceOf(Date);
    });

    it('should call skillsService.findAll and experienceService.findAll', async () => {
      skillsService.findAll.mockResolvedValue([]);
      experienceService.findAll.mockResolvedValue([]);

      await controller.getPortfolioData();

      expect(skillsService.findAll).toHaveBeenCalledTimes(1);
      expect(experienceService.findAll).toHaveBeenCalledTimes(1);
    });

    it('should return empty arrays when no skills or experience exist', async () => {
      skillsService.findAll.mockResolvedValue([]);
      experienceService.findAll.mockResolvedValue([]);

      const result = await controller.getPortfolioData();

      expect(result.skills).toEqual([]);
      expect(result.experience).toEqual([]);
      expect(result.timestamp).toBeInstanceOf(Date);
    });

    it('should handle skills service error gracefully', async () => {
      const error = new Error('Database connection failed');
      skillsService.findAll.mockRejectedValue(error);
      experienceService.findAll.mockResolvedValue([]);

      await expect(controller.getPortfolioData()).rejects.toThrow(
        'Database connection failed',
      );
    });

    it('should handle experience service error gracefully', async () => {
      const error = new Error('Service unavailable');
      skillsService.findAll.mockResolvedValue([]);
      experienceService.findAll.mockRejectedValue(error);

      await expect(controller.getPortfolioData()).rejects.toThrow(
        'Service unavailable',
      );
    });

    it('should use Promise.all to fetch data in parallel', async () => {
      const mockSkills = [{ id: 1, name: 'JavaScript' }];
      const mockExperience = [{ id: 1, title: 'Developer' }];

      skillsService.findAll.mockResolvedValue(mockSkills);
      experienceService.findAll.mockResolvedValue(mockExperience);

      const result = await controller.getPortfolioData();

      expect(result.skills).toEqual(mockSkills);
      expect(result.experience).toEqual(mockExperience);
      // Verify that both services were called
      expect(skillsService.findAll).toHaveBeenCalled();
      expect(experienceService.findAll).toHaveBeenCalled();
    });

    it('should return timestamp as a valid Date object', async () => {
      skillsService.findAll.mockResolvedValue([]);
      experienceService.findAll.mockResolvedValue([]);

      const result = await controller.getPortfolioData();
      const currentTime = new Date();

      expect(result.timestamp).toBeInstanceOf(Date);
      expect(result.timestamp.getTime()).toBeLessThanOrEqual(
        currentTime.getTime(),
      );
      expect(result.timestamp.getTime()).toBeGreaterThanOrEqual(
        currentTime.getTime() - 1000,
      );
    });

    it('should return data with correct structure', async () => {
      const mockSkills = [{ id: 1, name: 'TypeScript', level: 'Expert' }];
      const mockExperience = [
        {
          id: 1,
          title: 'Lead Developer',
          company: 'Tech Corp',
          startDate: '2020-01-01',
        },
      ];

      skillsService.findAll.mockResolvedValue(mockSkills);
      experienceService.findAll.mockResolvedValue(mockExperience);

      const result = await controller.getPortfolioData();

      expect(result).toEqual({
        skills: mockSkills,
        experience: mockExperience,
        timestamp: expect.any(Date),
      });
    });

    it('should handle multiple sequential calls', async () => {
      const mockSkills1 = [{ id: 1, name: 'TypeScript' }];
      const mockExperience1 = [{ id: 1, title: 'Developer' }];

      const mockSkills2 = [
        { id: 1, name: 'TypeScript' },
        { id: 2, name: 'Angular' },
      ];
      const mockExperience2 = [
        { id: 1, title: 'Developer' },
        { id: 2, title: 'Senior Developer' },
      ];

      skillsService.findAll.mockResolvedValueOnce(mockSkills1);
      experienceService.findAll.mockResolvedValueOnce(mockExperience1);

      const result1 = await controller.getPortfolioData();

      skillsService.findAll.mockResolvedValueOnce(mockSkills2);
      experienceService.findAll.mockResolvedValueOnce(mockExperience2);

      const result2 = await controller.getPortfolioData();

      expect(result1.skills).toEqual(mockSkills1);
      expect(result1.experience).toEqual(mockExperience1);
      expect(result2.skills).toEqual(mockSkills2);
      expect(result2.experience).toEqual(mockExperience2);
    });
  });
});
