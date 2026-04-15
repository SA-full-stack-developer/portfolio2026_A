import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillsModule } from './skills/skills.module';
import { ExperienceModule } from './experience/experience.module';
import { ContactModule } from './contact/contact.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [SkillsModule, ExperienceModule, ContactModule, StatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
