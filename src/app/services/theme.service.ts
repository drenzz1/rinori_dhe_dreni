import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tokens, themeSettings } from 'src/app/common/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private mode: BehaviorSubject<'light' | 'dark'> = new BehaviorSubject<'light' | 'dark'>('light');
  public mode$ = this.mode.asObservable();

  setMode(mode: 'light' | 'dark') {
    this.mode.next(mode);
    localStorage.setItem('theme', mode);
  }

  getThemeSettings() {
    return themeSettings(this.mode.value);
  }

  getTokens() {
    return tokens(this.mode.value);
  }

  constructor() {
    const savedMode = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedMode) {
      this.mode.next(savedMode);
    }
  }
}
