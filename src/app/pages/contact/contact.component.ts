import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactService, ContactMessage, ContactResponse } from '../../services/contact.service';
import { AnimationService } from '../../services/animation.service';

interface ContactMethod {
  id: string;
  type: 'email' | 'phone' | 'location' | 'social';
  icon: string;
  label: string;
  value: string;
  action?: string;
  available: boolean;
  responseTime?: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  private animationService = inject(AnimationService);

  contactForm: FormGroup;
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  submitMessage = '';

  personalInfo = {
    name: 'Muralikrishna Jakkamsetti',
    title: 'Software Developer',
    company: 'Samtex Solutions',
    location: 'Pedapalaparru, 521323, Eluru Dst., India',
    timezone: 'IST (GMT+5:30)',
    availability: 'Available for new opportunities',
    responseTime: 'Usually responds within 24 hours',
    email: 'jakkamsettimuralikrishna2000@gmail.com',
    phone: '+91 93460 98278',
    github: 'https://github.com/Muralikrishna23',
    linkedin: 'https://www.linkedin.com/in/muralikrishna-jakkamsetti-57bb901b7/'
  };

  contactMethods: ContactMethod[] = [
    {
      id: '1',
      type: 'email',
      icon: 'mail',
      label: 'Email',
      value: 'jakkamsettimuralikrishna2000@gmail.com',
      action: 'mailto:jakkamsettimuralikrishna2000@gmail.com',
      available: true,
      responseTime: 'Within 24 hours'
    },
    {
      id: '2',
      type: 'phone',
      icon: 'phone',
      label: 'Phone',
      value: '+91 93460 98278',
      action: 'tel:+919346098278',
      available: true,
      responseTime: '9 AM - 6 PM IST'
    },
    {
      id: '3',
      type: 'location',
      icon: 'map-pin',
      label: 'Location',
      value: 'Eluru District, Andhra Pradesh, India',
      available: true
    }
  ];

  socialLinks: SocialLink[] = [
    {
      platform: 'GitHub',
      url: 'https://github.com/Muralikrishna23',
      icon: 'github',
      username: 'Muralikrishna23'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muralikrishna-jakkamsetti-57bb901b7/',
      icon: 'linkedin',
      username: 'muralikrishna-jakkamsetti'
    }
  ];

  faqs = [
    {
      question: 'What is your experience with web development?',
      answer: 'I have 1.5+ years of experience developing web applications using Java, Spring Boot, Python, and modern frontend technologies. I specialize in creating scalable backend systems and IoT monitoring solutions.'
    },
    {
      question: 'Are you available for freelance projects?',
      answer: 'Yes, I am open to discussing freelance opportunities, especially projects involving Java, Spring Boot, Python, or IoT development. Please reach out with your project details.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'My primary stack includes Java, Spring Boot, Python, JavaScript, HTML/CSS, SQL, and IoT technologies. I also have experience with Linux, Git, and various database systems.'
    },
    {
      question: 'How do you approach new projects?',
      answer: 'I believe in understanding the requirements thoroughly, planning the architecture carefully, and implementing solutions with clean, maintainable code. I prioritize communication and iterative development.'
    },
    {
      question: 'What is your preferred way to communicate?',
      answer: 'Email is best for detailed discussions and project requirements. For quick questions or urgent matters, phone calls work well during business hours (9 AM - 6 PM IST).'
    }
  ];

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(20)]],
      projectType: [''],
      budget: [''],
      timeline: [''],
      consent: [false, Validators.requiredTrue]
    });
  }

  ngOnInit() {
    this.animationService.initializeScrollAnimations();
  }

  get formControls() {
    return this.contactForm.controls;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) {
        return `${this.getFieldLabel(fieldName)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        const minLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldLabel(fieldName)} must be at least ${minLength} characters`;
      }
    }
    return '';
  }

  getFieldLabel(fieldName: string): string {
    const labels: { [key: string]: string } = {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      consent: 'Consent'
    };
    return labels[fieldName] || fieldName;
  }

  async onSubmit() {
    if (this.contactForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitStatus = 'idle';

      try {
        const formData: ContactMessage = {
          ...this.contactForm.value,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        };
        
        const response = await this.contactService.sendMessage(formData);

        this.submitStatus = 'success';
        this.submitMessage = response.message || 'Thank you for your message! I\'ll get back to you soon.';
        this.contactForm.reset();
        
        // Reset form validation state
        Object.keys(this.contactForm.controls).forEach(key => {
          this.contactForm.get(key)?.setErrors(null);
        });

      } catch (error: any) {
        this.submitStatus = 'error';
        this.submitMessage = error.message || 'Sorry, there was an error sending your message. Please try again or contact me directly.';
        console.error('Contact form submission error:', error);
      } finally {
        this.isSubmitting = false;
        
        // Auto-hide status message after 5 seconds
        setTimeout(() => {
          this.submitStatus = 'idle';
          this.submitMessage = '';
        }, 5000);
      }
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  openContactMethod(method: ContactMethod) {
    if (method.action) {
      window.location.href = method.action;
    }
  }

  openSocialLink(social: SocialLink) {
    window.open(social.url, '_blank', 'noopener,noreferrer');
  }

  copyToClipboard(text: string, type: string) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        this.showCopyFeedback(type);
      }).catch(() => {
        this.fallbackCopyToClipboard(text, type);
      });
    } else {
      this.fallbackCopyToClipboard(text, type);
    }
  }

  private fallbackCopyToClipboard(text: string, type: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      this.showCopyFeedback(type);
    } catch (err) {
      console.error('Fallback: Unable to copy', err);
    } finally {
      document.body.removeChild(textArea);
    }
  }

  private showCopyFeedback(type: string) {
    const message = `${type} copied to clipboard!`;
    console.log(message);
  }

  downloadVCard() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${this.personalInfo.name}
ORG:${this.personalInfo.company}
TITLE:${this.personalInfo.title}
EMAIL:${this.personalInfo.email}
TEL:${this.personalInfo.phone}
ADR:;;${this.personalInfo.location};;;;
URL:${this.personalInfo.github}
URL:${this.personalInfo.linkedin}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${this.personalInfo.name.replace(/\s+/g, '_')}_Contact.vcf`;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  scrollToForm() {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Helper methods for template
  sendEmail() {
    window.location.href = `mailto:${this.personalInfo.email}`;
  }

  callPhone() {
    window.location.href = `tel:${this.personalInfo.phone}`;
  }

  openSocialLinkByUrl(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

