import { Test, TestingModule } from '@nestjs/testing';

import { NotFoundException } from '@nestjs/common';
import { CompaniesService } from '../companies/companies.service';
import { ProjectsService } from '../projects/projects.service';
import { SkillsService } from '../skills/skills.service';
import { EXPERIENCES_DATA } from './data/experiences.data';
import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  let service: ExperienceService;
  let companiesService: CompaniesService;
  let projectsService: ProjectsService;
  let skillsService: SkillsService;

  const mockCompaniesService = {
    findOne: jest.fn(),
  };

  const mockProjectsService = {
    findByIds: jest.fn(),
  };

  const mockSkillsService = {
    findByIds: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ExperienceService,
        {
          provide: CompaniesService,
          useValue: mockCompaniesService,
        },
        {
          provide: ProjectsService,
          useValue: mockProjectsService,
        },
        {
          provide: SkillsService,
          useValue: mockSkillsService,
        },
      ],
    }).compile();

    service = module.get<ExperienceService>(ExperienceService);
    companiesService = module.get<CompaniesService>(CompaniesService);
    projectsService = module.get<ProjectsService>(ProjectsService);
    skillsService = module.get<SkillsService>(SkillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all experiences with enriched data', () => {
      const mockCompany = { id: '1', name: 'Test Company' };
      const mockProjects = [{ id: '1', name: 'Test Project' }];
      const mockSkills = [{ id: '1', name: 'Test Skill' }];

      mockCompaniesService.findOne.mockReturnValue(mockCompany);
      mockProjectsService.findByIds.mockReturnValue(mockProjects);
      mockSkillsService.findByIds.mockReturnValue(mockSkills);

      const result = service.findAll();

      expect(result).toHaveLength(EXPERIENCES_DATA.length);
      expect(result[0]).toHaveProperty('company', mockCompany);
      expect(result[0]).toHaveProperty('projects', mockProjects);
      expect(result[0]).toHaveProperty('skills', mockSkills);
      expect(companiesService.findOne).toHaveBeenCalledWith(
        EXPERIENCES_DATA[0].companyId,
      );
      expect(projectsService.findByIds).toHaveBeenCalledWith(
        EXPERIENCES_DATA[0].projectIds,
      );
      expect(skillsService.findByIds).toHaveBeenCalledWith(
        EXPERIENCES_DATA[0].technologyIds,
      );
    });
  });

  describe('findOne', () => {
    it('should return a single experience with enriched data', () => {
      const mockCompany = { id: '1', name: 'Test Company' };
      const mockProjects = [{ id: '1', name: 'Test Project' }];
      const mockSkills = [{ id: '1', name: 'Test Skill' }];

      mockCompaniesService.findOne.mockReturnValue(mockCompany);
      mockProjectsService.findByIds.mockReturnValue(mockProjects);
      mockSkillsService.findByIds.mockReturnValue(mockSkills);

      const result = service.findOne('1');

      expect(result).toHaveProperty('company', mockCompany);
      expect(result).toHaveProperty('projects', mockProjects);
      expect(result).toHaveProperty('skills', mockSkills);
      expect(companiesService.findOne).toHaveBeenCalledWith(
        EXPERIENCES_DATA[0].companyId,
      );
      expect(projectsService.findByIds).toHaveBeenCalledWith(
        EXPERIENCES_DATA[0].projectIds,
      );
      expect(skillsService.findByIds).toHaveBeenCalledWith(
        EXPERIENCES_DATA[0].technologyIds,
      );
    });

    it('should throw NotFoundException if experience not found', () => {
      expect(() => service.findOne('nonexistent')).toThrow(NotFoundException);
      expect(() => service.findOne('nonexistent')).toThrow(
        'Experience nonexistent not found',
      );
    });
  });
});
