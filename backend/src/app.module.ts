import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AiModule } from './ai/ai.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { ExperienceModule } from './experience/experience.module';
import { ProjectsModule } from './projects/projects.module';
import { SkillsModule } from './skills/skills.module';
import { StatsModule } from './stats/stats.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [
    SkillsModule,
    ExperienceModule,
    StatsModule,
    ProjectsModule,
    CompaniesModule,
    StatusModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
