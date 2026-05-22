import { Test, TestingModule } from '@nestjs/testing';

import { StatusService } from './status.service';

jest.mock('./data/status.data', () => ({
  STATUS: 'Online',
}));

describe('StatusService', () => {
  let service: StatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusService],
    }).compile();

    service = module.get<StatusService>(StatusService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  describe('getStatus', () => {
    it('should return an object with status property', () => {
      const result = service.getStatus();

      expect(result).toHaveProperty('status');
      expect(typeof result.status).toBe('string');
      expect(result).toEqual({ status: 'Online' });
    });
  });
});
