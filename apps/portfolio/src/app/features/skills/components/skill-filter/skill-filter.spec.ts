import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateService,
  TranslationObject,
  provideTranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { ListboxHarness } from '@angular/aria/listbox/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SkillFilter } from '@core/models';
import { SkillCategory } from '@portfolio/shared/models';
import { SkillFilterComponent } from './skill-filter';

// Mock loader
class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({
      SKILLS: {
        CATEGORIES: {
          ALL: 'Todos',
          FRONTEND: 'Frontend',
          BACKEND: 'Backend',
          MOBILE: 'Mobile',
          DEVOPS: 'DevOps',
          TOOLS: 'Herramientas',
        },
        FILTER: { HIGHLIGHTED: 'Destacados' },
      },
    } as TranslationObject);
  }
}

// Mocks de datos
const mockCategories: SkillCategory[] = ['frontend', 'backend', 'devops', 'tools', 'soft'];

const filterAll: SkillFilter = { category: 'all', onlyHighlighted: false };
const filterFrontend: SkillFilter = { category: 'frontend', onlyHighlighted: false };
const filterHighlighted: SkillFilter = { category: 'backend', onlyHighlighted: true };

describe('SkillFilterComponent', () => {
  let fixture: ComponentFixture<SkillFilterComponent>;
  let component: SkillFilterComponent;
  let loader: HarnessLoader;

  async function createComponent(
    categories: SkillCategory[],
    activeFilter: SkillFilter,
  ): Promise<void> {
    fixture = TestBed.createComponent(SkillFilterComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('categories', categories);
    fixture.componentRef.setInput('activeFilter', activeFilter);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture); // <-- añadido
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SkillFilterComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
      ],
    });

    const translate = TestBed.inject(TranslateService);
    await translate.use('es').toPromise();
  });

  // Creación
  it('should create', async () => {
    await createComponent(mockCategories, filterAll);
    expect(component).toBeTruthy();
  });

  // Computed: allCategories
  it('should allCategories include all as first item', async () => {
    await createComponent(mockCategories, filterAll);
    expect(component.allCategories()[0]).toBe('all');
  });

  it('should allCategories length be categories + 1', async () => {
    await createComponent(mockCategories, filterAll);
    expect(component.allCategories().length).toBe(mockCategories.length + 1);
  });

  it('should allCategories contain all original categories', async () => {
    await createComponent(mockCategories, filterAll);
    expect(component.allCategories()).toEqual(['all', ...mockCategories]);
  });

  // Inputs
  it('should receive categories input correctly', async () => {
    await createComponent(mockCategories, filterAll);
    expect(component.categories()).toEqual(mockCategories);
  });

  it('should receive activeFilter input correctly', async () => {
    await createComponent(mockCategories, filterAll);
    expect(component.activeFilter()).toEqual(filterAll);
  });

  // Renderizado de botones
  it('should render one button per category plus highlighted button', async () => {
    await createComponent(mockCategories, filterAll);
    // allCategories (5 + 'all') + botón destacados = 7
    const buttons = fixture.debugElement.queryAll(By.css('.skill-filter__btn'));
    expect(buttons.length).toBe(mockCategories.length + 2); // +1 all, +1 highlighted
  });

  it('should render category labels from translations', async () => {
    await createComponent(mockCategories, filterAll);
    const buttons = fixture.debugElement.queryAll(By.css('.skill-filter__btn'));
    // Primer botón es 'Todos' (traducción de 'all')
    expect(buttons[0].nativeElement.textContent.trim()).toBe('Todos');
  });

  // Selección de categoría (antes: clase --active, ahora: aria-selected del ngOption)
  it('should mark all option as selected when filter is all', async () => {
    await createComponent(mockCategories, filterAll);
    const buttons = fixture.debugElement.queryAll(By.css('.skill-filter__btn'));
    expect(buttons[0].attributes['aria-selected']).toBe('true');
  });

  it('should mark frontend option as selected when filter is frontend', async () => {
    await createComponent(mockCategories, filterFrontend);
    const buttons = fixture.debugElement.queryAll(By.css('.skill-filter__btn'));
    // índice 1 = frontend (índice 0 es 'all')
    expect(buttons[1].attributes['aria-selected']).toBe('true');
  });

  it('should not mark other options as selected when frontend is selected', async () => {
    await createComponent(mockCategories, filterFrontend);
    const buttons = fixture.debugElement.queryAll(By.css('.skill-filter__btn'));
    // índice 0 = all, índice 2 = backend - ninguno debe estar seleccionado
    expect(buttons[0].attributes['aria-selected']).not.toBe('true');
    expect(buttons[2].attributes['aria-selected']).not.toBe('true');
  });

  // Clase activa (el botón de destacados no cambió: sigue siendo un <button> normal)
  it('should mark highlighted button as active when onlyHighlighted is true', async () => {
    await createComponent(mockCategories, filterHighlighted);
    const highlightBtn = fixture.debugElement.query(By.css('.skill-filter__btn--highlight'));
    expect(highlightBtn.classes['skill-filter__btn--active']).toBe(true);
  });

  it('should not mark highlighted button as active when onlyHighlighted is false', async () => {
    await createComponent(mockCategories, filterAll);
    const highlightBtn = fixture.debugElement.query(By.css('.skill-filter__btn--highlight'));
    expect(highlightBtn.classes['skill-filter__btn--active']).toBeFalsy();
  });

  // Output: filterChange al seleccionar categoría
  it('should emit category when category option is clicked', async () => {
    await createComponent(mockCategories, filterAll);
    let emitted: Partial<SkillFilter> | undefined;
    component.filterChange.subscribe((f: Partial<SkillFilter>) => (emitted = f));

    const listbox = await loader.getHarness(ListboxHarness);
    const options = await listbox.getOptions();
    await options[1].click();

    expect(emitted).toEqual({ category: 'frontend' });
  });

  it('should emit all when all option is clicked', async () => {
    await createComponent(mockCategories, filterFrontend);
    let emitted: Partial<SkillFilter> | undefined;
    component.filterChange.subscribe((f: Partial<SkillFilter>) => (emitted = f));

    const listbox = await loader.getHarness(ListboxHarness);
    const options = await listbox.getOptions();
    await options[0].click();

    expect(emitted).toEqual({ category: 'all' });
  });

  // Output: filterChange al togglear destacados
  it('should emit onlyHighlighted true when highlighted button is clicked and was false', async () => {
    await createComponent(mockCategories, filterAll);
    let emitted: Partial<SkillFilter> | undefined;
    component.filterChange.subscribe((f: Partial<SkillFilter>) => (emitted = f));

    fixture.debugElement
      .query(By.css('.skill-filter__btn--highlight'))
      .triggerEventHandler('click');

    expect(emitted).toEqual({ onlyHighlighted: true });
  });

  it('should emit onlyHighlighted false when highlighted button is clicked and was true', async () => {
    await createComponent(mockCategories, filterHighlighted);
    let emitted: Partial<SkillFilter> | undefined;
    component.filterChange.subscribe((f: Partial<SkillFilter>) => (emitted = f));

    fixture.debugElement
      .query(By.css('.skill-filter__btn--highlight'))
      .triggerEventHandler('click');

    expect(emitted).toEqual({ onlyHighlighted: false });
  });
});
