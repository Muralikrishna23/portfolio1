// services/contact.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';

// Contact interfaces - defined in service for now
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  subject?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  consent: boolean;
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
  type: 'email' | 'phone' | 'linkedin' | 'github' | 'location';
  label: string;
  value: string;
  icon: string;
  primary: boolean;
  description?: string;
  available?: boolean;
  responseTime?: string;
}

// Contact message interface for the component
export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  consent: boolean;
  timestamp: string;
  userAgent: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly EMAIL_API_URL = 'https://formspree.io/f/your-form-id'; // Replace with actual endpoint
  private readonly CONTACT_METHODS: ContactMethod[] = [
    {
      type: 'email',
      label: 'Email',
      value: 'jakkamsettimuralikrishna2000@gmail.com',
      icon: '📧',
      primary: true,
      description: 'Best for project inquiries and professional discussions',
      responseTime: 'Within 24 hours'
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '+91 9346098278',
      icon: '📱',
      primary: false,
      description: 'Available during business hours (9 AM - 6 PM IST)',
      responseTime: '9 AM - 6 PM IST'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/muralikrishna-jakkamsetti-57bb901b7/',
      icon: '💼',
      primary: true,
      description: 'Let\'s connect professionally'
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'https://github.com/Muralikrishna23',
      icon: '🐙',
      primary: true,
      description: 'Check out my code and contributions'
    },
    {
      type: 'location',
      label: 'Location',
      value: 'Pedapalaparru, Eluru District, Andhra Pradesh, India - 521323',
      icon: '📍',
      primary: false,
      description: 'Available for local opportunities'
    }
  ];

  private messages: ContactMessage[] = [];

  constructor() {}

  // NEW METHOD: Add this method for the contact component
  async sendMessage(contactData: ContactMessage): Promise<ContactResponse> {
    // Simulate API call with delay
    await this.delay(1500);
    
    // Simulate occasional errors (10% chance)
    if (Math.random() < 0.1) {
      throw new Error('Network error occurred. Please try again.');
    }

    // Generate unique ID
    const id = this.generateSubmissionId();
    
    // Store message (in real app, this would be sent to backend)
    const messageWithId = { ...contactData, id };
    this.messages.push(messageWithId);
    
    // Log to console for development
    console.log('Message sent:', messageWithId);
    
    return {
      success: true,
      message: 'Thank you for your message! I will get back to you within 24 hours.',
      submissionId: id,
      estimatedResponseTime: '4-24 hours'
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Contact Methods
  getContactMethods(): Observable<ContactMethod[]> {
    return of(this.CONTACT_METHODS);
  }

  getPrimaryContactMethods(): Observable<ContactMethod[]> {
    const primary = this.CONTACT_METHODS.filter(method => method.primary);
    return of(primary);
  }

  getContactMethodByType(type: string): Observable<ContactMethod | undefined> {
    const method = this.CONTACT_METHODS.find(m => m.type === type);
    return of(method);
  }

  // Form Submission (alternative method)
  submitContactForm(formData: ContactForm): Observable<ContactResponse> {
    // Validate form data
    const validation = this.validateContactForm(formData);
    if (!validation.isValid) {
      return throwError(() => ({
        success: false,
        message: validation.errors.join(', '),
        errors: validation.errors
      }));
    }

    // In a real application, this would make an HTTP request
    // For demo purposes, we'll simulate the API call
    return this.simulateApiCall(formData).pipe(
      delay(1500), // Simulate network delay
      catchError(error => throwError(() => ({
        success: false,
        message: 'Failed to send message. Please try again later.',
        error: error.message
      })))
    );
  }

  // Email Services
  sendEmail(to: string, subject: string, body: string): Observable<boolean> {
    // In a real app, this would integrate with an email service
    console.log('Sending email:', { to, subject, body });
    return of(true).pipe(delay(1000));
  }

  // Availability Status
  getAvailabilityStatus(): Observable<{
    available: boolean;
    status: string;
    message: string;
    nextAvailable?: string;
  }> {
    // This could be dynamic based on calendar integration
    return of({
      available: true,
      status: 'Available',
      message: 'Available for new opportunities and projects',
      nextAvailable: undefined
    });
  }

  // Contact Statistics
  getContactStats(): Observable<{
    totalInquiries: number;
    responseRate: number;
    averageResponseTime: string;
    preferredContactMethod: string;
  }> {
    return of({
      totalInquiries: 45,
      responseRate: 98,
      averageResponseTime: '4 hours',
      preferredContactMethod: 'email'
    });
  }

  // Get stored messages
  getMessages(): ContactMessage[] {
    return [...this.messages];
  }

  // Form Validation
  private validateContactForm(formData: ContactForm): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    // Required fields
    if (!formData.name?.trim()) {
      errors.push('Name is required');
    }

    if (!formData.email?.trim()) {
      errors.push('Email is required');
    } else if (!this.isValidEmail(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    if (!formData.message?.trim()) {
      errors.push('Message is required');
    } else if (formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters long');
    }

    // Optional field validations
    if (formData.phone && !this.isValidPhone(formData.phone)) {
      errors.push('Please enter a valid phone number');
    }

    if (formData.website && !this.isValidUrl(formData.website)) {
      errors.push('Please enter a valid website URL');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  private simulateApiCall(formData: ContactForm): Observable<ContactResponse> {
    // Simulate different response scenarios
    const random = Math.random();
    
    if (random > 0.9) {
      // 10% chance of failure
      return throwError(() => new Error('Network error'));
    }
    
    // 90% chance of success
    return of({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you within 24 hours.',
      submissionId: this.generateSubmissionId(),
      estimatedResponseTime: '4-24 hours'
    });
  }

  private generateSubmissionId(): string {
    return 'msg_' + Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Newsletter/Updates (future feature)
  subscribeToNewsletter(email: string): Observable<boolean> {
    if (!this.isValidEmail(email)) {
      return throwError(() => new Error('Invalid email address'));
    }
    
    // Simulate newsletter subscription
    return of(true).pipe(delay(800));
  }

  // Social Media Integration
  getSocialMediaLinks(): Observable<{
    platform: string;
    url: string;
    username: string;
    followers?: number;
    icon: string;
  }[]> {
    return of([
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/muralikrishna-jakkamsetti-57bb901b7/',
        username: 'muralikrishna-jakkamsetti',
        followers: 250,
        icon: 'linkedin'
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/Muralikrishna23',
        username: 'Muralikrishna23',
        followers: 45,
        icon: 'github'
      }
    ]);
  }

  // Quick Actions
  initiateCall(phoneNumber: string): void {
    window.open(`tel:${phoneNumber}`);
  }

  initiateEmail(email: string, subject?: string): void {
    const mailtoUrl = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
    window.open(mailtoUrl);
  }

  openSocialMedia(url: string): void {
    window.open(url, '_blank');
  }

  copyToClipboard(text: string): Promise<boolean> {
    return navigator.clipboard.writeText(text).then(
      () => true,
      () => false
    );
  }

  // Auto-reply functionality
  getAutoReplyMessage(): Observable<string> {
    return of(
      'Thank you for reaching out! I\'ve received your message and will respond within 24 hours. ' +
      'For urgent inquiries, please call +91 9346098278 during business hours (9 AM - 6 PM IST).'
    );
  }

  // Email validation (public method)
  validateEmail(email: string): boolean {
    return this.isValidEmail(email);
  }

  // Phone validation (public method)
  validatePhone(phone: string): boolean {
    return this.isValidPhone(phone);
  }
}