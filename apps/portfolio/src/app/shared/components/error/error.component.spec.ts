import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Error display', () => {
    it('should not display error container when error is null', () => {
      fixture.componentRef.setInput('error', null);
      fixture.detectChanges();

      const errorContainer = fixture.debugElement.query(By.css('.error-container'));
      expect(errorContainer).toBeFalsy();
    });

    it('should not display error container when error is undefined', () => {
      fixture.componentRef.setInput('error', undefined);
      fixture.detectChanges();

      const errorContainer = fixture.debugElement.query(By.css('.error-container'));
      expect(errorContainer).toBeFalsy();
    });

    it('should not display error container when error is empty string', () => {
      fixture.componentRef.setInput('error', '');
      fixture.detectChanges();

      const errorContainer = fixture.debugElement.query(By.css('.error-container'));
      expect(errorContainer).toBeFalsy();
    });

    it('should display error container when error has a value', () => {
      const errorMessage = 'This is an error message';
      fixture.componentRef.setInput('error', errorMessage);
      fixture.detectChanges();

      const errorContainer = fixture.debugElement.query(By.css('.error-container'));
      expect(errorContainer).toBeTruthy();
    });

    it('should display the correct error message', () => {
      const errorMessage = 'Test error message';
      fixture.componentRef.setInput('error', errorMessage);
      fixture.detectChanges();

      const errorText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
      expect(errorText.trim()).toBe(errorMessage);
    });

    it('should display the error icon', () => {
      const errorMessage = 'Error occurred';
      fixture.componentRef.setInput('error', errorMessage);
      fixture.detectChanges();

      const icon = fixture.debugElement.query(By.css('mat-icon'));
      expect(icon).toBeTruthy();
      expect(icon.nativeElement.textContent.trim()).toBe('error_outline');
    });

    it('should have the correct CSS class on error container', () => {
      const errorMessage = 'Error';
      fixture.componentRef.setInput('error', errorMessage);
      fixture.detectChanges();

      const errorContainer = fixture.debugElement.query(By.css('.error-container'));
      expect(errorContainer.nativeElement.classList).toContain('error-container');
      expect(errorContainer.nativeElement.classList).toContain('flex');
      expect(errorContainer.nativeElement.classList).toContain('align-center');
    });

    it('should update the error message when input changes', () => {
      fixture.componentRef.setInput('error', 'First error');
      fixture.detectChanges();

      let errorText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
      expect(errorText.trim()).toBe('First error');

      fixture.componentRef.setInput('error', 'Second error');
      fixture.detectChanges();

      errorText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
      expect(errorText.trim()).toBe('Second error');
    });

    it('should hide error when input changes to null', () => {
      fixture.componentRef.setInput('error', 'Error');
      fixture.detectChanges();

      let errorContainer = fixture.debugElement.query(By.css('.error-container'));
      expect(errorContainer).toBeTruthy();

      fixture.componentRef.setInput('error', null);
      fixture.detectChanges();

      errorContainer = fixture.debugElement.query(By.css('.error-container'));
      expect(errorContainer).toBeFalsy();
    });
  });

  describe('Accessibility', () => {
    it('should have aria-hidden on the icon', () => {
      fixture.componentRef.setInput('error', 'Error');
      fixture.detectChanges();

      const icon = fixture.debugElement.query(By.css('mat-icon'));
      expect(icon.nativeElement.getAttribute('aria-hidden')).toBe('true');
    });

    it('should have role presentation on the icon', () => {
      fixture.componentRef.setInput('error', 'Error');
      fixture.detectChanges();

      const icon = fixture.debugElement.query(By.css('mat-icon'));
      expect(icon.nativeElement.getAttribute('role')).toBe('img');
    });
  });
});
