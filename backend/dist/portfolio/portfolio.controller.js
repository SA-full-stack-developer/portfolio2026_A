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
exports.PortfolioController = void 0;
const common_1 = require("@nestjs/common");
const experience_service_1 = require("../experience/experience.service");
const skills_service_1 = require("../skills/skills.service");
let PortfolioController = class PortfolioController {
    skillsService;
    experienceService;
    constructor(skillsService, experienceService) {
        this.skillsService = skillsService;
        this.experienceService = experienceService;
    }
    async getPortfolioData() {
        const [skills, experience] = await Promise.all([
            this.skillsService.findAll(),
            this.experienceService.findAll(),
        ]);
        return {
            skills,
            experience,
            timestamp: new Date(),
        };
    }
};
exports.PortfolioController = PortfolioController;
__decorate([
    (0, common_1.Get)('init-data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PortfolioController.prototype, "getPortfolioData", null);
exports.PortfolioController = PortfolioController = __decorate([
    (0, common_1.Controller)('portfolio'),
    __metadata("design:paramtypes", [skills_service_1.SkillsService,
        experience_service_1.ExperienceService])
], PortfolioController);
//# sourceMappingURL=portfolio.controller.js.map