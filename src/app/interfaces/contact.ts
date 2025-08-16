// interfaces/contact.interface.ts
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  subject?: string;
  projectType?: ProjectType;
  budget?: BudgetRange;
  timeline?: string;
  message: string;
  preferredContact?: ContactPreference;
  subscribe?: boolean;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  estimatedResponseTime?: string;
  errors?: string[];
  error?: string;
}

export interface ContactMethod {
  type: ContactMethodType;
  label: string;
  value: string;
  icon: string;
  primary: boolean;
  description?: string;
  available?: boolean;
  responseTime?: string;
}

export type ContactMethodType = 
  | 'email'
  | 'phone'
  | 'linkedin'
  | 'github'
  | 'twitter'
  | 'whatsapp'
  | 'telegram'
  | 'location'
  | 'calendar';

export type ProjectType = 
  | 'web-development'
  | 'mobile-development'
  | 'iot-project'
  | 'embedded-systems'
  | 'consultation'
  | 'research'
  | 'freelance'
  | 'full-time'
  | 'internship'
  | 'other';

export type BudgetRange = 
  | 'under-5k'
  | '5k-15k'
  | '15k-30k'
  | '30k-50k'
  | '50k-100k'
  | 'over-100k'
  | 'hourly-rate'
  | 'equity'
  | 'discussion';

export type ContactPreference = 
  | 'email'
  | 'phone'
  | 'video-call'
  | 'in-person'
  | 'messaging';

export interface ContactValidation {
  field: keyof ContactForm;
  message: string;
  type: 'required' | 'format' | 'length' | 'custom';
}

export interface ContactStats {
  totalInquiries: number;
  responseRate: number;
  averageResponseTime: string;
  preferredContactMethod: string;
  inquiryTypes: Record<ProjectType, number>;
  monthlyInquiries: {
    month: string;
    count: number;
  }[];
}

export interface AvailabilityStatus {
  available: boolean;
  status: 'available' | 'busy' | 'away' | 'do-not-disturb';
  message: string;
  nextAvailable?: string;
  workingHours?: {
    timezone: string;
    days: string[];
    startTime: string;
    endTime: string;
  };
}

export interface ContactFormTemplate {
  type: ProjectType;
  subject: string;
  template: string;
  placeholders?: Record<string, string>;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
  username: string;
  followers?: number;
  icon: string;
  verified?: boolean;
  active?: boolean;
}

export interface CalendarSlot {
  date: string;
  time: string;
  duration: number;
  type: 'call' | 'meeting' | 'coffee' | 'consultation';
  available: boolean;
  timezone?: string;
}

export interface MeetingRequest {
  slot: CalendarSlot;
  requesterInfo: {
    name: string;
    email: string;
    company?: string;
    purpose: string;
  };
  meetingType: 'video' | 'phone' | 'in-person';
  agenda?: string;
}

export interface MeetingResponse {
  success: boolean;
  meetingId?: string;
  meetingUrl?: string;
  calendarInvite?: string;
  message: string;
}

export interface ContactAnalytics {
  pageViews: number;
  formSubmissions: number;
  conversionRate: number;
  topReferrers: string[];
  deviceBreakdown: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
  geographicData: {
    country: string;
    count: number;
  }[];
}

export interface AutoReply {
  enabled: boolean;
  subject: string;
  message: string;
  delay?: number;
  conditions?: {
    timeOfDay?: 'business-hours' | 'after-hours' | 'any';
    dayOfWeek?: string[];
    projectType?: ProjectType[];
  };
}

export interface ContactSettings {
  autoReply: AutoReply;
  notifications: {
    email: boolean;
    sms: boolean;
    slack: boolean;
    discord: boolean;
  };
  spamFiltering: {
    enabled: boolean;
    keywords: string[];
    minimumMessageLength: number;
    requireCaptcha: boolean;
  };
  rateLimiting: {
    enabled: boolean;
    maxSubmissionsPerHour: number;
    maxSubmissionsPerDay: number;
  };
}