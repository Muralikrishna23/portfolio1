// interfaces/education.interface.ts
export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: string;
  endYear: string;
  gpa: number;
  maxGpa?: number;
  description?: string;
  achievements?: string[];
  coursework?: string[];
  projects?: string[];
  activities?: string[];
  honors?: string[];
  thesis?: {
    title: string;
    description: string;
    advisor: string;
    url?: string;
  };
  institutionUrl?: string;
  institutionLogo?: string;
  degreeType: DegreeType;
  status: EducationStatus;
}

export type DegreeType = 
  | 'high-school'
  | 'diploma'
  | 'associate'
  | 'bachelor'
  | 'master'
  | 'phd'
  | 'certificate'
  | 'professional';

export type EducationStatus = 
  | 'completed'
  | 'in-progress'
  | 'transferred'
  | 'dropped-out';

export interface EducationStats {
  totalDegrees: number;
  highestDegree: Education | null;
  averageGpa: number;
  totalYearsStudied: number;
  institutionsAttended: number;
}