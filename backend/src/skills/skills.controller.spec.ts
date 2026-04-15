import { Test, TestingModule } from '@nestjs/testing';

import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';

describe('SkillsController', () => {
  let controller: SkillsController;
  let service: SkillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillsController],
      providers: [
        {
          provide: SkillsService,
          useValue: {
            findAll: jest.fn().mockReturnValue([]),
            getCategories: jest.fn().mockReturnValue(['frontend', 'backend']),
          },
        },
      ],
    }).compile();

    controller = module.get<SkillsController>(SkillsController);
    service = module.get<SkillsService>(SkillsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call service.findAll with correct query parameters', () => {
    controller.findAll('frontend', 'true');
    expect(service.findAll).toHaveBeenCalledWith('frontend', true);
  });

  it('should return categories from the service', () => {
    const result = controller.findAllCategories();
    expect(result).toEqual(['frontend', 'backend']);
    expect(service.getCategories).toHaveBeenCalled();
  });
});
