import { Module } from '@nestjs/common';
import { SkillsModule } from '../skills/skills.module';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  imports: [SkillsModule],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
