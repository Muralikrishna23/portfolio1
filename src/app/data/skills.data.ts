// data/skills.data.ts
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 0-100
  yearsOfExperience: number;
  level: number; // Same as proficiency for consistency
  icon?: string;
  color?: string;
  description?: string;
  relatedProjects?: string[];
  certifications?: string[];
  learningResources?: string[];
  lastUsed?: string;
  trending?: boolean;
  priority?: number;
}

export type SkillCategory = 
  | 'programming-languages'
  | 'web-technologies'
  | 'databases'
  | 'tools-software'
  | 'framework-libraries'
  | 'soft-skills'
  | 'methodologies';

export const SKILLS_DATA: Skill[] = [
  // Programming Languages
  {
    id: 'java',
    name: 'Java',
    category: 'programming-languages',
    proficiency: 85,
    level: 85,
    yearsOfExperience: 3,
    icon: '☕',
    color: '#f89820',
    description: 'Core Java, OOP concepts, Collections, Exception Handling, Multithreading',
    relatedProjects: ['elibrary-management', 'web-applications'],
    lastUsed: '2024-01',
    trending: true,
    priority: 1
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'programming-languages',
    proficiency: 80,
    level: 80,
    yearsOfExperience: 2.5,
    icon: '🟨',
    color: '#f7df1e',
    description: 'ES6+, DOM manipulation, Async programming, Modern JavaScript features',
    relatedProjects: ['portfolio-website', 'web-applications'],
    lastUsed: '2024-01',
    trending: true,
    priority: 2
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'programming-languages',
    proficiency: 75,
    level: 75,
    yearsOfExperience: 1.5,
    icon: '🔷',
    color: '#3178c6',
    description: 'Static typing, Interfaces, Generics, Advanced types',
    relatedProjects: ['portfolio-website'],
    lastUsed: '2024-01',
    trending: true,
    priority: 3
  },
  {
    id: 'python',
    name: 'Python',
    category: 'programming-languages',
    proficiency: 70,
    level: 70,
    yearsOfExperience: 2,
    icon: '🐍',
    color: '#3776ab',
    description: 'Data analysis, Automation scripts, IoT programming',
    relatedProjects: ['Modbus data Reader', 'data-analysis'],
    lastUsed: '2025-04',
    priority: 4
  },
  

  // Web Technologies
  {
    id: 'html5',
    name: 'HTML5',
    category: 'web-technologies',
    proficiency: 90,
    level: 90,
    yearsOfExperience: 3,
    icon: '🌐',
    color: '#e34f26',
    description: 'Semantic HTML, Accessibility, Modern HTML features',
    relatedProjects: ['portfolio-website', 'elibrary-management','web-applications'],
    lastUsed: '2025-07',
    trending: true,
    priority: 1
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'web-technologies',
    proficiency: 85,
    level: 85,
    yearsOfExperience: 3,
    icon: '🎨',
    color: '#1572b6',
    description: 'Flexbox, Grid, Animations, Responsive design, CSS Variables',
    relatedProjects: ['portfolio-website', 'web-applications'],
    lastUsed: '2025-07',
    trending: true,
    priority: 2
  },
  {
    id: 'angular',
    name: 'Angular',
    category: 'framework-libraries',
    proficiency: 80,
    level: 80,
    yearsOfExperience: 1.5,
    icon: '🅰️',
    color: '#dd0031',
    description: 'Angular 17+, Standalone components, RxJS, TypeScript',
    relatedProjects: ['portfolio-website'],
    lastUsed: '2025-07',
    trending: true,
    priority: 1
  },
  {
    id: 'servlets-jsp',
    name: 'Servlets & JSP',
    category: 'web-technologies',
    proficiency: 85,
    level: 75,
    yearsOfExperience: 2,
    icon: '☕',
    color: '#f89820',
    description: 'Java web development, Server-side programming, MVC architecture',
    relatedProjects: ['elibrary-management'],
    lastUsed: '2023-10',
    priority: 3
  },

  // Databases
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'databases',
    proficiency: 80,
    level: 80,
    yearsOfExperience: 2.5,
    icon: '🐬',
    color: '#4479a1',
    description: 'Database design, Complex queries, Optimization, JDBC integration',
    relatedProjects: ['elibrary-management', 'web-applications'],
    trending: true,
    priority: 1
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'databases',
    proficiency: 85,
    level: 85,
    yearsOfExperience: 3,
    icon: '📊',
    color: '#336791',
    description: 'Complex queries, Joins, Stored procedures, Database optimization',
    relatedProjects: ['elibrary-management', 'data-analysis'],
    trending: true,
    priority: 2
  },

  // IoT & Embedded Systems
  {
    id: 'hibernate',
    name: 'Hibernate',
    category: 'framework-libraries',
    proficiency: 80,
    level: 80,
    yearsOfExperience: 1,
    icon: '☕',
    color: '#00979d',
    description: 'Object-relational mapping, Data persistence, Query optimization',
    relatedProjects: ['web-applications'],
    lastUsed: '2025-07',
    trending: true,
    priority: 1
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'framework-libraries',
    proficiency: 70,
    level: 70,
    yearsOfExperience: 1.5,
    icon: '🫐',
    color: '#c51a4a',
    description: 'Lightweight web framework, REST APIs, Microservices',
    relatedProjects: ['web-applications'],
    lastUsed: '2025-04',
    priority: 2
  },
  
  // Tools & Software
  {
    id: 'git',
    name: 'Git',
    category: 'tools-software',
    proficiency: 80,
    level: 80,
    yearsOfExperience: 2.5,
    icon: '🌿',
    color: '#f05032',
    description: 'Version control, Branching, Merging, Collaboration workflows',
    relatedProjects: ['all-projects'],
    lastUsed: '2024-10',
    priority: 1
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'tools-software',
    proficiency: 70,
    level: 70,
    yearsOfExperience: 2,
    icon: '🐧',
    color: '#fcc624',
    description: 'Command line, System administration, Shell scripting',
    relatedProjects: ['web-applications hosting'],
    lastUsed: '2025-05',
    trending: true,
    priority: 2
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'tools-software',
    proficiency: 90,
    level: 90,
    yearsOfExperience: 3,
    icon: '💙',
    color: '#007acc',
    description: 'Advanced IDE usage, Extensions, Debugging, Code formatting',
    relatedProjects: ['all-projects'],
    lastUsed: '2024-01',
    priority: 3
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'tools-software',
    proficiency: 60,
    level: 60,
    yearsOfExperience: 1,
    icon: '🎨',
    color: '#f24e1e',
    description: 'UI/UX design, Prototyping, Design systems',
    relatedProjects: ['portfolio-website'],
    lastUsed: '2023-12',
    priority: 4
  },

  // Spring Boot (missing from your list but important for Samtex Solutions)
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'framework-libraries',
    proficiency: 82,
    level: 82,
    yearsOfExperience: 2,
    icon: '🍃',
    color: '#6db33f',
    description: 'RESTful APIs, Microservices, Security, Data JPA, DevTools',
    relatedProjects: ['samtex-projects', 'campus-management'],
    lastUsed: '2024-01',
    trending: true,
    priority: 1
  },

  {
    id: 'eclipse',
    name: 'Eclipse',
    category: 'tools-software',
    proficiency: 90,
    level: 90,
    yearsOfExperience: 2,
    icon: '🔌',
    color: '#4caf50',
    description: 'Java development, IDE features, Debugging, Plugins',
    relatedProjects: ['all-java-based-projects'],
    lastUsed: '2024-01',
    priority: 2
  },
  {
    id: 'jdbc',
    name: 'JDBC',
    category: 'framework-libraries',
    proficiency: 78,
    level: 78,
    yearsOfExperience: 2,
    icon: '🔗',
    color: '#f89820',
    description: 'Database connectivity, PreparedStatements, Connection pooling, Transactions',
    relatedProjects: ['elibrary-management', 'web-applications'],
    lastUsed: '2023-04',
    priority: 3
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'programming-languages',
    proficiency: 75,
    level: 75,
    yearsOfExperience: 1.5,
    icon: '📚',
    color: '#4caf50',
    description: 'Problem-solving, Algorithm design, Complexity analysis, Common data structures',
    relatedProjects: ['problem solving', 'competitive programming'],
    trending: true,
    priority: 4
  },
  // Soft Skills
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    category: 'soft-skills',
    proficiency: 90,
    level: 90,
    yearsOfExperience: 4,
    icon: '🧩',
    color: '#4caf50',
    description: 'Analytical thinking, Creative solutions, Debugging, Critical thinking',
    relatedProjects: ['all-projects'],
    priority: 1
  },
  {
    id: 'communication',
    name: 'Communication',
    category: 'soft-skills',
    proficiency: 85,
    level: 85,
    yearsOfExperience: 4,
    icon: '💬',
    color: '#2196f3',
    description: 'Technical writing, Presentations, Team collaboration, Documentation',
    relatedProjects: ['all-projects'],
    priority: 2
  },
  {
    id: 'learning-agility',
    name: 'Learning Agility',
    category: 'soft-skills',
    proficiency: 95,
    level: 95,
    yearsOfExperience: 4,
    icon: '🚀',
    color: '#ff9800',
    description: 'Fast learner, Adaptability, Self-directed learning, Technology adoption',
    relatedProjects: ['all-projects'],
    trending: true,
    priority: 1
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    category: 'soft-skills',
    proficiency: 80,
    level: 80,
    yearsOfExperience: 3,
    icon: '👥',
    color: '#9c27b0',
    description: 'Collaboration, Leadership, Mentoring, Cross-functional work',
    relatedProjects: ['team-projects'],
    priority: 3
  },

  // Hard Working (from resume strengths)
  {
    id: 'hard-working',
    name: 'Hard Working',
    category: 'soft-skills',
    proficiency: 95,
    level: 95,
    yearsOfExperience: 4,
    icon: '💪',
    color: '#e91e63',
    description: 'Dedication, Persistence, Meeting deadlines, Going extra mile',
    relatedProjects: ['all-projects'],
    priority: 1
  },

  // Self-Confident (from resume strengths)
  {
    id: 'self-confident',
    name: 'Self-Confident',
    category: 'soft-skills',
    proficiency: 88,
    level: 88,
    yearsOfExperience: 4,
    icon: '🎯',
    color: '#9c27b0',
    description: 'Taking initiative, Leadership, Public speaking, Decision making',
    relatedProjects: ['all-projects'],
    priority: 2
  }
];

