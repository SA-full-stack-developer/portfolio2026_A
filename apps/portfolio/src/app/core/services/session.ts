import { Service, signal } from '@angular/core';

@Service()
export class SessionService {
  private readonly ADMIN_KEY = 'admin_session';
  private readonly _isAdmin = signal<boolean>(this.loadFromStorage());

  readonly isAdmin = this._isAdmin.asReadonly();

  setAdmin(value: boolean): void {
    if (value) {
      sessionStorage.setItem(this.ADMIN_KEY, 'true');
    } else {
      sessionStorage.removeItem(this.ADMIN_KEY);
    }
    this._isAdmin.set(value);
  }

  private loadFromStorage(): boolean {
    if (typeof sessionStorage === 'undefined') return false;
    return sessionStorage.getItem(this.ADMIN_KEY) === 'true';
  }
}
