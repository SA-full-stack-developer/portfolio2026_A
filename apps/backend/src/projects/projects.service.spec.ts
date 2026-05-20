import { Test, TestingModule } from '@nestjs/testing';

import { CompaniesService } from '../companies/companies.service'; // Asegúrate de usar ruta relativa
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let companiesService: CompaniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
        {
          provide: CompaniesService,
          useValue: {
            findOne: jest
              .fn()
              .mockReturnValue({ id: '1', name: 'Empresa Test' }),
          },
        },
      ],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
    companiesService = module.get<CompaniesService>(CompaniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
