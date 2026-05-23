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
exports.StatsService = void 0;
const stat_constants_1 = require("./constants/stat.constants");
const common_1 = require("@nestjs/common");
const skills_service_1 = require("../skills/skills.service");
let StatsService = class StatsService {
    skillsService;
    constructor(skillsService) {
        this.skillsService = skillsService;
    }
    rawStats = [
        {
            id: 'experience',
            label: 'STATS.EXPERIENCE',
            icon: 'experience.webp',
            stat: {
                kind: stat_constants_1.StatKind.DYNAMIC,
                startDate: new Date('2016-01-01'),
                calculation: stat_constants_1.StatCalculation.YEARS,
                showPlus: true,
            },
        },
        {
            id: 'remote',
            label: 'STATS.REMOTE',
            icon: 'remote.webp',
            stat: {
                kind: stat_constants_1.StatKind.STATIC,
                value: 5,
                showPlus: true,
            },
        },
        {
            id: 'skills',
            label: 'STATS.SKILLS',
            icon: 'skills.webp',
            stat: { kind: stat_constants_1.StatKind.SERVICE },
        },
        {
            id: 'coffee',
            label: 'STATS.COFFEES',
            icon: 'coffee.webp',
            stat: {
                kind: stat_constants_1.StatKind.DYNAMIC,
                startDate: new Date('2016-01-01'),
                calculation: stat_constants_1.StatCalculation.DAYS,
                showPlus: true,
                multiplier: 3,
            },
        },
    ];
    findAll() {
        return this.rawStats.map((item) => ({
            id: item.id,
            label: item.label,
            icon: item.icon,
            value: this.calculateFinalValue(item.stat),
            showPlus: this.shouldShowPlus(item.stat),
        }));
    }
    calculateFinalValue(stat) {
        const multiplier = stat.multiplier ?? 1;
        switch (stat.kind) {
            case stat_constants_1.StatKind.STATIC:
                return stat.value;
            case stat_constants_1.StatKind.DYNAMIC:
                const diff = stat.calculation === stat_constants_1.StatCalculation.YEARS
                    ? this.diffInYears(stat.startDate)
                    : this.diffInDays(stat.startDate);
                return diff * multiplier;
            case stat_constants_1.StatKind.SERVICE:
                return this.skillsService.getHighlightedCount() * multiplier;
            default:
                return 0;
        }
    }
    shouldShowPlus(stat) {
        return stat.showPlus ?? false;
    }
    diffInYears(date) {
        const diff = Math.abs(Date.now() - date.getTime());
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
    diffInDays(date) {
        const diff = Math.abs(Date.now() - date.getTime());
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }
};
exports.StatsService = StatsService;
exports.StatsService = StatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [skills_service_1.SkillsService])
], StatsService);
//# sourceMappingURL=stats.service.js.map