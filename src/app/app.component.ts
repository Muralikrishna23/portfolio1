// app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading = true;
  loadingProgress = 0;
  showScrollTop = false;

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.startLoading();
    this.setupScrollListener();
    this.setupCustomCursor();
  }

  private startLoading() {
    const interval = setInterval(() => {
      this.loadingProgress += Math.random() * 15;
      if (this.loadingProgress >= 100) {
        this.loadingProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    }, 100);
  }

  private setupScrollListener() {
    window.addEventListener('scroll', () => {
      this.showScrollTop = window.pageYOffset > 300;
    });
  }

  private setupCustomCursor() {
    if (window.innerWidth > 768) {
      document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.custom-cursor') as HTMLElement;
        const cursorDot = document.querySelector('.custom-cursor-dot') as HTMLElement;
        
        if (cursor && cursorDot) {
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
          cursorDot.style.left = e.clientX + 'px';
          cursorDot.style.top = e.clientY + 'px';
        }
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}