import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslationObject, provideTranslateService } from '@ngx-translate/core';
import { GsapService } from '@shared-libs/services';
import { Observable, of } from 'rxjs';

import { provideZonelessChangeDetection } from '@angular/core';
import { StatCounterComponent } from './stat-counter.component';

class MockTranslateLoader implements TranslateLoader {
  getTranslation(): Observable<TranslationObject> {
    return of({} as TranslationObject);
  }
}

describe('StatCounterComponent', () => {
  let component: StatCounterComponent;
  let fixture: ComponentFixture<StatCounterComponent>;
  let tweenKill: jest.Mock;
  let gsapToMock: jest.Mock;

  beforeEach(async () => {
    tweenKill = jest.fn();
    gsapToMock = jest.fn((proxy: { value: number }, opts: Record<string, unknown>) => {
      const target = opts.value as number;
      proxy.value = target * 0.5;
      (opts.onUpdate as (() => void) | undefined)?.();
      proxy.value = target;
      (opts.onUpdate as (() => void) | undefined)?.();
      (opts.onComplete as (() => void) | undefined)?.();
      return { kill: tweenKill };
    });

    await TestBed.configureTestingModule({
      imports: [StatCounterComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideTranslateService({
          loader: { provide: TranslateLoader, useClass: MockTranslateLoader },
        }),
        { provide: GsapService, useValue: { gsap: { to: gsapToMock } } },
      ],
    }).compileComponents();
  });

  async function setupInputs(
    options: { animate?: boolean; startDelay?: number } = {},
  ): Promise<void> {
    const { animate = false, startDelay = 0 } = options;
    fixture = TestBed.createComponent(StatCounterComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('icon', 'test-icon');
    fixture.componentRef.setInput('label', 'Test label');
    fixture.componentRef.setInput('finalValue', 42);
    fixture.componentRef.setInput('startDelay', startDelay);
    fixture.componentRef.setInput('shouldStartAnimation', animate);
    fixture.detectChanges();
    await fixture.whenStable();
  }

  it('should create without starting animation when shouldStartAnimation is false', async () => {
    await setupInputs({ animate: false });
    expect(component).toBeTruthy();
    expect(gsapToMock).not.toHaveBeenCalled();
    expect(component.displayValue()).toBe(0);
  });

  it('should run GSAP tween when shouldStartAnimation becomes true', async () => {
    await setupInputs({ animate: true });

    expect(gsapToMock).toHaveBeenCalledWith(
      expect.objectContaining({ value: expect.any(Number) }),
      expect.objectContaining({
        value: 42,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0,
      }),
    );
    expect(component.displayValue()).toBe(42);
  });

  it('should pass startDelay to tween options in seconds', async () => {
    await setupInputs({ animate: true, startDelay: 500 });

    expect(gsapToMock).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        delay: 0.5,
      }),
    );
  });

  it('should register tween kill on destroy', async () => {
    await setupInputs({ animate: true });
    fixture.destroy();
    expect(tweenKill).toHaveBeenCalled();
  });
});
