'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Smooth scroll-triggered reveal: slides up from below + fades in.
 * Triggers a bit before the element fully enters the viewport so the
 * animation reads as "responding to the scroll" rather than popping in.
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

    // Already on screen at mount? Reveal immediately.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
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
      {
        // Start as soon as 5 % of the card peeks above the fold,
        // and pre-trigger 15 % above the bottom edge so the slide-up
        // feels coupled with the scroll.
        threshold: 0.05,
        rootMargin: '0px 0px -15% 0px',
      }
    );
    obs.observe(el);

    // Safety: always reveal after 2 s no matter what.
    const timer = window.setTimeout(() => setShown(true), 2000);

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
        transform: shown ? 'translate3d(0, 0, 0)' : 'translate3d(0, 80px, 0)',
        // Long, gentle ease-out for the slide. Opacity finishes a hair faster
        // so the card feels "settling" rather than "still arriving".
        transition: [
          `opacity 900ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          `transform 1100ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        ].join(', '),
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
