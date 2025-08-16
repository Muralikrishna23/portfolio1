// components/footer/footer.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  
  quickLinks = [
    { label: 'Home', route: '/', icon: '🏠' },
    { label: 'Projects', route: '/work', icon: '💼' },
    { label: 'About', route: '/about', icon: '👨‍💻' },
    { label: 'Contact', route: '/contact', icon: '📧' }
  ];

  socialLinks = [
    {
      platform: 'GitHub',
      url: 'https://github.com/Muralikrishna23',
      icon: 'github',
      username: '@Muralikrishna23',
      followers: 45
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muralikrishnajakkamsetti-57bb901b7/',
      icon: 'linkedin',
      username: 'Muralikrishna Jakkamsetti',
      followers: 250
    },
    {
      platform: 'Email',
      url: 'mailto:jakkamsettimuralikrishna2000@gmail.com',
      icon: 'email',
      username: 'jakkamsettimuralikrishna2000@gmail.com',
      followers: 0
    }
  ];

  techStack = [
    'Java', 'JavaScript', 'TypeScript', 'Angular', 'IoT', 'Arduino', 'MySQL', 'Linux'
  ];

  stats = [
    { label: 'Projects Completed', value: '4+', icon: '🚀' },
    { label: 'Technologies', value: '15+', icon: '⚡' },
    { label: 'Years Learning', value: '4+', icon: '📚' },
    { label: 'Code Commits', value: '500+', icon: '💻' }
  ];

  ngOnInit() {
    this.animateStats();
  }

  private animateStats() {
    // Simple animation for stats - can be enhanced with more sophisticated animations
    setTimeout(() => {
      const statElements = document.querySelectorAll('.stat-number');
      statElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-in');
        }, index * 200);
      });
    }, 500);
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Newsletter subscription (placeholder - would integrate with actual service)
  subscribeToNewsletter(email: string) {
    if (email && this.isValidEmail(email)) {
      console.log('Newsletter subscription:', email);
      // Here you would integrate with your newsletter service
      alert('Thank you for subscribing! 🎉');
    } else {
      alert('Please enter a valid email address.');
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Get current status
  getCurrentStatus(): string {
    const hour = new Date().getHours();
    if (hour >= 9 && hour <= 18) {
      return 'Available for opportunities';
    } else {
      return 'Available (will respond within 24h)';
    }
  }

  // Download resume functionality
  downloadResume() {
    // This would link to your actual resume file
    const resumeUrl = '/assets/resume/Muralikrishna_Jakkamsetti_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Muralikrishna_Jakkamsetti_Resume.pdf';
    link.click();
  }
}