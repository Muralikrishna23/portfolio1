// pages/home/home.component.ts (Updated with work experience)
import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('heroSection', { static: false }) heroSection!: ElementRef;
  @ViewChild('skillsSection', { static: false }) skillsSection!: ElementRef;
  @ViewChild('heroText', { static: false }) heroText!: ElementRef;

  // Typewriter Effect
  currentText = '';
  isTyping = false;
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typewriterInterval: any;
  
  private texts = [
    'Software Developer',
    'Full Stack Developer', 
    
    'Problem Solver',
    'Tech Innovator'
  ];

  // Data - Updated stats to reflect current status
  stats = [
    { number: '7.30', label: 'GPA' },
    { number: '6+', label: 'Projects' },
    { number: '1+', label: 'Year Experience' }
  ];

  primaryTechs = ['Java', 'Angular', 'IoT', 'Spring Boot'];

  skillCategories = [
    {
      icon: '💻',
      title: 'Programming',
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python'],
      level: 85
    },
    {
      icon: '🌐',
      title: 'Web Development',
      skills: ['Angular', 'Spring Boot', 'HTML/CSS', 'REST APIs'],
      level: 80
    },
    {
      icon: '🔧',
      title: 'IoT & Systems',
      skills: ['IoT Development', 'Embedded Systems', 'Linux'],
      level: 75
    },
    {
      icon: '📡',
      title: 'Electronics',
      skills: ['HFSS ANSYS', 'Circuit Design', 'RF Engineering'],
      level: 70
    }
  ];

  featuredProjects = [
    {
      title: 'Forest Fire Detection System',
      category: 'IoT & Hardware',
      description: 'IoT-based system detecting forest fires and sending GPS location alerts to forest officers via SMS for rapid emergency response.',
      image: 'https://images.unsplash.com/photo-1574263867128-feac5c20b1ed?w=400&h=300&fit=crop',
      technologies: ['IoT Sensors', 'GPS', 'SMS Gateway', 'Microcontrollers'],
      status: 'completed',
      highlights: [
        { label: 'Response Time', value: 'Real-time' },
        { label: 'Coverage', value: 'Wide Area' }
      ],
      hasDemo: false
    },
    {
      title: 'ELibrary Management System',
      category: 'Web Development',
      description: 'Full-stack library management platform with admin controls for inventory and customer interface for book browsing and purchasing.',
      image: ' ',
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
      status: 'completed',
      highlights: [
        { label: 'User Roles', value: '2 Types' },
        { label: 'Database', value: 'MySQL' }
      ],
      hasDemo: true
    },
    {
      title: 'Enterprise Web Application',
      category: 'Professional Work',
      description: 'Currently developing scalable web applications using modern technologies in a professional environment.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      technologies: ['Java', 'Spring Boot', 'Angular', 'Microservices'],
      status: 'in-progress',
      highlights: [
        { label: 'Architecture', value: 'Microservices' },
        { label: 'Scale', value: 'Enterprise' }
      ],
      hasDemo: false
    }
  ];

  coreStrengths = ['Self-confident', 'Hard working', 'Problem solving', 'Fast learner'];

  // Updated timeline to include work experience
  journeyTimeline = [
    {
      year: '2024-Present',
      title: 'Software Developer',
      institution: 'Professional Experience',
      gpa: 'Current Role',
      isActive: true,
      type: 'work',
      description: 'Working as a Full Stack Developer, building enterprise web applications'
    },
    {
      year: '2019-2023',
      title: 'B.Tech ECE',
      institution: 'Gudlavalleru Engineering College',
      gpa: '7.30',
      isActive: false,
      type: 'education',
      description: 'Electronics & Communication Engineering degree'
    },
    {
      year: '2022',
      title: 'IoT Internship',
      institution: 'Forest Fire Detection Project',
      gpa: 'Completed',
      isActive: false,
      type: 'internship',
      description: 'Developed IoT-based forest fire detection system'
    },
    {
      year: '2017-2019', 
      title: 'Intermediate',
      institution: 'Narayana Junior College',
      gpa: '9.63',
      isActive: false,
      type: 'education',
      description: 'Intermediate education with focus on Mathematics, Physics, Chemistry'
    }
  ];

  ngOnInit() {
    this.startTypewriter();
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
    }
  }

  private startTypewriter() {
    this.typewriterInterval = setInterval(() => {
      this.updateTypewriter();
    }, 100);
  }

  private updateTypewriter() {
    const currentFullText = this.texts[this.textIndex];
    
    if (!this.isDeleting) {
      this.currentText = currentFullText.substring(0, this.charIndex + 1);
      this.charIndex++;
      this.isTyping = true;

      if (this.charIndex === currentFullText.length) {
        this.isTyping = false;
        setTimeout(() => {
          this.isDeleting = true;
        }, 2000);
      }
    } else {
      this.currentText = currentFullText.substring(0, this.charIndex - 1);
      this.charIndex--;
      this.isTyping = true;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.isTyping = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
      }
    }
  }

  private setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, options);

    // Observe skill cards and project cards
    document.querySelectorAll('.skill-category, .project-card').forEach((el) => {
      observer.observe(el);
    });
  }
}