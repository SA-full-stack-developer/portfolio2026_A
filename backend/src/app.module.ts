import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillsModule } from './skills/skills.module';
import { ExperienceModule } from './experience/experience.module';
import { ContactModule } from './contact/contact.module';
import { StatsModule } from './stats/stats.module';
import { ProjectsModule } from './projects/projects.module';
import { CompaniesModule } from './companies/companies.module';
import { PortfolioService } from './portfolio/portfolio.service';
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
  imports: [SkillsModule, ExperienceModule, ContactModule, StatsModule, ProjectsModule, CompaniesModule, PortfolioModule],
  controllers: [AppController],
  providers: [AppService, PortfolioService],
})
export class AppModule {}
