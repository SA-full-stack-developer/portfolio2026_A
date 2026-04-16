import { Test, TestingModule } from '@nestjs/testing';

import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

describe('StatsController', () => {
  let controller: StatsController;
  let service: StatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatsController],
      providers: [
        {
          provide: StatsService,
          useValue: {
            findAll: jest
              .fn()
              .mockReturnValue([
                {
                  id: '1',
                  label: 'Test',
                  value: 10,
                  showPlus: true,
                  icon: 'icon',
                },
              ]),
          },
        },
      ],
    }).compile();

    controller = module.get<StatsController>(StatsController);
    service = module.get<StatsService>(StatsService);
  });

  it('should return an array of stats', () => {
    expect(controller.findAll()).toHaveLength(1);
    expect(service.findAll).toHaveBeenCalled();
  });
});
