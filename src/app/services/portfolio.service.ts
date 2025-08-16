// services/portfolio.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Project } from '../interfaces/project';
import { Skill, SKILLS_DATA } from '../data/skills.data';

// Define interfaces locally since they don't exist yet
interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  type: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  gpa: number;
  status: string;
}

// Sample data for projects since PROJECTS_DATA doesn't exist yet
const SAMPLE_PROJECTS_DATA: Project[] = [
  {
    id: 'elibrary-management',
    title: 'ELibrary Website',
    description: 'A comprehensive library management system built with Java Servlets, JSP, and JDBC',
    longDescription: 'Full-featured library management system with user authentication, book catalog, and administrative functions.',
    category: 'web-development',
    technologies: ['Java', 'Servlets', 'JSP', 'JDBC', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    image: '/assets/images/projects/elibrary.jpg',
    status: 'completed',
    featured: true,
    startDate: '2022-06-01',
    endDate: '2022-09-01',
    duration: '3 months',
    githubUrl: 'https://github.com/Muralikrishna23/elibrary',
    highlights: [
      { label: 'Users', value: '500+', icon: '👥' },
      { label: 'Books', value: '1000+', icon: '📚' }
    ],
    results: [
      { metric: 'Performance', value: '98%', description: 'User satisfaction' }
    ],
    challenges: ['Implementing secure authentication', 'Database optimization'],
    solutions: ['Used prepared statements', 'Connection pooling'],
    learnings: ['Advanced JDBC', 'Web security', 'MVC architecture'],
    teamSize: 1,
    role: 'Full Stack Developer',
    responsibilities: ['Database design', 'Backend development', 'Frontend creation'],
    tags: ['Web Development', 'Java', 'Database'],
    priority: 1
  },
  {
    id: 'forest-fire-detection',
    title: 'Forest Fire Detection System',
    description: 'IoT-based system for early detection of forest fires with SMS alerts',
    longDescription: 'Real-time monitoring system using sensors to detect fire conditions and alert forest officers.',
    category: 'iot-hardware',
    technologies: ['IoT', 'Arduino', 'Sensors', 'SMS Gateway', 'C++', 'GPS'],
    image: '/assets/images/projects/forest-fire.jpg',
    status: 'completed',
    featured: true,
    startDate: '2022-01-01',
    endDate: '2022-07-01',
    duration: '6 months',
    githubUrl: 'https://github.com/Muralikrishna23/forest-fire-detection',
    highlights: [
      { label: 'Accuracy', value: '95%', icon: '🔥' },
      { label: 'Response Time', value: '< 30s', icon: '⏱️' }
    ],
    results: [
      { metric: 'Detection Rate', value: '95%', description: 'Fire detection accuracy' }
    ],
    challenges: ['Power management', 'Wireless communication', 'False positives'],
    solutions: ['Solar power system', 'GSM module', 'Sensor fusion'],
    learnings: ['IoT architecture', 'Sensor integration', 'Remote monitoring'],
    teamSize: 2,
    role: 'IoT Developer & Project Lead',
    responsibilities: ['Sensor integration', 'Microcontroller programming', 'Testing'],
    tags: ['IoT', 'Environmental', 'Emergency Systems'],
    priority: 1
  },
  {
    id: 'voice-home-automation',
    title: 'Voice Controlled Home Automation',
    description: 'Accessibility-focused home automation system for people with disabilities',
    longDescription: 'Voice-controlled system for people with disabilities to control home appliances.',
    category: 'iot-hardware',
    technologies: ['Arduino', 'Voice Recognition', 'Relay Modules', 'Bluetooth', 'Android'],
    image: '/assets/images/projects/home-automation.jpg',
    status: 'completed',
    featured: true,
    startDate: '2021-08-01',
    endDate: '2021-12-01',
    duration: '4 months',
    githubUrl: 'https://github.com/Muralikrishna23/voice-home-automation',
    highlights: [
      { label: 'Voice Accuracy', value: '92%', icon: '🗣️' },
      { label: 'Appliances', value: '8', icon: '🏠' }
    ],
    results: [
      { metric: 'User Satisfaction', value: '4.8/5', description: 'Accessibility testing' }
    ],
    challenges: ['Voice recognition', 'Appliance control', 'User interface'],
    solutions: ['Noise filtering', 'Relay modules', 'Simple commands'],
    learnings: ['Voice processing', 'Accessibility design', 'Human-computer interaction'],
    teamSize: 3,
    role: 'Embedded Systems Developer',
    responsibilities: ['Voice recognition', 'Circuit design', 'Mobile app'],
    tags: ['Accessibility', 'Voice Control', 'Home Automation'],
    priority: 2
  },
  {
    id: 'reconfigurable-antenna',
    title: 'Hybrid Reconfigurable Antenna Design',
    description: 'Advanced antenna design for multiple wireless communication applications',
    longDescription: 'Antenna system capable of adapting to different wireless standards.',
    category: 'research-design',
    technologies: ['HFSS ANSYS', 'RF Design', 'Simulation', 'Antenna Theory', 'MATLAB'],
    image: '/assets/images/projects/antenna-design.jpg',
    status: 'completed',
    featured: false,
    startDate: '2021-01-01',
    endDate: '2021-09-01',
    duration: '8 months',
    highlights: [
      { label: 'Frequency Range', value: '2.4-5.8 GHz', icon: '📡' },
      { label: 'Gain', value: '12 dBi', icon: '📶' }
    ],
    results: [
      { metric: 'Performance', value: 'Superior', description: 'All target frequencies' }
    ],
    challenges: ['Multiple frequencies', 'Interference', 'Size optimization'],
    solutions: ['Reconfigurable elements', 'Optimization algorithms', 'Compact design'],
    learnings: ['Electromagnetic theory', 'RF simulation', 'Antenna design'],
    teamSize: 2,
    role: 'RF Design Engineer',
    responsibilities: ['Simulation', 'Optimization', 'Analysis'],
    tags: ['RF Engineering', 'Research', 'Antenna Design'],
    priority: 3
  },
  {
    id: 'campus-management',
    title: 'Smart Campus Management System',
    description: 'Comprehensive web application for educational institution management',
    longDescription: 'Full-stack application for student management, courses, and administration.',
    category: 'web-development',
    technologies: ['Spring Boot', 'Java', 'Angular', 'PostgreSQL', 'JWT', 'REST API'],
    image: '/assets/images/projects/campus-management.jpg',
    status: 'in-progress',
    featured: true,
    startDate: '2023-01-01',
    endDate: '2023-06-01',
    duration: '5 months',
    githubUrl: 'https://github.com/Muralikrishna23/campus-management',
    highlights: [
      { label: 'Users', value: '5000+', icon: '👥' },
      { label: 'Modules', value: '8', icon: '📚' }
    ],
    results: [
      { metric: 'Concurrent Users', value: '5000+', description: 'System capacity' }
    ],
    challenges: ['User management', 'Performance', 'Integration'],
    solutions: ['Role-based access', 'Optimization', 'API design'],
    learnings: ['Enterprise development', 'Security', 'Scalability'],
    teamSize: 5,
    role: 'Full Stack Developer',
    responsibilities: ['Backend development', 'API design', 'Frontend integration'],
    tags: ['Enterprise', 'Education', 'Spring Boot'],
    priority: 2
  }
];

// Sample experience data
const SAMPLE_EXPERIENCE_DATA: Experience[] = [
  {
    id: 'samtex-solutions',
    position: 'Software Developer',
    company: 'Samtex Solutions',
    location: 'India',
    startDate: '2023-05-01',
    current: true,
    type: 'full-time',
    description: 'Developing web applications and IoT monitoring systems using Spring Boot, Java, and Python.',
    responsibilities: [
      'Design and develop scalable web applications',
      'Create IoT device monitoring systems',
      'Implement Python-based data processing solutions'
    ],
    achievements: [
      'Delivered 5+ IoT monitoring solutions',
      'Improved system performance by 40%',
      'Led microservices architecture development'
    ],
    technologies: ['Spring Boot', 'Java', 'Python', 'IoT Monitoring', 'REST APIs']
  }
];

// Sample education data
const SAMPLE_EDUCATION_DATA: Education[] = [
  {
    id: 'btech-ece',
    degree: 'Bachelor of Technology',
    field: 'Electronics and Communication Engineering',
    institution: 'Gudlavalleru Engineering College',
    location: 'Gudlavalleru, Andhra Pradesh',
    startYear: '2019',
    endYear: '2023',
    gpa: 7.30,
    status: 'completed'
  },
  {
    id: 'intermediate',
    degree: 'Intermediate',
    field: 'Mathematics, Physics, Chemistry',
    institution: 'Narayana Junior Inter College',
    location: 'Gudivada, Andhra Pradesh',
    startYear: '2017',
    endYear: '2019',
    gpa: 9.63,
    status: 'completed'
  },
  {
    id: 'ssc',
    degree: 'SSC',
    field: 'General Education',
    institution: 'Ravindra Bharathi School',
    location: 'Gudivada, Andhra Pradesh',
    startYear: '2016',
    endYear: '2017',
    gpa: 9.0,
    status: 'completed'
  }
];

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private projectsSubject = new BehaviorSubject<Project[]>(SAMPLE_PROJECTS_DATA);
  private skillsSubject = new BehaviorSubject<Skill[]>(SKILLS_DATA);
  private experienceSubject = new BehaviorSubject<Experience[]>(SAMPLE_EXPERIENCE_DATA);
  private educationSubject = new BehaviorSubject<Education[]>(SAMPLE_EDUCATION_DATA);

  // Observables
  projects$ = this.projectsSubject.asObservable();
  skills$ = this.skillsSubject.asObservable();
  experience$ = this.experienceSubject.asObservable();
  education$ = this.educationSubject.asObservable();

  constructor() {}

  // Project Methods
  getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  // ADD THIS METHOD - Required by work component
  getAllProjects(): Project[] {
    return this.projectsSubject.value;
  }

  getFeaturedProjects(): Observable<Project[]> {
    const featured = this.projectsSubject.value.filter(project => project.featured);
    return of(featured);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    const project = this.projectsSubject.value.find(p => p.id === id);
    return of(project);
  }

  getProjectsByCategory(category: string): Observable<Project[]> {
    const filtered = this.projectsSubject.value.filter(
      project => project.category.toLowerCase() === category.toLowerCase()
    );
    return of(filtered);
  }

  getProjectsByTechnology(tech: string): Observable<Project[]> {
    const filtered = this.projectsSubject.value.filter(
      project => project.technologies.some(
        (technology: string) => technology.toLowerCase().includes(tech.toLowerCase())
      )
    );
    return of(filtered);
  }

  // Skill Methods
  getSkills(): Observable<Skill[]> {
    return this.skills$;
  }

  getSkillsByCategory(category: string): Observable<Skill[]> {
    const filtered = this.skillsSubject.value.filter(
      skill => skill.category.toLowerCase() === category.toLowerCase()
    );
    return of(filtered);
  }

  getTopSkills(limit: number = 8): Observable<Skill[]> {
    const sorted = [...this.skillsSubject.value]
      .sort((a, b) => b.proficiency - a.proficiency)
      .slice(0, limit);
    return of(sorted);
  }

  // Experience Methods
  getExperience(): Observable<Experience[]> {
    return this.experience$;
  }

  getCurrentExperience(): Observable<Experience | undefined> {
    const current = this.experienceSubject.value.find(exp => exp.current);
    return of(current);
  }

  // Education Methods
  getEducation(): Observable<Education[]> {
    return this.education$;
  }

  getLatestEducation(): Observable<Education | undefined> {
    const sorted = this.educationSubject.value.sort((a, b) => 
      new Date(b.endYear).getTime() - new Date(a.endYear).getTime()
    );
    return of(sorted[0]);
  }

  // Statistics Methods
  getPortfolioStats(): Observable<any> {
    const stats = {
      totalProjects: this.projectsSubject.value.length,
      completedProjects: this.projectsSubject.value.filter(p => p.status === 'completed').length,
      totalSkills: this.skillsSubject.value.length,
      averageSkillLevel: this.calculateAverageSkillLevel(),
      yearsOfExperience: this.calculateYearsOfExperience(),
      totalEducation: this.educationSubject.value.length,
      highestGPA: this.getHighestGPA()
    };
    return of(stats);
  }

  // Search Methods
  searchProjects(query: string): Observable<Project[]> {
    const searchTerm = query.toLowerCase();
    const filtered = this.projectsSubject.value.filter(project =>
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.technologies.some((tech: string) => tech.toLowerCase().includes(searchTerm)) ||
      project.category.toLowerCase().includes(searchTerm)
    );
    return of(filtered);
  }

  searchSkills(query: string): Observable<Skill[]> {
    const searchTerm = query.toLowerCase();
    const filtered = this.skillsSubject.value.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm) ||
      skill.category.toLowerCase().includes(searchTerm)
    );
    return of(filtered);
  }

  // Private helper methods
  private calculateAverageSkillLevel(): number {
    const skills = this.skillsSubject.value;
    if (skills.length === 0) return 0;
    
    const total = skills.reduce((sum, skill) => sum + skill.proficiency, 0);
    return Math.round(total / skills.length);
  }

  private calculateYearsOfExperience(): number {
    const experience = this.experienceSubject.value;
    if (experience.length === 0) return 0;

    const earliestStart = experience.reduce((earliest, exp) => {
      const startDate = new Date(exp.startDate);
      return startDate < earliest ? startDate : earliest;
    }, new Date());

    const now = new Date();
    const diffTime = Math.abs(now.getTime() - earliestStart.getTime());
    const diffYears = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365));
    return diffYears;
  }

  private getHighestGPA(): number {
    const education = this.educationSubject.value;
    if (education.length === 0) return 0;
    
    return Math.max(...education.map(edu => edu.gpa));
  }

  // Update methods (for future admin functionality)
  updateProject(project: Project): void {
    const currentProjects = this.projectsSubject.value;
    const index = currentProjects.findIndex(p => p.id === project.id);
    
    if (index !== -1) {
      currentProjects[index] = project;
      this.projectsSubject.next([...currentProjects]);
    }
  }

  addProject(project: Project): void {
    const currentProjects = this.projectsSubject.value;
    this.projectsSubject.next([...currentProjects, project]);
  }

  deleteProject(id: string): void {
    const currentProjects = this.projectsSubject.value;
    const filtered = currentProjects.filter(p => p.id !== id);
    this.projectsSubject.next(filtered);
  }

  // Export/Import methods
  exportPortfolioData(): any {
    return {
      projects: this.projectsSubject.value,
      skills: this.skillsSubject.value,
      experience: this.experienceSubject.value,
      education: this.educationSubject.value,
      exportDate: new Date().toISOString()
    };
  }

  importPortfolioData(data: any): void {
    if (data.projects) this.projectsSubject.next(data.projects);
    if (data.skills) this.skillsSubject.next(data.skills);
    if (data.experience) this.experienceSubject.next(data.experience);
    if (data.education) this.educationSubject.next(data.education);
  }
}