export const SKILL_CATEGORIES = [
  {
    id: 'programming-languages',
    name: 'Programming Languages',
    icon: '💻',
    color: '#667eea',
    description: 'Core programming languages and scripting technologies'
  },
  {
    id: 'web-technologies',
    name: 'Web Technologies',
    icon: '🌐',
    color: '#764ba2',
    description: 'Frontend and backend web development technologies'
  },
  {
    id: 'framework-libraries',
    name: 'framework & Libraries',
    icon: '📚',
    color: '#f093fb',
    description: 'Application framework and development libraries'
  },
  {
    id: 'iot-embedded',
    name: 'IoT & Embedded Systems',
    icon: '🔌',
    color: '#4facfe',
    description: 'Internet of Things and embedded systems development'
  },
  {
    id: 'electronics-rf',
    name: 'Electronics & RF',
    icon: '📡',
    color: '#43e97b',
    description: 'Electronics design and radio frequency engineering'
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: '🗄️',
    color: '#38ef7d',
    description: 'Database design, management, and optimization'
  },
  {
    id: 'tools-software',
    name: 'Tools & Software',
    icon: '🛠️',
    color: '#fa709a',
    description: 'Development tools, IDEs, and productivity software'
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills',
    icon: '🧠',
    color: '#fee140',
    description: 'Communication, leadership, and professional skills'
  }
];

