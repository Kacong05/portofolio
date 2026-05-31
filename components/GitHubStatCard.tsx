'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type AccentKey = 'cyan' | 'amber' | 'emerald' | 'pink';

interface AccentTokens {
  text: string;
  iconBg: string;
  ring: string;
  glow: string;
  bar: string;
  dot: string;
}

const ACCENTS: Record<AccentKey, AccentTokens> = {
  cyan: {
    text: 'text-cyan-300',
    iconBg: 'bg-cyan-400/10 ring-1 ring-cyan-400/30 text-cyan-300',
    ring: 'group-hover:ring-cyan-400/40',
    glow: 'group-hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.45)]',
    bar: 'from-cyan-400 to-sky-500',
    dot: 'bg-cyan-400',
  },
  amber: {
    text: 'text-amber-300',
    iconBg: 'bg-amber-400/10 ring-1 ring-amber-400/30 text-amber-300',
    ring: 'group-hover:ring-amber-400/40',
    glow: 'group-hover:shadow-[0_20px_60px_-20px_rgba(251,191,36,0.45)]',
    bar: 'from-amber-400 to-orange-500',
    dot: 'bg-amber-400',
  },
  emerald: {
    text: 'text-emerald-300',
    iconBg: 'bg-emerald-400/10 ring-1 ring-emerald-400/30 text-emerald-300',
    ring: 'group-hover:ring-emerald-400/40',
    glow: 'group-hover:shadow-[0_20px_60px_-20px_rgba(52,211,153,0.45)]',
    bar: 'from-emerald-400 to-teal-500',
    dot: 'bg-emerald-400',
  },
  pink: {
    text: 'text-pink-300',
    iconBg: 'bg-pink-400/10 ring-1 ring-pink-400/30 text-pink-300',
    ring: 'group-hover:ring-pink-400/40',
    glow: 'group-hover:shadow-[0_20px_60px_-20px_rgba(244,114,182,0.45)]',
    bar: 'from-pink-400 to-fuchsia-500',
    dot: 'bg-pink-400',
  },
};

interface StatCardProps {
  label: string;
  description: string;
  accent: AccentKey;
  legacyClass: string;
  icon: ReactNode;
  value: number;
  max: number;
}

function useCountUp(target: number, duration = 1200, enabled = true) {
  const [value, setValue] = useState(0);
  const prevTarget = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    if (target === prevTarget.current && value === target) return;
    prevTarget.current = target;

    if (target === 0) {
      setValue(0);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, enabled, value]);

  return value;
}

export default function GitHubStatCard({
  label,
  description,
  accent,
  legacyClass,
  icon,
  value,
  max,
}: StatCardProps) {
  const tokens = ACCENTS[accent];
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);

    // Safety: always trigger after 2s
    const timer = window.setTimeout(() => setInView(true), 2000);

    return () => {
      obs.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const animated = useCountUp(value, 1200, inView);
  const barWidth = inView ? Math.min((value / max) * 100, 100) : 0;

  return (
    <div
      ref={cardRef}
      className={`${legacyClass} group relative overflow-hidden rounded-2xl bg-slate-900/60 p-5 backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 ${tokens.ring} ${tokens.glow}`}
    >
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-3xl transition-opacity duration-300 group-hover:opacity-60 ${tokens.dot}`}
      />

      <div className="relative flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          {label}
        </span>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${tokens.iconBg}`}
        >
          {icon}
        </span>
      </div>

      <div className="relative mt-5 flex items-end gap-2">
        <span className={`text-4xl font-bold tabular-nums ${tokens.text}`}>
          {animated}
        </span>
        <span className="mb-1 text-xs font-medium text-slate-400">total</span>
      </div>

      <p className="relative mt-1 text-xs text-slate-400">{description}</p>

      <div className="relative mt-5 h-1 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${tokens.bar} transition-all duration-1000 ease-out`}
          style={{ width: `${barWidth}%` }}
        />
      </div>
    </div>
  );
}
