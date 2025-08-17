// data/projects.data.ts
import { Project } from '../interfaces/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'forest-fire-detection',
    title: 'Forest Fire Detection System',
    description: 'IoT-based forest fire detection system that automatically detects fires and sends SMS alerts with GPS location coordinates to forest officers for rapid emergency response.',
    longDescription: 'Developed during my IoT internship, this comprehensive system uses multiple sensors to detect fire indicators including temperature, smoke, and humidity levels. The system integrates GPS for precise location tracking and GSM modules for immediate SMS notifications to forest officials. The project addresses the critical need for early fire detection in forest areas where manual monitoring is challenging.',
    category: 'iot-hardware',
    technologies: ['IoT Sensors', 'Arduino', 'GPS Module', 'GSM Module', 'C++', 'Firebase', 'Android'],
    image: 'https://images.unsplash.com/photo-1574263867128-feac5c20b1ed?w=600&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1574263867128-feac5c20b1ed?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1520637836862-4d197d17c60a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop'
    ],
    status: 'internship',
    featured: true,
    startDate: '2022-06-01',
    endDate: '2022-08-31',
    duration: '3 months',
    
    highlights: [
      { label: 'Response Time', value: 'Real-time', icon: '⚡', color: '#10b981' },
      { label: 'Coverage Area', value: '5 km radius', icon: '📡', color: '#3b82f6' },
      { label: 'Accuracy', value: '95%', icon: '🎯', color: '#8b5cf6' },
      { label: 'Power Efficiency', value: '48 hours', icon: '🔋', color: '#f59e0b' }
    ],
    
    results: [
      {
        metric: 'Detection Accuracy',
        value: '95%',
        improvement: '+45% vs manual detection',
        description: 'Achieved through multi-sensor fusion algorithm'
      },
      {
        metric: 'Response Time',
        value: '< 2 minutes',
        improvement: 'From 30+ minutes manual',
        description: 'Automated SMS alerts with GPS coordinates'
      },
      {
        metric: 'False Positives',
        value: '< 5%',
        improvement: '-80% vs single sensor',
        description: 'Smart filtering using environmental data'
      }
    ],
    
    challenges: [
      'Harsh outdoor environmental conditions affecting sensor accuracy',
      'Power management for remote deployment without grid electricity',
      'Network connectivity issues in dense forest areas',
      'Integration of multiple sensor types with different protocols'
    ],
    
    solutions: [
      'Implemented weatherproof enclosures and sensor calibration algorithms',
      'Designed low-power system with solar charging and battery backup',
      'Used GSM with fallback to satellite communication',
      'Created unified communication protocol for sensor integration'
    ],
    
    learnings: [
      'IoT system design for harsh environmental conditions',
      'Power optimization techniques for remote deployments',
      'Real-time data processing and alert systems',
      'Integration of hardware sensors with cloud services'
    ],
    
    teamSize: 4,
    role: 'IoT Developer & System Integrator',
    responsibilities: [
      'Sensor selection and integration',
      'Firmware development for microcontrollers',
      'GPS and GSM module integration',
      'Cloud database design and management',
      'Testing and field deployment'
    ],
    
    tags: ['IoT', 'Environmental Monitoring', 'Emergency Response', 'Embedded Systems'],
    priority: 1,
    views: 1250,
    likes: 89
  },
  
  {
    id: 'elibrary-management',
    title: 'ELibrary Management System',
    description: 'Full-stack web application for library management with separate admin and customer interfaces. Admins can manage book inventory while customers can browse, search, and purchase books online.',
    longDescription: 'A comprehensive digital library solution built using Java Enterprise technologies. The system features role-based access control, advanced search capabilities, inventory management, and secure payment integration. Designed to modernize traditional library operations and provide seamless user experience for both administrators and customers.',
    category: 'web-development',
    technologies: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    image: ' ',
    images: [
      ''
    ],
    status: 'completed',
    featured: true,
    startDate: '2023-09-01',
    endDate: '2023-10-30',
    duration: '2 months',
    
    liveUrl: 'https://',
    githubUrl: 'https://github.com/Muralikrishna23',
    
    highlights: [
      { label: 'User Roles', value: '2 Types', icon: '👥', color: '#3b82f6' },
      { label: 'Book Capacity', value: '10,000+', icon: '📚', color: '#10b981' },
      { label: 'Concurrent Users', value: '500+', icon: '⚡', color: '#f59e0b' },
      { label: 'Response Time', value: '< 200ms', icon: '🚀', color: '#8b5cf6' }
    ],
    
    results: [
      {
        metric: 'User Satisfaction',
        value: '4.7/5',
        improvement: '+60% vs old system',
        description: 'Based on user feedback surveys'
      },
      {
        metric: 'Search Speed',
        value: '< 100ms',
        improvement: '10x faster',
        description: 'Optimized database queries and indexing'
      },
      {
        metric: 'Admin Efficiency',
        value: '75% faster',
        improvement: 'Book management tasks',
        description: 'Automated workflows and bulk operations'
      }
    ],
    
    testimonial: {
      text: 'The ELibrary system transformed our library operations. The intuitive interface and powerful search features have significantly improved user experience.',
      author: 'Muralikrishna',
      role: '',
      company: ''
    },
    
    challenges: [
      'Designing scalable database schema for large book collections',
      'Implementation of secure user authentication and authorization',
      'Creating responsive UI that works across all devices',
      'Optimizing search performance for large datasets'
    ],
    
    solutions: [
      'Implemented normalized database design with proper indexing',
      'Used session management and password hashing for security',
      'Applied responsive web design principles with Bootstrap',
      'Implemented full-text search with MySQL indexing'
    ],
    
    architecture: 'Three-tier architecture with presentation layer (JSP), business logic layer (Servlets), and data access layer (JDBC + MySQL)',
    
    teamSize: 1,
    role: 'Full-Stack Developer',
    responsibilities: [
      'Complete system design and architecture',
      'Database design and implementation',
      'Backend development with Java Servlets',
      'Frontend development with JSP and JavaScript',
      'Testing and deployment'
    ],
    
    tags: ['Web Development', 'Java Enterprise', 'Database Design', 'Full-Stack'],
    priority: 2,
    views: 890,
    likes: 67
  },

  {
    id: 'voice-home-automation',
    title: 'Voice Controlled Home Automation',
    description: 'Accessibility-focused home automation system that enables people with disabilities to control various home devices including lights, fans, and appliances through simple voice commands.',
    longDescription: 'An innovative IoT solution designed specifically for accessibility, allowing users with physical disabilities to control their home environment through voice commands. The system uses advanced speech recognition and integrates with common household appliances to provide independence and improved quality of life.',
    category: 'iot-hardware',
    technologies: ['Arduino', 'Raspberry Pi', 'Python', 'Speech Recognition', 'Relay Modules', 'Bluetooth', 'Android'],
    image: '',
    images: [
      ''
    ],
    status: 'completed',
    featured: true,
    startDate: '2022-05-01',
    endDate: '2021-08-30',
    duration: '4 months',
    
    githubUrl: 'https://github.com/Muralikrishna23',
    
    highlights: [
      { label: 'Voice Accuracy', value: '98%', icon: '🎤', color: '#10b981' },
      { label: 'Devices Supported', value: '15+ Types', icon: '🏠', color: '#3b82f6' },
      { label: 'Response Time', value: '< 1 second', icon: '⚡', color: '#f59e0b' },
      { label: 'Languages', value: '3 Supported', icon: '🌐', color: '#8b5cf6' }
    ],
    
    results: [
      {
        metric: 'User Independence',
        value: '90% increase',
        improvement: 'Daily task completion',
        description: 'Users can control environment without assistance'
      },
      {
        metric: 'Command Recognition',
        value: '98% accuracy',
        improvement: 'Advanced NLP processing',
        description: 'Supports natural language commands'
      },
      {
        metric: 'Setup Time',
        value: '< 30 minutes',
        improvement: 'Plug-and-play design',
        description: 'Easy installation without technical expertise'
      }
    ],
    
    challenges: [
      'Achieving high accuracy in noisy environments',
      'Supporting multiple languages and accents',
      'Ensuring system reliability for critical accessibility needs',
      'Making the system affordable and easy to install'
    ],
    
    solutions: [
      'Implemented noise cancellation and adaptive filtering',
      'Used machine learning models trained on diverse speech patterns',
      'Added redundant control methods and error handling',
      'Designed modular system with common household components'
    ],
    
    teamSize: 3,
    role: 'Team Lead & Developer',
    responsibilities: [
      'Speech recognition algorithm development',
      'IoT hardware integration',
      //'Mobile application development',
      'System testing with accessibility focus',
      'User experience optimization'
    ],
    
    tags: ['Accessibility', 'IoT', 'Voice Recognition', 'Home Automation', 'Assistive Technology'],
    priority: 1,
    views: 1120,
    likes: 95
  },

  {
    id: 'reconfigurable-antenna',
    title: 'Hybrid Reconfigurable Antenna Design',
    description: 'Advanced antenna design project using HFSS ANSYS software to create reconfigurable antennas for multiple wireless communication applications including WiFi, Bluetooth, and cellular networks.',
    longDescription: 'A comprehensive research project focused on designing and simulating hybrid reconfigurable antennas that can dynamically adjust their properties including frequency, polarization, and radiation pattern. The project involved extensive electromagnetic simulation and optimization to achieve multi-band operation suitable for modern wireless communication systems.',
    category: 'research-design',
    technologies: ['HFSS ANSYS', 'MATLAB', 'RF Design', 'Electromagnetic Simulation', 'Antenna Theory', 'Microwave Engineering'],
    image: '',
    images: [
      ''
    ],
    status: 'completed',
    featured: false,
    startDate: '2022-01-01',
    endDate: '2023-05-28',
    duration: '6 months',
    
    highlights: [
      { label: 'Frequency Bands', value: '4 Bands', icon: '📡', color: '#3b82f6' },
      { label: 'Efficiency', value: '92%', icon: '⚡', color: '#10b981' },
      { label: 'Applications', value: '5+ Types', icon: '🌐', color: '#8b5cf6' },
      { label: 'Size Reduction', value: '35%', icon: '📏', color: '#f59e0b' }
    ],
    
    results: [
      {
        metric: 'Multi-band Coverage',
        value: '2.4-5.8 GHz',
        improvement: 'WiFi, Bluetooth, 5G',
        description: 'Covers major wireless communication bands'
      },
      {
        metric: 'Radiation Efficiency',
        value: '92%',
        improvement: '+15% vs conventional',
        description: 'Optimized through parametric studies'
      },
      {
        metric: 'Size Reduction',
        value: '35% smaller',
        improvement: 'Compact design',
        description: 'Suitable for mobile devices'
      }
    ],
    
    challenges: [
      'Achieving wide bandwidth while maintaining compact size',
      'Managing electromagnetic coupling between antenna elements',
      'Optimizing radiation patterns for multiple frequency bands',
      'Balancing performance trade-offs in reconfigurable design'
    ],
    
    solutions: [
      'Used hybrid feeding techniques and metamaterial structures',
      'Implemented isolation techniques and ground plane optimization',
      'Applied multi-objective optimization algorithms',
      'Developed switching mechanisms for dynamic reconfiguration'
    ],
    
    learnings: [
      'Advanced electromagnetic simulation techniques',
      'Antenna design principles and optimization methods',
      'RF measurement and characterization',
      'Research methodology and technical documentation'
    ],
    
    teamSize: 4,
    role: 'Antenna Design Engineer',
    responsibilities: [
      'Antenna geometry design and modeling',
      'HFSS simulation and optimization',
      'Performance analysis and validation',
      'Research documentation and presentation',
      'Prototype fabrication and testing'
    ],
    
    tags: ['RF Engineering', 'Antenna Design', 'Wireless Communication', 'Research', 'HFSS'],
    priority: 3,
    views: 450,
    likes: 28
  },

  {
    id: 'portfolio-website',
    title: 'Personal Portfolio Website',
    description: 'Modern, responsive portfolio website built with Angular 17+ featuring dark/light themes, advanced animations, and glassmorphism design. Showcases projects, skills, and professional experience.',
    longDescription: 'A cutting-edge portfolio website that demonstrates advanced web development skills through innovative design and technical implementation. Features include custom animations, theme switching, performance optimization, and responsive design following modern UX principles.',
    category: 'web-development',
    technologies: ['Angular 17', 'TypeScript', 'CSS3', 'HTML5', 'RxJS', 'Animations API', 'Progressive Web App'],
    image: '',
    images: [
      ''
    ],
    status: 'completed',
    featured: true,
    startDate: '2024-12-01',
    endDate: '2025-01-15',
    duration: '1.5 months',
    
    liveUrl: 'https://muralikrishna-portfolio.netlify.app',
    githubUrl: 'https://github.com/Muralikrishna23/portfolio-website',
    
    highlights: [
      { label: 'Performance Score', value: '98/100', icon: '🚀', color: '#10b981' },
      { label: 'Load Time', value: '< 1.2s', icon: '⚡', color: '#f59e0b' },
      { label: 'Responsive', value: '100%', icon: '📱', color: '#3b82f6' },
      { label: 'Accessibility', value: 'WCAG AA', icon: '♿', color: '#8b5cf6' }
    ],
    
    results: [
      {
        metric: 'Lighthouse Score',
        value: '98/100',
        improvement: 'Performance optimized',
        description: 'Excellent Core Web Vitals scores'
      },
      {
        metric: 'Bundle Size',
        value: '< 200KB',
        improvement: 'Lazy loading implemented',
        description: 'Optimized with tree shaking'
      },
      {
        metric: 'Cross-browser Support',
        value: '99%',
        improvement: 'Modern browsers',
        description: 'Tested across major browsers'
      }
    ],
    
    challenges: [
      'Implementing complex animations while maintaining performance',
      'Creating seamless dark/light theme transitions',
      'Ensuring accessibility across all interactive elements',
      'Optimizing load times with rich visual content'
    ],
    
    solutions: [
      'Used CSS transforms and optimized animation techniques',
      'Implemented CSS custom properties for efficient theming',
      'Added proper ARIA labels and keyboard navigation',
      'Applied lazy loading and image optimization strategies'
    ],
    
    teamSize: 1,
    role: 'Full-Stack Developer & UI/UX Designer',
    responsibilities: [
      'Complete system architecture and design',
      'Frontend development with Angular',
      'Custom animation implementation',
      'Performance optimization',
      'SEO and accessibility implementation'
    ],
    
    tags: ['Angular', 'Modern Web', 'Animation', 'Responsive Design', 'Performance'],
    priority: 1,
    views: 2340,
    likes: 156
  }
];

