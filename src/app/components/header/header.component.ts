// components/header/header.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isScrolled = false;

  constructor(public themeService: ThemeService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 10;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (window.innerWidth >= 1024) {
      this.isMenuOpen = false;
    }
  }

  ngOnInit() {
    // Close menu on route change
    // You can inject Router and subscribe to route changes if needed
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}