import { useEffect } from 'react';

type ScrollAnimationOptions = {
  threshold?: number;
  repeat?: boolean;
  rootMargin?: string;
};

export const useScrollAnimation = ({
  threshold = 0.1,
  repeat = false,
  rootMargin = '0px',
}: ScrollAnimationOptions = {}) => {
  useEffect(() => {
    // ✅ Production-safe check
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            el.classList.add('aos-animate');
            if (!repeat) observer.unobserve(el);
          } else {
            if (repeat) {
              el.classList.remove('aos-animate');
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    const elements = document.querySelectorAll<HTMLElement>('[data-scroll-animation]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, repeat, rootMargin]);
};