// Helper functions for data filtering and processing
export const getProjectsByCategory = (category: string): Project[] => {
  return PROJECTS_DATA.filter(project => 
    project.category === category
  );
};

export const getFeaturedProjects = (): Project[] => {
  return PROJECTS_DATA.filter(project => project.featured);
};

export const getCompletedProjects = (): Project[] => {
  return PROJECTS_DATA.filter(project => project.status === 'completed');
};

export const getProjectsByTechnology = (technology: string): Project[] => {
  return PROJECTS_DATA.filter(project =>
    project.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

export const getProjectStats = () => {
  const total = PROJECTS_DATA.length;
  const completed = PROJECTS_DATA.filter(p => p.status === 'completed').length;
  const featured = PROJECTS_DATA.filter(p => p.featured).length;
  const totalViews = PROJECTS_DATA.reduce((sum, p) => sum + (p.views || 0), 0);
  const totalLikes = PROJECTS_DATA.reduce((sum, p) => sum + (p.likes || 0), 0);
  
  const categories = PROJECTS_DATA.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const technologies = PROJECTS_DATA.reduce((acc, project) => {
    project.technologies.forEach(tech => {
      acc[tech] = (acc[tech] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);
  
  return {
    total,
    completed,
    featured,
    totalViews,
    totalLikes,
    categories,
    technologies,
    completionRate: Math.round((completed / total) * 100)
  };
};