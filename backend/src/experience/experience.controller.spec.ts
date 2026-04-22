import { Test, TestingModule } from '@nestjs/testing';

import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';

describe('ExperienceController', () => {
  let controller: ExperienceController;
  let service: ExperienceService;

  const mockExperienceService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperienceController],
      providers: [
        {
          provide: ExperienceService,
          useValue: mockExperienceService,
        },
      ],
    }).compile();

    controller = module.get<ExperienceController>(ExperienceController);
    service = module.get<ExperienceService>(ExperienceService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all experiences', () => {
      const mockExperiences = [{ id: '1', companyId: '1' }];
      mockExperienceService.findAll.mockReturnValue(mockExperiences);

      const result = controller.findAll();

      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(mockExperiences);
    });
  });

  describe('findOne', () => {
    it('should return a single experience by id', () => {
      const mockExperience = { id: '1', companyId: '1' };
      mockExperienceService.findOne.mockReturnValue(mockExperience);

      const result = controller.findOne('1');

      expect(service.findOne).toHaveBeenCalledWith('1');
      expect(result).toEqual(mockExperience);
    });
  });
});
