'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface GitHubStats {
  repos: number;
  stars: number;
  gists: number;
  followers: number;
}

type AccentKey = 'cyan' | 'amber' | 'emerald' | 'pink';

interface StatConfig {
  key: keyof GitHubStats;
  label: string;
  description: string;
  accent: AccentKey;
  legacyClass: string;
  icon: React.ReactNode;
}

const ACCENTS: Record<
  AccentKey,
  {
    text: string;
    iconBg: string;
    ring: string;
    glow: string;
    bar: string;
    dot: string;
  }
> = {
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

function RepoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="12" r="2.5" />
      <path d="M6 8.5v7" />
      <path d="M6 12h6a3 3 0 0 0 3-3V8" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.77l-5.9 3.1 1.13-6.57L2.45 9.64l6.6-.96L12 2.5z" />
    </svg>
  );
}

function GistIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19" />
      <circle cx="10" cy="8" r="3.5" />
      <path d="M20 19v-1a3 3 0 0 0-2.25-2.9" />
      <path d="M15 5.13a3.5 3.5 0 0 1 0 6.74" />
    </svg>
  );
}

function GitHubLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.11-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.16 5.56.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.78.54 4.46-1.5 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5z" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const prevTarget = useRef(0);

  useEffect(() => {
    if (target === prevTarget.current) return;
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
  }, [target, duration]);

  return value;
}

function StatCard({
  config,
  value,
  max,
}: {
  config: StatConfig;
  value: number;
  max: number;
}) {
  const accent = ACCENTS[config.accent];
  const animated = useCountUp(value);
  const barWidth = Math.min((value / max) * 100, 100);

  return (
    <div
      className={`${config.legacyClass} group relative overflow-hidden rounded-2xl bg-slate-900/60 p-5 backdrop-blur-xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 ${accent.ring} ${accent.glow}`}
    >
      {/* corner glow */}
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-3xl transition-opacity duration-300 group-hover:opacity-60 ${accent.dot}`}
      />

      <div className="relative flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          {config.label}
        </span>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent.iconBg}`}
        >
          {config.icon}
        </span>
      </div>

      <div className="relative mt-5 flex items-end gap-2">
        <span className={`text-4xl font-bold tabular-nums ${accent.text}`}>
          {animated}
        </span>
        <span className="mb-1 text-xs font-medium text-slate-400">total</span>
      </div>

      <p className="relative mt-1 text-xs text-slate-400">{config.description}</p>

      <div className="relative mt-5 h-1 w-full overflow-hidden rounded-full bg-white/5">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${accent.bar} transition-all duration-1000 ease-out`}
          style={{ width: `${barWidth}%` }}
        />
      </div>
    </div>
  );
}

const STAT_CONFIG: StatConfig[] = [
  {
    key: 'repos',
    label: 'Repositories',
    description: 'Public repositories',
    accent: 'cyan',
    legacyClass: 'stat-card-blue',
    icon: <RepoIcon />,
  },
  {
    key: 'stars',
    label: 'Stars',
    description: 'Received on projects',
    accent: 'amber',
    legacyClass: 'stat-card-yellow',
    icon: <StarIcon />,
  },
  {
    key: 'gists',
    label: 'Gists',
    description: 'Public gists',
    accent: 'emerald',
    legacyClass: 'stat-card-green',
    icon: <GistIcon />,
  },
  {
    key: 'followers',
    label: 'Followers',
    description: 'GitHub followers',
    accent: 'pink',
    legacyClass: 'stat-card-pink',
    icon: <UsersIcon />,
  },
];

const STAT_MAX: Record<keyof GitHubStats, number> = {
  repos: 50,
  stars: 100,
  gists: 50,
  followers: 100,
};

export default function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 4,
    stars: 0,
    gists: 0,
    followers: 0,
  });

  const username = 'Kacong05';

  useEffect(() => {
    let cancelled = false;

    async function fetchGitHubStats() {
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: 'application/vnd.github+json' },
            cache: 'no-store',
          }),
          fetch(
            `https://api.github.com/users/${username}/repos?per_page=100`,
            {
              headers: { Accept: 'application/vnd.github+json' },
              cache: 'no-store',
            }
          ),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          // Likely rate-limited (403) or offline; keep previous stats
          return;
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        const totalStars = Array.isArray(reposData)
          ? reposData.reduce(
              (acc: number, repo: { stargazers_count?: number }) =>
                acc + (repo.stargazers_count ?? 0),
              0
            )
          : 0;

        if (cancelled) return;

        setStats({
          repos: userData.public_repos ?? 0,
          stars: totalStars,
          gists: userData.public_gists ?? 0,
          followers: userData.followers ?? 0,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    }

    fetchGitHubStats();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="github"
      className="github-section relative overflow-hidden px-6 py-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="gradient-text text-3xl font-bold md:text-5xl">
            GitHub Statistics
          </h2>
          <p className="github-subtitle mx-auto mt-3 max-w-xl text-sm text-slate-400 md:text-base">
            A snapshot of my open source activity, contributions, and projects on GitHub.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STAT_CONFIG.map((config) => (
            <StatCard
              key={config.key}
              config={config}
              value={stats[config.key]}
              max={STAT_MAX[config.key]}
            />
          ))}
        </div>

        {/* GitHub readme stats + streak */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-2xl bg-slate-900/60 p-3 ring-1 ring-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:ring-cyan-400/30">
            <Image
              src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=1f6feb&text_color=c9d1d9`}
              alt="GitHub Stats"
              width={500}
              height={195}
              unoptimized
              className="h-auto w-full rounded-xl"
            />
          </div>
          <div className="group relative overflow-hidden rounded-2xl bg-slate-900/60 p-3 ring-1 ring-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:ring-fuchsia-400/30">
            <Image
              src={`https://streak-stats.demolab.com?user=${username}&theme=radical&hide_border=true&background=0d1117&stroke=58a6ff&ring=58a6ff&fire=ff6b6b&currStreakLabel=c9d1d9`}
              alt="GitHub Streak"
              width={500}
              height={195}
              unoptimized
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>

        {/* Contribution graph */}
        <div
          className="contribution-graph-wrapper relative mt-10 overflow-hidden rounded-2xl bg-slate-900/60 p-6 ring-1 ring-white/10 backdrop-blur-xl md:p-8"
          style={{ borderColor: '#334155' }}
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="github-subtitle text-base font-semibold text-slate-100 md:text-lg">
                Contribution Activity
              </h3>
              <p className="text-xs text-slate-400">
                Past year of contributions on @{username}
              </p>
            </div>
            <span className="hidden items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-slate-400 ring-1 ring-white/10 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Last 12 months
            </span>
          </div>
          <Image
            src={`https://ghchart.rshah.org/58a6ff/${username}`}
            alt="GitHub Contribution Graph"
            width={1000}
            height={160}
            unoptimized
            className="mx-auto w-full max-w-4xl rounded-lg"
          />
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
          >
            <span className="cta-button-inner inline-flex items-center gap-2">
              <GitHubLogo />
              View GitHub Profile
              <ArrowUpRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
