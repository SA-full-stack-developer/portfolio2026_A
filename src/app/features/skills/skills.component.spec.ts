import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SKILLS_DATA } from '@core/data/skills.data';
import { SkillsService } from '@core/services/skills.service';
import { SkillsComponent } from './skills.component';

// Mock loader
class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      SKILLS: {
        TITLE: 'Stack Tecnológico',
        SUBTITLE_ALL: '{{filtered}} de {{total}} tecnologías',
        SUBTITLE_HIGHLIGHTED: '· {{count}} destacadas',
        EMPTY: 'No hay tecnologías en esta categoría.',
        CATEGORIES: {
          ALL: 'Todos',
          FRONTEND: 'Frontend',
          BACKEND: 'Backend',
          MOBILE: 'Mobile',
          DEVOPS: 'DevOps',
          TOOLS: 'Herramientas',
        },
        FILTER: { HIGHLIGHTED: 'Destacados' },
        LEVELS: { EXPERT: 'Experto', INTERMEDIATE: 'Intermedio', BEGINNER: 'Básico' },
        YEARS_ONE: '{{count}} año de experiencia',
        YEARS_OTHER: '{{count}} años de experiencia',
      },
    } as TranslationObject);
  }
}

describe('SkillsComponent', () => {
  let fixture: ComponentFixture<SkillsComponent>;
  let component: SkillsComponent;
  let skillsService: SkillsService;

  async function createComponent(): Promise<void> {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SkillsComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
    });
    skillsService = TestBed.inject(SkillsService);

    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  // Creación
  it('should create', async () => {
    await createComponent();
    expect(component).toBeTruthy();
  });

  // Renderizado inicial
  it('should render skills title', async () => {
    await createComponent();
    const title = fixture.debugElement.query(By.css('.skills__title'));
    expect(title.nativeElement.textContent.trim()).toBe('Stack Tecnológico');
  });

  it('should render first page of skill cards on init', async () => {
    await createComponent();
    const cards = fixture.debugElement.queryAll(By.css('app-skill-card'));
    expect(cards.length).toBe(skillsService.PAGE_SIZE);
  });

  it('should render skill filter component', async () => {
    await createComponent();
    const filter = fixture.debugElement.query(By.css('app-skill-filter'));
    expect(filter).toBeTruthy();
  });

  // Filtro por categoría
  it('should show only frontend cards when frontend filter is active', async () => {
    await createComponent();
    skillsService.setFilter({ category: 'frontend' });
    fixture.detectChanges();

    const expected = SKILLS_DATA.filter((s) => s.category === 'frontend').length;
    const cards = fixture.debugElement.queryAll(By.css('app-skill-card'));
    expect(cards.length).toBe(expected);
  });

  it('should show first page of cards when filter is reset to all', async () => {
    await createComponent();
    skillsService.setFilter({ category: 'frontend' });
    fixture.detectChanges();
    skillsService.resetFilter();
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('app-skill-card'));
    expect(cards.length).toBe(skillsService.PAGE_SIZE);
  });

  // Filtro por destacados
  it('should show highlighted text when highlighted filter is active', async () => {
    await createComponent();
    skillsService.setFilter({ onlyHighlighted: true });
    fixture.detectChanges();

    const subtitle = fixture.debugElement.query(By.css('.skills__subtitle'));
    expect(subtitle.nativeElement.textContent).toContain('destacadas');
  });

  it('should not show highlighted text when highlighted filter is inactive', async () => {
    await createComponent();
    const subtitle = fixture.debugElement.query(By.css('.skills__subtitle'));
    expect(subtitle.nativeElement.textContent).not.toContain('destacadas');
  });

  it('should show only frontend highlighted cards when both filters are active', async () => {
    await createComponent();
    skillsService.setFilter({ category: 'frontend', onlyHighlighted: true });
    fixture.detectChanges();

    const expected = SKILLS_DATA.filter((s) => s.category === 'frontend' && s.highlighted).length;
    const cards = fixture.debugElement.queryAll(By.css('app-skill-card'));
    expect(cards.length).toBe(expected);
  });

  // Estado vacío
  it('should show empty message when no cards match the filter', async () => {
    await createComponent();
    // Soft skills are not highlighted
    skillsService.setFilter({ category: 'soft', onlyHighlighted: true });
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('app-skill-card'));
    expect(cards.length).toBe(0);

    const empty = fixture.debugElement.query(By.css('.skills__empty'));
    expect(empty).toBeTruthy();
    expect(empty.nativeElement.textContent.trim()).toContain('No hay');
  });

  // onFilterChange
  it('should call setFilter on service when onFilterChange is called', async () => {
    await createComponent();
    jest.spyOn(skillsService, 'setFilter');
    component.onFilterChange({ category: 'backend' });
    expect(skillsService.setFilter).toHaveBeenCalledWith({ category: 'backend' });
  });

  it('should update filteredSkills when filter changes via onFilterChange', async () => {
    await createComponent();
    component.onFilterChange({ category: 'backend' });
    fixture.detectChanges();

    const expected = SKILLS_DATA.filter((s) => s.category === 'backend').length;
    const cards = fixture.debugElement.queryAll(By.css('app-skill-card'));
    expect(cards.length).toBe(expected);
  });

  // ── Signals expuestos ────────────────────────────────────────────
  it('should expose totalSkills matching SKILLS_DATA length', async () => {
    await createComponent();
    expect(component.totalSkills()).toBe(SKILLS_DATA.length);
  });

  it('should expose filteredSkills equal to all skills on init', async () => {
    await createComponent();
    expect(component.allFilteredSkills().length).toBe(SKILLS_DATA.length);
  });

  it('should expose categories from service', async () => {
    await createComponent();
    expect(component.categories().length).toBeGreaterThan(0);
  });

  it('should expose highlightedCount from service', async () => {
    await createComponent();
    const expected = SKILLS_DATA.filter((s) => s.highlighted).length;
    expect(component.highlightedCount()).toBe(expected);
  });

  it('should expose hasMore correctly on init', async () => {
    await createComponent();
    expect(component.hasMore()).toBe(
      component.allFilteredSkills().length > skillsService.PAGE_SIZE,
    );
  });

  it('should expose filter from service', async () => {
    await createComponent();
    expect(component.filter()).toEqual({ category: 'all', onlyHighlighted: false });
  });

  it('should show load more button when hasMore is true', async () => {
    await createComponent();
    const button = fixture.debugElement.query(By.css('.skills__more'));
    expect(button).toBeTruthy();
  });

  it('should call loadMore on service when onLoadMore is called', async () => {
    await createComponent();
    jest.spyOn(skillsService, 'loadMore');
    component.onLoadMore();
    expect(skillsService.loadMore).toHaveBeenCalled();
  });
});
