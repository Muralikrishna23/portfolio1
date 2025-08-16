// interfaces/skill.interface.ts
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 0-100
  yearsOfExperience: number;
  icon?: string;
  color?: string;
  description?: string;
  relatedProjects?: string[];
  certifications?: string[];
  learningResources?: string[];
  lastUsed?: string;
  trending?: boolean;
  priority?: number;
  level?: number; // Add this property to fix the error
}

export type SkillCategory = 
  | 'programming-languages'
  | 'web-technologies'
  | 'iot-embedded'
  | 'electronics-rf'
  | 'databases'
  | 'tools-software'
  | 'frameworks-libraries'
  | 'soft-skills'
  | 'methodologies';

export interface SkillCategoryInfo {
  id: SkillCategory;
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface SkillStats {
  totalSkills: number;
  averageProficiency: number;
  categoryDistribution: Record<SkillCategory, number>;
  proficiencyLevels: {
    expert: number;
    advanced: number;
    intermediate: number;
    beginner: number;
  };
  trendingCount: number;
}