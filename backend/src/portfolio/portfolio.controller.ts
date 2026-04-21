import { Controller, Get } from '@nestjs/common';

import { ExperienceService } from '../experience/experience.service';
import { SkillsService } from '../skills/skills.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(
    private readonly skillsService: SkillsService,
    private readonly experienceService: ExperienceService,
  ) {}

  @Get('init-data')
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
}
