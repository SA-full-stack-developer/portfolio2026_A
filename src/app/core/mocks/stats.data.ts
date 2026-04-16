import { Stat } from '@core/models/stat.model';

export const STATS_DATA: Stat[] = [
  {
    id: '1',
    label: 'STATS.EXPERIENCE',
    stat: {
      kind: 'dynamic',
      startDate: new Date('2016-01-01'),
      calculation: 'years',
      showPlus: true,
    },
    icon: 'experience.webp',
  },
  {
    id: '2',
    label: 'STATS.REMOTE',
    stat: { kind: 'static', value: 5, showPlus: true },
    icon: 'remote.webp',
  },
  {
    id: '3',
    label: 'STATS.SKILLS',
    stat: { kind: 'service' },
    icon: 'skills.webp',
  },
  {
    id: '4',
    label: 'STATS.COFFEES',
    stat: {
      kind: 'dynamic',
      startDate: new Date('2016-01-01'),
      calculation: 'days',
      showPlus: true,
      multiplier: 3,
    },
    icon: 'coffee.webp',
  },
];
