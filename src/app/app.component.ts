import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'total-grade-calculator';

  readonly NOT_FOUND = -1;

  availableThemes: string[] = [
    'dark-theme',
    'light-theme'
  ]

  selectedTheme: string = 'dark-theme';

  onSetTheme(theme: string): void {
    // Ignore any actions when the theme
    // is the same as the current selected theme.
    if (theme === this.selectedTheme) {
      return;
    } else {
      this.updateTheme(theme);
    }
  }

  private updateTheme(theme: string) {
    const themeIndex = this.availableThemes.indexOf(theme);
    if (themeIndex === this.NOT_FOUND) {
      console.error(`Unknown theme provided: ${theme}`);
    } else {
      if (this.selectedTheme) {
        document.body.classList.remove(this.selectedTheme);
      }
      
      this.selectedTheme = theme;
      document.body.classList.add(this.selectedTheme);
    }
  }
}
