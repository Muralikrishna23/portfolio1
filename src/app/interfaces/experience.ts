// data/experience.data.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  type: ExperienceType;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  projects?: string[];
  skills: string[];
  companyLogo?: string;
  companyWebsite?: string;
  companySize?: string;
  industry?: string;
  mentors?: string[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Education {
  id: string;
  degree: string;
  major: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  gpa: number;
  maxGpa: number;
  honors?: string[];
  coursework: string[];
  projects: string[];
  activities?: string[];
  description?: string;
  logo?: string;
  website?: string;
}

export type ExperienceType = 
  | 'internship'
  | 'full-time'
  | 'part-time'
  | 'contract'
  | 'freelance'
  | 'volunteer'
  | 'academic-project'
  | 'personal-project';

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'iot-internship-2022',
    title: 'IoT Development Intern',
    company: 'TechNova Solutions',
    location: 'Hyderabad, Telangana, India',
    startDate: '2022-06-01',
    endDate: '2022-08-31',
    current: false,
    type: 'internship',
    description: 'Worked on IoT-based forest fire detection system during summer internship. Gained hands-on experience in sensor integration, microcontroller programming, and real-time data processing.',
    responsibilities: [
      'Designed and developed forest fire detection system using Arduino and multiple sensors',
      'Integrated GPS and GSM modules for location tracking and SMS alerts',
      'Programmed microcontrollers for real-time sensor data processing',
      'Developed Android application for system monitoring and configuration',
      'Conducted field testing and system optimization',
      'Documented project architecture and implementation details'
    ],
    achievements: [
      'Successfully deployed working prototype with 95% detection accuracy',
      'Reduced false positive rate to less than 5% through sensor fusion algorithms',
      'Achieved real-time response with SMS alerts delivered within 2 minutes',
      'Presented project to senior management and received excellent feedback',
      'Project selected for company showcase at IoT conference'
    ],
    technologies: ['Arduino', 'C/C++', 'IoT Sensors', 'GPS Module', 'GSM Module', 'Android', 'Firebase'],
    projects: ['forest-fire-detection'],
    skills: ['IoT Development', 'Embedded Programming', 'Sensor Integration', 'Mobile App Development'],
    companySize: '50-100 employees',
    industry: 'IoT Solutions',
    testimonial: {
      text: 'Muralikrishna showed exceptional dedication and technical skills during his internship. His forest fire detection system was innovative and well-executed.',
      author: 'Dr. Rajesh Kumar',
      role: 'Senior IoT Engineer'
    }
  },
  {
    id: 'college-projects-2021-2023',
    title: 'Student Researcher & Developer',
    company: 'Gudlavalleru Engineering College',
    location: 'Gudlavalleru, Andhra Pradesh, India',
    startDate: '2021-08-01',
    endDate: '2023-04-30',
    current: false,
    type: 'academic-project',
    description: 'Worked on multiple academic and personal projects including web development, IoT systems, and electronics design. Developed strong problem-solving skills and technical expertise.',
    responsibilities: [
      'Designed and developed ELibrary management system using Java technologies',
      'Created voice-controlled home automation system for accessibility',
      'Researched and designed reconfigurable antenna using HFSS ANSYS',
      'Collaborated with team members on various technical projects',
      'Mentored junior students in programming and project development',
      'Participated in technical symposiums and project exhibitions'
    ],
    achievements: [
      'Developed fully functional ELibrary system with admin and user interfaces',
      'Created accessible home automation system improving user independence by 90%',
      'Designed multi-band antenna with 35% size reduction compared to conventional designs',
      'Achieved 7.30 GPA in B.Tech Electronics and Communication Engineering',
      'Won best project award for voice-controlled home automation system',
      'Published research paper on reconfigurable antenna design'
    ],
    technologies: ['Java', 'Servlets', 'JSP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Arduino', 'Python', 'HFSS ANSYS'],
    projects: ['elibrary-management', 'voice-home-automation', 'reconfigurable-antenna'],
    skills: ['Full-Stack Development', 'Database Design', 'IoT Development', 'RF Engineering', 'Research'],
    companySize: '5000+ students',
    industry: 'Education',
    //activities: ['Technical Symposiums', 'Project Exhibitions', 'Student Mentoring']
  },
  {
    id: 'freelance-developer-2023',
    title: 'Freelance Developer',
    company: 'Self-Employed',
    location: 'Remote',
    startDate: '2023-05-01',
    endDate: '2024-01-31',
    current: false,
    type: 'freelance',
    description: 'Worked as a freelance developer creating web applications and IoT solutions for small businesses and startups. Gained experience in client communication and project management.',
    responsibilities: [
      'Developed custom web applications using modern technologies',
      'Created IoT monitoring solutions for agriculture and home automation',
      'Provided technical consultation for technology selection and architecture',
      'Managed client relationships and project timelines',
      'Delivered projects within budget and deadline constraints',
      'Provided post-deployment support and maintenance'
    ],
    achievements: [
      'Successfully completed 5+ projects with 100% client satisfaction',
      'Developed real-time monitoring dashboard reducing response time by 60%',
      'Created cost-effective IoT solution saving clients 40% compared to commercial alternatives',
      'Built responsive web applications with 95+ PageSpeed scores',
      'Established ongoing relationships with 3 repeat clients',
      'Generated revenue while enhancing technical and business skills'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'IoT Sensors', 'Arduino', 'Raspberry Pi'],
    skills: ['Client Management', 'Project Planning', 'Solution Architecture', 'Business Communication'],
    companySize: 'Solo',
    industry: 'Software Development'
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'btech-ece-2023',
    degree: 'Bachelor of Technology',
    major: 'Electronics and Communication Engineering',
    institution: 'Gudlavalleru Engineering College',
    location: 'Gudlavalleru, Andhra Pradesh, India',
    startYear: '2019',
    endYear: '2023',
    gpa: 7.30,
    maxGpa: 10.0,
    coursework: [
      'Digital Signal Processing',
      'Microprocessors and Microcontrollers',
      'Communication Systems',
      'VLSI Design',
      'Embedded Systems',
      'Antenna Theory and Wave Propagation',
      'Digital Communication',
      'Control Systems',
      'Electronic Circuit Analysis',
      'Electromagnetic Field Theory'
    ],
    projects: [
      'Forest Fire Detection System (IoT)',
      'Voice Controlled Home Automation',
      'Hybrid Reconfigurable Antenna Design',
      'Digital Signal Processor Implementation',
      'Microcontroller-based Temperature Control System'
    ],
    activities: [
      'IEEE Student Branch Member',
      'Technical Symposium Organizer',
      'Project Exhibition Participant',
      'Student Mentor Program'
    ],
    description: 'Comprehensive program covering electronics, communication systems, and embedded technologies with strong emphasis on practical applications and project-based learning.',
    honors: ['Merit Scholar', 'Project Excellence Award']
  },
  {
    id: 'intermediate-2019',
    degree: 'Intermediate (12th Grade)',
    major: 'Mathematics, Physics, Chemistry (MPC)',
    institution: 'Narayana Junior Inter College',
    location: 'Gudivada, Andhra Pradesh, India',
    startYear: '2017',
    endYear: '2019',
    gpa: 9.63,
    maxGpa: 10.0,
    coursework: [
      'Advanced Mathematics',
      'Physics',
      'Chemistry',
      'English',
      'Computer Science Fundamentals'
    ],
    projects: [
      'Mathematics Project on Calculus Applications',
      'Physics Experiment on Wave Properties',
      'Chemistry Lab Analysis Project'
    ],
    description: 'Strong foundation in mathematics and sciences, preparing for engineering studies with excellent academic performance.',
    honors: ['Top 5% of Class', 'Science Excellence Award']
  },
  {
    id: 'ssc-2017',
    degree: 'Secondary School Certificate (10th Grade)',
    major: 'General Studies',
    institution: 'Ravindra Bharathi School',
    location: 'Gudivada, Andhra Pradesh, India',
    startYear: '2016',
    endYear: '2017',
    gpa: 9.0,
    maxGpa: 10.0,
    coursework: [
      'Mathematics',
      'Science (Physics, Chemistry, Biology)',
      'Social Studies',
      'English',
      'Telugu',
      'Hindi'
    ],
    projects: [
      'Science Fair Project on Renewable Energy',
      'Mathematics Puzzle Competition',
      'Social Studies Research Project'
    ],
    activities: [
      'Science Club Member',
      'School Cultural Programs',
      'Mathematics Olympiad Participant'
    ],
    description: 'Strong academic foundation with consistent performance across all subjects and active participation in extracurricular activities.',
    honors: ['Academic Excellence Certificate', 'Science Fair Winner']
  }
];

