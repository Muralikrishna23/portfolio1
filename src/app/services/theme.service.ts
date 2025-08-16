// services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _currentTheme: 'light' | 'dark' = 'light';

  constructor() {
    this.loadTheme();
  }

  get currentTheme(): 'light' | 'dark' {
    return this._currentTheme;
  }

  toggleTheme() {
    this._currentTheme = this._currentTheme === 'light' ? 'dark' : 'light';
    this.saveTheme();
    document.documentElement.setAttribute('data-theme', this._currentTheme);
  }

  private loadTheme() {
    const saved = localStorage.getItem('theme') as 'light' | 'dark';
    if (saved) {
      this._currentTheme = saved;
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this._currentTheme = prefersDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', this._currentTheme);
  }

  private saveTheme() {
    localStorage.setItem('theme', this._currentTheme);
  }
}