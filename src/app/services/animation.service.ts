import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private isAnimating = new BehaviorSubject<boolean>(false);
  public isAnimating$ = this.isAnimating.asObservable();
  private observers: IntersectionObserver[] = []; // Track observers for cleanup

  constructor() {}

  /**
   * Initialize scroll-based animations using Intersection Observer
   */
  initializeScrollAnimations(): void {
    // Initialize intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animationType = element.getAttribute('data-animate');
          const delay = element.getAttribute('data-delay');
          
          if (delay) {
            setTimeout(() => {
              element.classList.add('in-view');
            }, parseInt(delay));
          } else {
            element.classList.add('in-view');
          }
          
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Store observer for cleanup
    this.observers.push(observer);

    // Observe all elements with animation attributes
    setTimeout(() => {
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach((element) => {
        observer.observe(element);
      });
    }, 100);
  }

  /**
   * Typewriter effect for text elements
   */
  typewriterEffect(element: HTMLElement, text: string, speed: number = 50): Promise<void> {
    return new Promise((resolve) => {
      element.textContent = '';
      let i = 0;
      
      const timer = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(timer);
          resolve();
        }
      }, speed);
    });
  }

  /**
   * Animate number counting up
   */
  animateNumber(element: HTMLElement, target: number, duration: number = 2000): void {
    const start = 0;
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);
      
      element.textContent = current.toString();
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }

  /**
   * Stagger animation for multiple elements
   */
  staggerAnimation(elements: NodeListOf<Element> | Element[], delay: number = 100): void {
    elements.forEach((element, index) => {
      setTimeout(() => {
        (element as HTMLElement).classList.add('animate-in');
      }, index * delay);
    });
  }

  /**
   * Fade in animation
   */
  fadeIn(element: HTMLElement, duration: number = 500): Promise<void> {
    return new Promise((resolve) => {
      element.style.opacity = '0';
      element.style.transition = `opacity ${duration}ms ease`;
      
      requestAnimationFrame(() => {
        element.style.opacity = '1';
        setTimeout(resolve, duration);
      });
    });
  }

  /**
   * Fade out animation
   */
  fadeOut(element: HTMLElement, duration: number = 500): Promise<void> {
    return new Promise((resolve) => {
      element.style.transition = `opacity ${duration}ms ease`;
      element.style.opacity = '0';
      setTimeout(resolve, duration);
    });
  }

  /**
   * Slide in from direction
   */
  slideIn(element: HTMLElement, direction: 'left' | 'right' | 'up' | 'down' = 'up', duration: number = 500): Promise<void> {
    return new Promise((resolve) => {
      const transforms = {
        left: 'translateX(-100%)',
        right: 'translateX(100%)',
        up: 'translateY(-100%)',
        down: 'translateY(100%)'
      };

      element.style.transform = transforms[direction];
      element.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      
      requestAnimationFrame(() => {
        element.style.transform = 'translate(0, 0)';
        setTimeout(resolve, duration);
      });
    });
  }

  /**
   * Scale animation
   */
  scale(element: HTMLElement, fromScale: number = 0, toScale: number = 1, duration: number = 500): Promise<void> {
    return new Promise((resolve) => {
      element.style.transform = `scale(${fromScale})`;
      element.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      
      requestAnimationFrame(() => {
        element.style.transform = `scale(${toScale})`;
        setTimeout(resolve, duration);
      });
    });
  }

  /**
   * Pulse animation
   */
  pulse(element: HTMLElement, intensity: number = 1.1, duration: number = 300): void {
    element.style.transition = `transform ${duration}ms ease`;
    element.style.transform = `scale(${intensity})`;
    
    setTimeout(() => {
      element.style.transform = 'scale(1)';
    }, duration);
  }

  /**
   * Shake animation
   */
  shake(element: HTMLElement, intensity: number = 10, duration: number = 500): void {
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;
      
      if (progress < 1) {
        const displacement = Math.sin(progress * Math.PI * 8) * intensity * (1 - progress);
        element.style.transform = `translateX(${displacement}px)`;
        requestAnimationFrame(animate);
      } else {
        element.style.transform = 'translateX(0)';
      }
    };
    
    requestAnimationFrame(animate);
  }

  /**
   * Bounce animation
   */
  bounce(element: HTMLElement, height: number = 20, duration: number = 600): void {
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;
      
      if (progress < 1) {
        const bounce = Math.abs(Math.sin(progress * Math.PI * 3)) * height * (1 - progress);
        element.style.transform = `translateY(-${bounce}px)`;
        requestAnimationFrame(animate);
      } else {
        element.style.transform = 'translateY(0)';
      }
    };
    
    requestAnimationFrame(animate);
  }

  /**
   * Loading animation state management
   */
  setLoading(isLoading: boolean): void {
    this.isAnimating.next(isLoading);
  }

  /**
   * Get loading state
   */
  getLoadingState(): boolean {
    return this.isAnimating.value;
  }

  /**
   * Smooth scroll to element
   */
  scrollToElement(elementId: string, offset: number = 0): void {
    const element = document.getElementById(elementId);
    if (element) {
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Animate progress bar
   */
  animateProgressBar(element: HTMLElement, targetPercentage: number, duration: number = 1000): void {
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentPercentage = targetPercentage * easeOut;
      
      element.style.width = `${currentPercentage}%`;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }

  /**
   * Parallax effect
   */
  parallax(element: HTMLElement, speed: number = 0.5): () => void {
    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      element.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', updateParallax);
    
    // Return cleanup function
    return () => window.removeEventListener('scroll', updateParallax);
  }

  /**
   * Cleanup animations and observers
   */
  cleanup(): void {
    // Disconnect all intersection observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    // Remove any global event listeners or observers
    this.isAnimating.next(false);
  }

  /**
   * Re-initialize animations after DOM changes
   */
  reinitialize(): void {
    this.cleanup();
    setTimeout(() => {
      this.initializeScrollAnimations();
    }, 100);
  }
}