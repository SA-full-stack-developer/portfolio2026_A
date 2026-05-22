import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideZonelessChangeDetection } from '@angular/core';
import { By } from '@angular/platform-browser';
import { IconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  async function createComponent(name: string, size: number): Promise<void> {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('name', name);
    fixture.componentRef.setInput('size', size);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
  }

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [IconComponent],
      providers: [provideZonelessChangeDetection()],
    });
  });

  it('should create', async () => {
    await createComponent('test-icon', 24);
    expect(component).toBeTruthy();
  });

  it('should have default size of 24', async () => {
    await createComponent('test-icon', 24);
    expect(component.size()).toBe(24);
  });

  it('should render svg with correct width and height', async () => {
    await createComponent('test-icon', 24);
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg.attributes['width']).toBe('24');
    expect(svg.attributes['height']).toBe('24');
  });

  it('should update svg size when size input changes', async () => {
    await createComponent('test-icon', 48);
    fixture.detectChanges();
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg.attributes['width']).toBe('48');
    expect(svg.attributes['height']).toBe('48');
  });

  it('should set use href attribute based on name input', async () => {
    await createComponent('test-icon', 24);
    fixture.detectChanges();
    const useElement = fixture.debugElement.query(By.css('use'));
    expect(useElement.attributes['href']).toBe('/assets/icons/sprite.svg#ph-test-icon');
  });

  it('should update use href when name input changes', async () => {
    await createComponent('another-icon', 24);
    fixture.detectChanges();
    const useElement = fixture.debugElement.query(By.css('use'));
    expect(useElement.attributes['href']).toBe('/assets/icons/sprite.svg#ph-another-icon');
  });

  it('should have svg with aria-hidden attribute set to true', async () => {
    await createComponent('test-icon', 24);
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg.attributes['aria-hidden']).toBe('true');
  });

  it('should have svg with class "icon"', async () => {
    await createComponent('test-icon', 24);
    const svg = fixture.debugElement.query(By.css('svg'));
    expect(svg.classes['icon']).toBeTruthy();
  });
});
