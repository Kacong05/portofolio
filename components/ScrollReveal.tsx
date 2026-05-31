'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Wraps any element so it slides up + fades in the first time it enters the
 * viewport. Render a fallback "visible" state if IntersectionObserver isn't
 * available, and a 1.5s safety timeout so the content always shows up.
 */
export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }

    // If the element is already on screen at mount (above the fold), reveal immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    obs.observe(el);

    // Safety net: always reveal after 1.5s, even if observer never fires.
    const timer = window.setTimeout(() => setShown(true), 1500);

    return () => {
      obs.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
