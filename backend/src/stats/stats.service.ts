// backend/src/stats/stats.service.ts

import { StatCalculation, StatKind } from './constants/stat.constants';

import { Injectable } from '@nestjs/common';
import { SkillsService } from '../skills/skills.service';
import { StatResponseDto } from './dto/stat-response.dto';

@Injectable()
export class StatsService {
  constructor(private readonly skillsService: SkillsService) {}

  private readonly rawStats = [
    {
      id: 'experience',
      label: 'STATS.EXPERIENCE',
      icon: 'experience.webp',
      stat: {
        kind: StatKind.DYNAMIC,
        startDate: new Date('2016-01-01'),
        calculation: StatCalculation.YEARS,
        showPlus: true,
      },
    },
    {
      id: 'remote',
      label: 'STATS.REMOTE',
      icon: 'remote.webp',
      stat: {
        kind: StatKind.STATIC,
        value: 5,
        showPlus: true,
      },
    },
    {
      id: 'skills',
      label: 'STATS.SKILLS',
      icon: 'skills.webp',
      stat: { kind: StatKind.SERVICE },
    },
    {
      id: 'coffee',
      label: 'STATS.COFFEES',
      icon: 'coffee.webp',
      stat: {
        kind: StatKind.DYNAMIC,
        startDate: new Date('2016-01-01'),
        calculation: StatCalculation.DAYS,
        showPlus: true,
        multiplier: 3,
      },
    },
  ];

  findAll(): StatResponseDto[] {
    return this.rawStats.map((item) => ({
      id: item.id,
      label: item.label,
      icon: item.icon,
      value: this.calculateFinalValue(item.stat),
      showPlus: this.shouldShowPlus(item.stat),
    }));
  }

  private calculateFinalValue(stat: any): number {
    const multiplier = stat.multiplier ?? 1;

    switch (stat.kind) {
      case StatKind.STATIC:
        return stat.value;

      case StatKind.DYNAMIC:
        const diff =
          stat.calculation === StatCalculation.YEARS
            ? this.diffInYears(stat.startDate)
            : this.diffInDays(stat.startDate);
        return diff * multiplier;

      case StatKind.SERVICE:
        return this.skillsService.getHighlightedCount() * multiplier;

      default:
        return 0;
    }
  }

  private shouldShowPlus(stat: any): boolean {
    return stat.showPlus ?? false;
  }

  private diffInYears(date: Date): number {
    const diff = Math.abs(Date.now() - date.getTime());
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }

  private diffInDays(date: Date): number {
    const diff = Math.abs(Date.now() - date.getTime());
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }
}
