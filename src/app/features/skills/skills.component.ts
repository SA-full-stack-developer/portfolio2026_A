import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';

import { ID_SKILLS } from '@core/constants/sections.constants';
import { SkillFilter } from '@core/models/skill.model';
import { GsapService } from '@core/services/gsap.service';
import { PlatformService } from '@core/services/platform.service';
import { SkillsService } from '@core/services/skills.service';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@shared/components/icon/icon.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillFilterComponent } from './components/skill-filter/skill-filter.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillCardComponent, SkillFilterComponent, TranslateModule, IconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit {
  private readonly skillsService = inject(SkillsService);
  private readonly gsapService = inject(GsapService);
  private readonly el = inject(ElementRef);
  private readonly platformService = inject(PlatformService);
  private readonly injector = inject(Injector);

  readonly ID_SKILLS = ID_SKILLS;
  readonly filteredSkills = this.skillsService.filteredSkills;
  readonly allFilteredSkills = this.skillsService.allFilteredSkills;
  readonly categories = this.skillsService.categories;
  readonly filter = this.skillsService.filter;
  readonly highlightedCount = this.skillsService.highlightedCount;
  readonly totalSkills = this.skillsService.totalSkills;
  readonly hasMore = this.skillsService.hasMore;

  readonly animatedIds = signal<Set<string>>(new Set());

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;
    this.animateCards(0);
  }

  private animateCards(fromIndex: number) {
    const gsap = this.gsapService.gsap;
    const allCards = Array.from(
      this.el.nativeElement.querySelectorAll('app-skill-card'),
    ) as HTMLElement[];
    const cards = allCards.slice(fromIndex);

    if (!cards.length) return;

    gsap.set(cards, { opacity: 0, y: 50 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      onStart: () => {
        const newIds = this.filteredSkills()
          .slice(fromIndex)
          .map((s) => s.id);
        this.animatedIds.update((set) => {
          const next = new Set(set);
          newIds.forEach((id) => next.add(id));
          return next;
        });
      },
    });
  }

  onFilterChange(changes: Partial<SkillFilter>): void {
    this.skillsService.setFilter(changes);
  }

  onLoadMore(): void {
    const currentCount = this.filteredSkills().length;
    this.skillsService.loadMore();

    afterNextRender(
      () => {
        this.animateCards(currentCount);
      },
      { injector: this.injector },
    );
  }
}
