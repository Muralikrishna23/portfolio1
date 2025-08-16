// interfaces/project.interface.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  technologies: string[];
  image: string;
  images?: string[];
  status: ProjectStatus;
  featured: boolean;
  startDate: string;
  endDate?: string;
  duration?: string;
  
  // Links
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  
  // Metrics and Results
  highlights?: ProjectHighlight[];
  results?: ProjectResult[];
  testimonial?: ProjectTestimonial;
  
  // Technical Details
  challenges?: string[];
  solutions?: string[];
  learnings?: string[];
  architecture?: string;
  
  // Team and Role
  teamSize?: number;
  role?: string;
  responsibilities?: string[];
  
  // Additional Info
  tags?: string[];
  priority?: number;
  views?: number;
  likes?: number;
}

export interface ProjectHighlight {
  label: string;
  value: string;
  icon?: string;
  color?: string;
}

export interface ProjectResult {
  metric: string;
  value: string;
  improvement?: string;
  description?: string;
}

export interface ProjectTestimonial {
  text: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

export type ProjectCategory = 
  | 'web-development'
  | 'mobile-development' 
  | 'iot-hardware'
  | 'embedded-systems'
  | 'research-design'
  | 'data-science'
  | 'ai-ml'
  | 'other';

export type ProjectStatus = 
  | 'completed'
  | 'in-progress'
  | 'planned'
  | 'internship'
  | 'academic'
  | 'personal'
  | 'freelance';

// Filter and Sort Options
export interface ProjectFilters {
  category?: ProjectCategory;
  technology?: string;
  status?: ProjectStatus;
  featured?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
  searchQuery?: string;
}

export interface ProjectSortOptions {
  field: 'title' | 'startDate' | 'endDate' | 'priority' | 'views' | 'likes';
  direction: 'asc' | 'desc';
}

// Project Statistics
export interface ProjectStats {
  totalProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  categoriesCount: Record<ProjectCategory, number>;
  technologiesCount: Record<string, number>;
  averageProjectDuration: number;
  totalViews: number;
  totalLikes: number;
}