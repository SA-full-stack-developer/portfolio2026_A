import { Component, computed, input } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skill-badge" [class]="badgeClass()">
      <span class="skill-name">{{ name() }}</span>
      <span class="skill-level">{{ level() }}%</span>
    </div>
  `,
})
export class SkillBadgeComponent {
  name = input.required<string>();
  level = input.required<number>();

  badgeClass = computed(() => {
    const l = this.level();
    if (l >= 80) return 'skill-badge--expert';
    if (l >= 50) return 'skill-badge--intermediate';
    return 'skill-badge--beginner';
  });
}
