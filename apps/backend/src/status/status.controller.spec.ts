import { Test, TestingModule } from '@nestjs/testing';

import { Status } from './entities/status.entity';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

describe('StatusController', () => {
  let controller: StatusController;
  let service: StatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusController],
      providers: [
        {
          provide: StatusService,
          useValue: {
            getStatus: jest
              .fn()
              .mockReturnValue({ status: 'Online' } as Status),
          },
        },
      ],
    }).compile();

    controller = module.get<StatusController>(StatusController);
    service = module.get<StatusService>(StatusService);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  describe('getStatus', () => {
    it('should return status from service', () => {
      const result = controller.getStatus();

      expect(result).toEqual({ status: 'Online' });
      expect(service.getStatus).toHaveBeenCalledTimes(1);
    });
  });
});
