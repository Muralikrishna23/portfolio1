import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { AnimationService } from '../../services/animation.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  private portfolioService = inject(PortfolioService);
  private animationService = inject(AnimationService);

  projects: Project[] = [];
  filteredProjects: Project[] = [];
  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedTechnology: string = 'all';
  
  categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web-development', label: 'Web Applications' },
    { value: 'iot-hardware', label: 'IoT Systems' },
    { value: 'mobile-development', label: 'Mobile Apps' },
    { value: 'research-design', label: 'Research & Design' }
  ];

  technologies = [
    { value: 'all', label: 'All Technologies' },
    { value: 'java', label: 'Java' },
    { value: 'spring boot', label: 'Spring Boot' },
    { value: 'python', label: 'Python' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'iot', label: 'IoT' },
    { value: 'arduino', label: 'Arduino' },
    { value: 'sql', label: 'SQL' }
  ];

  stats = {
    totalProjects: 0,
    webProjects: 0,
    iotProjects: 0,
    technologies: 0
  };

  ngOnInit() {
    this.loadProjects();
    this.animationService.initializeScrollAnimations();
    this.calculateStats();
  }

  loadProjects() {
    this.portfolioService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = [...this.projects];
    });
  }

  calculateStats() {
    this.stats.totalProjects = this.projects.length;
    this.stats.webProjects = this.projects.filter(p => p.category === 'web-development').length;
    this.stats.iotProjects = this.projects.filter(p => p.category === 'iot-hardware').length;
    this.stats.technologies = new Set(this.projects.flatMap(p => p.technologies)).size;
  }

  filterProjects() {
    this.filteredProjects = this.projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                          project.technologies.some((tech: string) => tech.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      const matchesCategory = this.selectedCategory === 'all' || project.category === this.selectedCategory;
      
      const matchesTechnology = this.selectedTechnology === 'all' || 
                              project.technologies.some((tech: string) => tech.toLowerCase().includes(this.selectedTechnology.toLowerCase()));
      
      return matchesSearch && matchesCategory && matchesTechnology;
    });
  }

  onSearchChange() {
    this.filterProjects();
  }

  onCategoryChange() {
    this.filterProjects();
  }

  onTechnologyChange() {
    this.filterProjects();
  }

  openProject(project: Project) {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank');
    } else if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  }

  openGithub(project: Project, event: Event) {
    event.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  }

  getDifficultyColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed': return '#10B981';
      case 'in-progress': return '#F59E0B';
      case 'planned': return '#8B5CF6';
      case 'academic': return '#3B82F6';
      case 'internship': return '#8B5CF6';
      default: return '#6B7280';
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed': return '#10B981';
      case 'in-progress': return '#F59E0B';
      case 'planned': return '#8B5CF6';
      case 'academic': return '#3B82F6';
      case 'internship': return '#8B5CF6';
      default: return '#6B7280';
    }
  }

  trackByProjectId(index: number, project: Project): string {
    return project.id;
  }
}