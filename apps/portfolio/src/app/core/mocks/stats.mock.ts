import { Stat } from '@core/models/stat.model';

export const STATS_MOCK: Stat[] = [
  {
    id: '1',
    label: 'STATS.EXPERIENCE',
    value: 8,
    showPlus: true,
    icon: 'experience.webp',
  },
  {
    id: '2',
    label: 'STATS.REMOTE',
    value: 5,
    showPlus: true,
    icon: 'remote.webp',
  },
  {
    id: '3',
    label: 'STATS.SKILLS',
    value: 12,
    showPlus: false,
    icon: 'skills.webp',
  },
  {
    id: '4',
    label: 'STATS.COFFEES',
    value: 9000,
    showPlus: true,
    icon: 'coffee.webp',
  },
];
