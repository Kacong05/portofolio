'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyExternalImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

/**
 * Loads the image only after the wrapper enters the viewport.
 * Used for the GitHub readme cards / streak / contribution graph so that
 * their built-in SVG animations (counters, ring fills, etc.) play right
 * when the user scrolls to the GitHub section instead of silently on
 * initial page load.
 */
export default function LazyExternalImage({
  src,
  alt,
  width,
  height,
  className = '',
}: LazyExternalImageProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px 100px 0px' }
    );
    obs.observe(el);

    // Safety: load after 3s no matter what
    const timer = window.setTimeout(() => setShouldLoad(true), 3000);

    return () => {
      obs.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={className}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="h-auto w-full"
          style={{ display: 'block' }}
        />
      )}
    </div>
  );
}
