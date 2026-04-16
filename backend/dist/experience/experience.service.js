"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceService = void 0;
const common_1 = require("@nestjs/common");
const companies_service_1 = require("../companies/companies.service");
const projects_service_1 = require("../projects/projects.service");
const skills_service_1 = require("../skills/skills.service");
const experiences_data_1 = require("./data/experiences.data");
let ExperienceService = class ExperienceService {
    companiesService;
    projectsService;
    skillsService;
    constructor(companiesService, projectsService, skillsService) {
        this.companiesService = companiesService;
        this.projectsService = projectsService;
        this.skillsService = skillsService;
    }
    experiences = experiences_data_1.EXPERIENCES_DATA;
    findAll() {
        return this.experiences.map((experience) => {
            return this.getExperienceResponseDto(experience);
        });
    }
    findOne(id) {
        const experience = this.experiences.find((e) => e.id === id);
        if (!experience)
            throw new common_1.NotFoundException(`Experience ${id} not found`);
        return this.getExperienceResponseDto(experience);
    }
    getExperienceResponseDto(experience) {
        return {
            ...experience,
            projects: this.projectsService.findByIds(experience.projectIds) ?? [],
            company: this.companiesService.findOne(experience.companyId),
            skills: this.skillsService.findByIds(experience.technologyIds) ?? [],
        };
    }
};
exports.ExperienceService = ExperienceService;
exports.ExperienceService = ExperienceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [companies_service_1.CompaniesService,
        projects_service_1.ProjectsService,
        skills_service_1.SkillsService])
], ExperienceService);
//# sourceMappingURL=experience.service.js.map