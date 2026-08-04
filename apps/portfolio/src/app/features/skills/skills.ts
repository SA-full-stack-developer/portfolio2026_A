import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  OnDestroy,
  afterNextRender,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { GsapService, PlatformService } from '@shared-libs/services';

import { MatIconModule } from '@angular/material/icon';
import { ID_SKILLS } from '@core/constants/sections.constants';
import { SkillFilter } from '@core/models';
import { SkillsService } from '@core/services/skills';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from '@shared/components/error/error';
import { IconComponent } from '@shared/components/icon/icon';
import { SkillCardComponent } from './components/skill-card/skill-card';
import { SkillFilterComponent } from './components/skill-filter/skill-filter';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SkillCardComponent,
    SkillFilterComponent,
    TranslateModule,
    IconComponent,
    MatIconModule,
    ErrorComponent,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
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
  readonly loading = this.skillsService.loading;
  readonly error = this.skillsService.error;

  readonly animatedIds = signal<Set<string>>(new Set());

  private lastAnimatedCount = signal(0);
  private scrollTriggers = signal<ScrollTrigger[]>([]);

  constructor() {
    effect(() => {
      const skills = this.filteredSkills();

      if (skills.length <= 24) {
        this.lastAnimatedCount.set(0);
      }

      const alreadyAnimated = untracked(() => this.lastAnimatedCount());
      if (alreadyAnimated > 0 || skills.length > 0) {
        afterNextRender(
          () => {
            if (this.platformService.isBrowser) {
              this.animateCards();
            }
          },
          { injector: this.injector },
        );
      }
    });
  }

  ngAfterViewInit(): void {
    if (!this.platformService.isBrowser) return;
    afterNextRender(() => this.animateCards(), { injector: this.injector });
  }

  private animateCards() {
    const gsap = this.gsapService.gsap;
    const allCards = Array.from(
      this.el.nativeElement.querySelectorAll('app-skill-card'),
    ) as HTMLElement[];
    const newCards = allCards.slice(this.lastAnimatedCount());

    if (newCards.length === 0) return;

    gsap.set(newCards, { opacity: 0, y: 50 });

    const st = gsap.to(newCards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: newCards[0],
        start: 'top 92%',
        toggleActions: 'play none none none',
        invalidateOnRefresh: true,
        onEnter: () => {
          const currentFrom = this.lastAnimatedCount();
          const newIds = this.filteredSkills()
            .slice(currentFrom)
            .map((s) => s.id);
          this.animatedIds.update((set) => {
            const next = new Set(set);
            newIds.forEach((id) => next.add(id));
            return next;
          });
        },
      },
      onComplete: () => {
        this.lastAnimatedCount.set(allCards.length);
      },
    });

    if (st.scrollTrigger) {
      this.scrollTriggers.update((triggers) => [...triggers, st.scrollTrigger!]);
    }
  }

  onFilterChange(changes: Partial<SkillFilter>): void {
    this.lastAnimatedCount.set(0);
    this.skillsService.setFilter(changes);
  }

  onLoadMore(): void {
    this.skillsService.loadMore();
  }

  ngOnDestroy(): void {
    this.scrollTriggers().forEach((st) => st.kill());
    this.scrollTriggers.set([]);
  }
}
