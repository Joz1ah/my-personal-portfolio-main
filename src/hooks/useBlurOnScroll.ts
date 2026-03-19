import { useEffect } from 'react';

export const useBlurOnScroll = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.blur-fade-section');
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('out-of-focus');
          entry.target.classList.add('in-focus');
          
          // Add slide animation alternating left/right
          const slideDirection = index % 2 === 0 ? 'slide-in-left' : 'slide-in-right';
          entry.target.classList.add(slideDirection);
        } else {
          entry.target.classList.remove('in-focus');
          entry.target.classList.add('out-of-focus');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
};