// Helper functions for skill data processing
export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return SKILLS_DATA.filter(skill => skill.category === category);
};

export const getTopSkills = (limit: number = 10): Skill[] => {
  return SKILLS_DATA
    .sort((a, b) => (b.proficiency * (b.priority || 5)) - (a.proficiency * (a.priority || 5)))
    .slice(0, limit);
};

export const getTrendingSkills = (): Skill[] => {
  return SKILLS_DATA.filter(skill => skill.trending);
};

export const getSkillsForProject = (projectId: string): Skill[] => {
  return SKILLS_DATA.filter(skill => 
    skill.relatedProjects?.includes(projectId) || 
    skill.relatedProjects?.includes('all-projects')
  );
};

export const getSkillStats = () => {
  const totalSkills = SKILLS_DATA.length;
  const averageProficiency = Math.round(
    SKILLS_DATA.reduce((sum, skill) => sum + skill.proficiency, 0) / totalSkills
  );
  
  const categoryDistribution = SKILLS_DATA.reduce((acc, skill) => {
    acc[skill.category] = (acc[skill.category] || 0) + 1;
    return acc;
  }, {} as Record<SkillCategory, number>);
  
  const proficiencyLevels = {
    expert: SKILLS_DATA.filter(s => s.proficiency >= 80).length,
    advanced: SKILLS_DATA.filter(s => s.proficiency >= 60 && s.proficiency < 80).length,
    intermediate: SKILLS_DATA.filter(s => s.proficiency >= 40 && s.proficiency < 60).length,
    beginner: SKILLS_DATA.filter(s => s.proficiency < 40).length
  };
  
  return {
    totalSkills,
    averageProficiency,
    categoryDistribution,
    proficiencyLevels,
    trendingCount: getTrendingSkills().length
  };
};