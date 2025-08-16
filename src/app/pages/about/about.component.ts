import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimationService } from '../../services/animation.service';
import { PortfolioService } from '../../services/portfolio.service';
import { Skill } from '../../data/skills.data';

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  description: string;
  achievements?: string[];
}

interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  type: 'work' | 'internship';
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private animationService = inject(AnimationService);
  private portfolioService = inject(PortfolioService);

  education: Education[] = [
    {
      id: '1',
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Gudlavalleru Engineering College',
      location: 'Gudlavalleru, Andhra Pradesh',
      duration: '06/2019 - 04/2023',
      gpa: '7.30',
      description: 'Specialized in digital electronics, communication systems, and embedded programming. Gained strong foundation in problem-solving and analytical thinking.',
      achievements: [
        'Completed multiple IoT and automation projects',
        'Strong academic performance in core subjects',
        'Active participation in technical workshops'
      ]
    },
    {
      id: '2',
      degree: 'Intermediate (Board of Intermediate Education, AP)',
      institution: 'Narayana Junior Inter College',
      location: 'Gudivada, Andhra Pradesh',
      duration: '06/2017 - 04/2019',
      gpa: '9.63',
      description: 'Focused on Mathematics, Physics, and Chemistry with excellent academic performance.',
      achievements: [
        'Achieved 9.63 GPA with distinction',
        'Strong foundation in mathematics and science',
        'Developed analytical and problem-solving skills'
      ]
    },
    {
      id: '3',
      degree: 'SSC (Board of Secondary Education, AP)',
      institution: 'Ravindra Bharathi School',
      location: 'Gudivada, Andhra Pradesh',
      duration: '06/2016 - 05/2017',
      gpa: '9.0',
      description: 'Completed secondary education with strong academic foundation across all subjects.',
      achievements: [
        'Achieved 9.0 GPA',
        'Well-rounded education in all subjects',
        'Developed strong communication skills'
      ]
    }
  ];

  experience: Experience[] = [
    {
      id: '1',
      position: 'Software Developer',
      company: 'Samtex Solutions',
      location: 'India',
      duration: '2024-10-04 - Present',
      type: 'work',
      description: 'Developing cutting-edge web applications and IoT device monitoring systems using modern technologies.',
      responsibilities: [
        'Design and develop web applications using Spring Boot and Java',
        'Create IoT device monitoring systems with real-time data visualization',
        'Implement Python-based solutions for data processing and analysis',
        'Collaborate with cross-functional teams to deliver high-quality software',
        'Optimize application performance and ensure scalability',
        'Participate in code reviews and maintain high coding standards'
      ],
      technologies: ['Spring Boot', 'Java', 'Python', 'IoT Monitoring', 'Data Visualization', 'REST APIs'],
      achievements: [
        'Successfully delivered multiple IoT monitoring solutions',
        'Improved system performance by implementing efficient data processing',
        'Contributed to architectural decisions for scalable applications'
      ]
    },
    {
      id: '2',
      position: 'IoT Development Intern',
      company: 'SmartInternz',
      location: 'India',
      duration: '2022-01-01 - 2022-06-30',
      type: 'internship',
      description: 'Developed an IoT-based forest fire detection system that monitors environmental conditions and sends alerts.',
      responsibilities: [
        'Designed and implemented IoT sensors for fire detection',
        'Developed real-time monitoring and alert system',
        'Created SMS notification system for emergency alerts',
        'Programmed microcontrollers for sensor data collection',
        'Tested and validated system reliability in various conditions'
      ],
      technologies: ['IoT', 'Arduino', 'Sensors', 'SMS Gateway', 'C++', 'Embedded Systems'],
      achievements: [
        'Successfully created working prototype of fire detection system',
        'Implemented reliable communication system for emergency alerts',
        'Gained practical experience in IoT development and deployment'
      ]
    }
  ];

  skills: Skill[] = [];

  personalInfo = {
    name: 'Muralikrishna Jakkamsetti',
    email: 'jakkamsettimuralikrishna2000@gmail.com',
    phone: '+919346098278',
    location: 'Pedapalaparru, 521323, Eluru Dst., India',
    github: 'https://github.com/Muralikrishna23',
    linkedin: 'https://www.linkedin.com/in/muralikrishna-jakkamsetti-57bb901b7/',
    yearsOfExperience: this.calculateExperience(),
    currentPosition: 'Software Developer at Samtex Solutions'
  };

  strengths = [
    {
      title: 'Self-Confident',
      description: 'Approach challenges with confidence and a positive mindset',
      icon: '💪'
    },
    {
      title: 'Hard Working',
      description: 'Dedicated to delivering high-quality work with consistent effort',
      icon: '🎯'
    },
    {
      title: 'Problem Solving',
      description: 'Excel at analyzing complex problems and finding innovative solutions',
      icon: '🧩'
    },
    {
      title: 'Fast Learner',
      description: 'Quickly adapt to new technologies and methodologies',
      icon: '⚡'
    }
  ];

  interests = [
    'Web Development',
    'IoT Solutions',
    'Open Source Contribution',
    'Technology Innovation'
  ];

  calculateExperience(): number {
    const startDate = new Date('2024-10-04'); // Approximate start date
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
    return diffYears;
  }

  ngOnInit() {
    this.animationService.initializeScrollAnimations();
    this.loadSkills();
  }

  loadSkills() {
    this.portfolioService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getUniqueCategories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }

  downloadResume() {
    // In a real application, you would link to your actual resume file
    const link = document.createElement('a');
    link.href = '/assets/resume/Muralikrishna_Jakkamsetti_Resume.pdf';
    link.download = 'Muralikrishna_Jakkamsetti_Resume.pdf';
    link.click();
  }

  openSocialLink(url: string) {
    window.open(url, '_blank');
  }

  sendEmail() {
    window.location.href = `mailto:${this.personalInfo.email}`;
  }

  callPhone() {
    window.location.href = `tel:${this.personalInfo.phone}`;
  }
}