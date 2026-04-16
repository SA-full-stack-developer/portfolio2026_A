"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsService = void 0;
const common_1 = require("@nestjs/common");
const skills_data_1 = require("./data/skills.data");
let SkillsService = class SkillsService {
    skills = skills_data_1.SKILLS_DATA;
    findAll(category, onlyHighlighted) {
        let filtered = [...this.skills];
        if (category && category !== 'all') {
            filtered = filtered.filter((s) => s.category === category);
        }
        if (onlyHighlighted) {
            filtered = filtered.filter((s) => s.highlighted);
        }
        return filtered.sort((a, b) => {
            if (a.highlighted !== b.highlighted)
                return a.highlighted ? -1 : 1;
            return b.level - a.level;
        });
    }
    getCategories() {
        const categories = this.skills.map((s) => s.category);
        return [...new Set(categories)];
    }
    findByIds(ids) {
        return this.skills.filter((s) => ids.includes(s.id));
    }
};
exports.SkillsService = SkillsService;
exports.SkillsService = SkillsService = __decorate([
    (0, common_1.Injectable)()
], SkillsService);
//# sourceMappingURL=skills.service.js.map