import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  OFFLINE,
  OFFLINE_COLOR,
  OFFLINE_OFFSET_COLOR,
  ONLINE_COLOR,
  ONLINE_OFFSET_COLOR,
} from '@core/constants/status.constants';

import { StatusDotComponent } from './status-dot.component';

describe('StatusDotComponent', () => {
  let component: StatusDotComponent;
  let fixture: ComponentFixture<StatusDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusDotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StatusDotComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set ONLINE colors by default or when status is not OFFLINE', () => {
    fixture.componentRef.setInput('status', 'Online');
    fixture.detectChanges();

    expect(component.selectedColor()).toBe(ONLINE_COLOR);
    expect(component.selectedOffsetColor()).toBe(ONLINE_OFFSET_COLOR);
  });

  it('should set OFFLINE colors when status is OFFLINE', () => {
    fixture.componentRef.setInput('status', OFFLINE);
    fixture.detectChanges();

    expect(component.selectedColor()).toBe(OFFLINE_COLOR);
    expect(component.selectedOffsetColor()).toBe(OFFLINE_OFFSET_COLOR);
  });

  it('should update SVG custom properties for glow effect', () => {
    fixture.componentRef.setInput('status', 'Online');
    fixture.detectChanges();

    const svgElement = fixture.nativeElement.querySelector('svg');

    expect(svgElement.style.getPropertyValue('--dot-color')).toBe(ONLINE_COLOR);
    expect(svgElement.style.getPropertyValue('--dot-glow-high')).toBe(ONLINE_COLOR);
  });

  it('should update gradient stop colors in the SVG DOM', () => {
    fixture.componentRef.setInput('status', OFFLINE);
    fixture.detectChanges();

    const stops = fixture.nativeElement.querySelectorAll('stop');

    expect(stops[0].getAttribute('stop-color')).toBe(OFFLINE_COLOR);
    expect(stops[1].getAttribute('stop-color')).toBe(OFFLINE_OFFSET_COLOR);
  });

  it('should transition from online to offline reactively', () => {
    fixture.componentRef.setInput('status', 'Online');
    fixture.detectChanges();
    expect(component.selectedColor()).toBe(ONLINE_COLOR);

    fixture.componentRef.setInput('status', OFFLINE);
    fixture.detectChanges();
    expect(component.selectedColor()).toBe(OFFLINE_COLOR);
  });
});
