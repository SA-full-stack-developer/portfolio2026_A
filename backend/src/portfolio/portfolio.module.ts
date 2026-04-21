import { Module } from '@nestjs/common';
import { ExperienceModule } from '../experience/experience.module';
import { SkillsModule } from '../skills/skills.module';
import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';

@Module({
  imports: [SkillsModule, ExperienceModule],
  controllers: [PortfolioController],
  providers: [PortfolioService],
})
export class PortfolioModule {}
