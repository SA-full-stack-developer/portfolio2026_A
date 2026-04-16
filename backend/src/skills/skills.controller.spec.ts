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
          // Creamos el mock directamente aquí para asegurar que se use
          useValue: {
            getCategories: jest.fn().mockReturnValue(['A', 'B']),
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

  it('should return categories', () => {
    expect(controller.findAllCategories()).toEqual(['A', 'B']);
  });
});
