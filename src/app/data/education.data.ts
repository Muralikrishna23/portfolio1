// data/education.data.ts
import { Education } from '../interfaces/education';

export const EDUCATION_DATA: Education[] = [
  {
    id: 'btech-ece',
    degree: 'Bachelor of Technology',
    field: 'Electronics and Communication Engineering',
    institution: 'Gudlavalleru Engineering College',
    location: 'Gudlavalleru, Andhra Pradesh, India',
    startYear: '2019',
    endYear: '2023',
    gpa: 7.30,
    maxGpa: 10.0,
    degreeType: 'bachelor',
    status: 'completed',
    description: 'Comprehensive study of electronics, communication systems, digital signal processing, and embedded systems. Specialized in IoT development and wireless communication technologies.',
    achievements: [
      'Completed multiple IoT and automation projects',
      'Strong academic performance in core electronics subjects',
      'Active participation in technical workshops and seminars',
      'Led team projects in embedded systems and communication',
      'Published research paper on reconfigurable antenna design'
    ],
    coursework: [
      'Digital Signal Processing',
      'Microprocessors and Microcontrollers',
      'Communication Systems',
      'Antenna Theory and Wave Propagation',
      'VLSI Design',
      'Embedded Systems',
      'Internet of Things',
      'Digital Communications',
      'RF and Microwave Engineering',
      'Control Systems',
      'Electronic Circuit Design',
      'Computer Networks'
    ],
    projects: [
      'Forest Fire Detection System using IoT',
      'Voice Controlled Home Automation',
      'Hybrid Reconfigurable Antenna Design',
      'Digital Signal Processing Applications',
      'Microcontroller-based Weather Station'
    ],
    activities: [
      'IEEE Student Member',
      'Electronics Club Secretary',
      'Technical Symposium Organizer',
      'Workshop on IoT and Embedded Systems',
      'Inter-college Technical Paper Presentation'
    ],
    honors: [
      'Merit Certificate for Project Excellence',
      'Best Project Award - IoT Category',
      'Technical Paper Publication Recognition'
    ],
    thesis: {
      title: 'Design and Development of Hybrid Reconfigurable Antenna for Wireless Communication Applications',
      description: 'Research focused on developing an adaptive antenna system capable of reconfiguring its properties for different wireless communication standards including WiFi, Bluetooth, and cellular networks.',
      advisor: ''
    },
    institutionUrl: 'https://www.gec.ac.in',
    institutionLogo: '/assets/images/institutions/gec-logo.png'
  },
  {
    id: 'intermediate',
    degree: 'Intermediate (12th Grade)',
    field: 'Mathematics, Physics, Chemistry (MPC)',
    institution: 'Narayana Junior Inter College',
    location: 'Gudivada, Andhra Pradesh, India',
    startYear: '2017',
    endYear: '2019',
    gpa: 9.63,
    maxGpa: 10.0,
    degreeType: 'high-school',
    status: 'completed',
    description: 'Focused on Mathematics, Physics, and Chemistry with excellent academic performance. Built strong foundation in analytical thinking and problem-solving skills.',
    achievements: [
      'Achieved 9.63 GPA with distinction',
      'Consistently ranked in top 5% of the class',
      'Strong foundation in mathematics and science subjects',
      'Developed analytical and problem-solving skills',
      'Participated in science exhibitions and competitions'
    ],
    coursework: [
      'Advanced Mathematics (Calculus, Algebra, Trigonometry)',
      'Physics (Mechanics, Thermodynamics, Electromagnetism)',
      'Chemistry (Organic, Inorganic, Physical Chemistry)',
      'English Literature and Communication',
      'Computer Science Fundamentals'
    ],
    activities: [
      'Science Club Member',
      'Mathematics Olympiad Participant',
      'Inter-school Science Exhibition',
      'Physics Laboratory Assistant',
      'Peer Tutoring Program'
    ],
    honors: [
      'Merit Certificate for Academic Excellence',
      'Best Student Award in Physics',
      'Science Exhibition - Second Prize'
    ]
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (10th Grade)',
    field: 'General Education',
    institution: 'Ravindra Bharathi School',
    location: 'Gudivada, Andhra Pradesh, India',
    startYear: '2016',
    endYear: '2017',
    gpa: 9.0,
    maxGpa: 10.0,
    degreeType: 'high-school',
    status: 'completed',
    description: 'Completed secondary education with strong academic foundation across all subjects. Developed excellent communication skills and leadership qualities.',
    achievements: [
      'Achieved 9.0 GPA in final examinations',
      'Well-rounded education across all subjects',
      'Developed strong communication and presentation skills',
      'Active participation in school cultural events',
      'Leadership role in student council activities'
    ],
    coursework: [
      'Mathematics',
      'Science (Physics, Chemistry, Biology)',
      'Social Studies (History, Geography, Civics)',
      'English Language and Literature',
      'Telugu Language and Literature',
      'Environmental Science',
      'Computer Applications'
    ],
    activities: [
      'Student Council Member',
      'School Debate Team',
      'Annual Cultural Program Organizer',
      'Sports Day Participant',
      'Community Service Activities'
    ],
    honors: [
      'Academic Excellence Award',
      'Best All-Round Student',
      'Leadership Recognition Certificate'
    ]
  }
];