// Helper functions for experience data processing
export const getCurrentExperience = (): Experience | undefined => {
  return EXPERIENCE_DATA.find(exp => exp.current);
};

export const getExperienceByType = (type: ExperienceType): Experience[] => {
  return EXPERIENCE_DATA.filter(exp => exp.type === type);
};

export const getWorkExperience = (): Experience[] => {
  return EXPERIENCE_DATA.filter(exp => 
    exp.type === 'internship' || 
    exp.type === 'full-time' || 
    exp.type === 'part-time' || 
    exp.type === 'contract' ||
    exp.type === 'freelance'
  );
};

export const getProjectExperience = (): Experience[] => {
  return EXPERIENCE_DATA.filter(exp => 
    exp.type === 'academic-project' || 
    exp.type === 'personal-project'
  );
};

export const getTotalExperienceYears = (): number => {
  const workExp = getWorkExperience();
  let totalMonths = 0;
  
  workExp.forEach(exp => {
    const start = new Date(exp.startDate);
    const end = exp.endDate ? new Date(exp.endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                  (end.getMonth() - start.getMonth());
    totalMonths += months;
  });
  
  return Math.round(totalMonths / 12 * 10) / 10; // Round to 1 decimal place
};

export const getEducationByLevel = (): { 
  bachelors?: Education; 
  intermediate?: Education; 
  secondary?: Education; 
} => {
  const bachelors = EDUCATION_DATA.find(edu => edu.degree.includes('Bachelor'));
  const intermediate = EDUCATION_DATA.find(edu => edu.degree.includes('Intermediate'));
  const secondary = EDUCATION_DATA.find(edu => edu.degree.includes('Secondary'));
  
  return { bachelors, intermediate, secondary };
};

export const getHighestEducation = (): Education => {
  return EDUCATION_DATA[0]; // Assuming first entry is highest education
};

export const getAllTechnologies = (): string[] => {
  const technologies = new Set<string>();
  
  EXPERIENCE_DATA.forEach(exp => {
    exp.technologies.forEach(tech => technologies.add(tech));
  });
  
  return Array.from(technologies).sort();
};

export const getExperienceStats = () => {
  const totalExperience = EXPERIENCE_DATA.length;
  const workExperience = getWorkExperience().length;
  const projectExperience = getProjectExperience().length;
  const totalYears = getTotalExperienceYears();
  
  const technologies = getAllTechnologies();
  const companies = [...new Set(EXPERIENCE_DATA.map(exp => exp.company))];
  
  const avgGPA = EDUCATION_DATA.reduce((sum, edu) => sum + edu.gpa, 0) / EDUCATION_DATA.length;
  
  return {
    totalExperience,
    workExperience,
    projectExperience,
    totalYears,
    technologiesCount: technologies.length,
    companiesCount: companies.length,
    averageGPA: Math.round(avgGPA * 100) / 100,
    highestGPA: Math.max(...EDUCATION_DATA.map(edu => edu.gpa))
  };
};