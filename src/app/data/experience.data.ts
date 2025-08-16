// data/experience.data.ts
import { Experience } from '../interfaces/experience';

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'samtex-solutions',
    position: 'Software Developer',
    company: 'Samtex Solutions',
    location: 'India',
    startDate: '2024-10-01',
    endDate: 'Present',
    current: true,
    type: 'full-time',
    description: 'Developing cutting-edge web applications and IoT device monitoring systems using modern technologies like Spring Boot, Java, and Python.',
    responsibilities: [
      'Design and develop scalable web applications using Spring Boot and Java',
      'Create IoT device monitoring systems with real-time data visualization',
      'Implement Python-based solutions for data processing and analysis',
      'Deliver high-quality software solutions',
      'Optimize application performance and ensure system scalability',
      'Participate in code reviews and maintain coding standards',
      //'Mentor junior developers and contribute to technical documentation'
    ],
    achievements: [
      // 'Successfully delivered 5+ IoT monitoring solutions for industrial clients',
      'Improved system performance by 40% through optimization techniques',
      //'Led development of microservices architecture for better scalability',
      //'Implemented automated testing pipeline reducing bugs by 60%',
      'Contributed to architectural decisions for multi-tenant applications',
      'Developed RESTful APIs for seamless integration with IoT devices',
      'Enhanced user experience through responsive design and intuitive interfaces',
      'Learned and achieved proficiency in Spring Boot and Java for backend development',
      'Learned how to connect and collect data from devices through Modbus, OPC UA, OPC DA',
      'Learned how to publish websites on On-premise servers'

    ],
    technologies: [
      'Spring Boot',
      'Spring security',
      'Java',
      'Python',
      'IoT Monitoring',
      'Data Visualization',
      'REST APIs',
      'MySQL'
    ],
    projects: [
      'Device Data Monitoring through Modbus',
      'Web Application for IoT Device Management',
      'Web Application to Monitor data through OPC UA',
      'Web Application to Collect, Visualize and Monitor data for Water Meter Devices'
    ],
    teamSize: 4,
    companyDescription: 'Leading technology solutions provider specializing in Automation and IoT solutions for various industries.',
    companyUrl: 'https://samtex.in'
  },
  {
    id: 'forest-fire-internship',
    position: 'IoT Development Intern',
    company: 'Forest Department Research Project',
    location: 'Andhra Pradesh, India',
    startDate: '2022-05-01',
    endDate: '2022-08-01',
    current: false,
    type: 'internship',
    description: 'Developed an innovative IoT-based forest fire detection system as part of a research initiative to improve early warning systems for forest fire prevention.',
    responsibilities: [
      'Design and implement IoT sensors for fire detection in forest environments',
      'Develop real-time monitoring and alert notification systems',
      'Create SMS and email notification systems for emergency alerts',
      'Program microcontrollers for reliable sensor data collection and transmission',
      'Conduct field testing and system validation in various environmental conditions',
      'Document system architecture and create user manuals',
      'Present project findings to stakeholders and government officials'
    ],
    achievements: [
      'Successfully created working prototype with 85% detection accuracy',
      'Implemented solar-powered system for remote forest deployment',
      'Reduced false alarm rate to under 5% through sensor fusion techniques',
      'Gained recognition from Forest Department for innovative solution',
      'Published technical paper on IoT-based environmental monitoring'
    ],
    technologies: [
      'Arduino',
      'IoT Sensors',
      'C',
      'Node Red',
      'GSM Communication',
      'SMS Gateway',
      'Environmental Sensors'
    ],
    projects: ['forest-fire-detection'],
    teamSize: 3,
    companyDescription: ' initiative for forest fire prevention and environmental monitoring'
  }
];