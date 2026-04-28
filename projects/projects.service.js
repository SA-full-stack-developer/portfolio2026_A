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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const companies_service_1 = require("../companies/companies.service");
const projects_data_1 = require("./data/projects.data");
let ProjectsService = class ProjectsService {
    companiesService;
    constructor(companiesService) {
        this.companiesService = companiesService;
    }
    projects = projects_data_1.PROJECTS_DATA;
    findAll() {
        return this.projects.map((project) => {
            return this.getProjectResponseDto(project);
        });
    }
    findOne(id) {
        const project = this.projects.find((p) => p.id === id);
        if (!project)
            throw new common_1.NotFoundException(`Project ${id} not found`);
        return this.getProjectResponseDto(project);
    }
    findByIds(ids) {
        const projects = this.projects.filter((p) => ids.includes(p.id));
        return projects.map((project) => {
            return this.getProjectResponseDto(project);
        });
    }
    getProjectResponseDto(project) {
        return {
            ...project,
            company: this.companiesService.findOne(project.companyId),
        };
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [companies_service_1.CompaniesService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map