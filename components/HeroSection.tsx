'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const ROLES = ['Web Developer', 'Problem Solver'];

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.11-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.16 5.56.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.78.54 4.46-1.5 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.02H4.8V23H.22V8.02zM8.34 8.02h4.39v2.05h.06c.61-1.16 2.1-2.39 4.33-2.39 4.63 0 5.49 3.05 5.49 7.02V23h-4.58v-6.66c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.74-2.56 3.53V23H8.34V8.02z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  const fullName = 'Aditya Dwi Hardiansyah';

  // Role rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16 pb-16"
    >
      {/* Aurora background blobs */}
      <div className="hero-aurora absolute inset-0 -z-10 overflow-hidden">
        <span className="hero-blob hero-blob-1" />
        <span className="hero-blob hero-blob-2" />
        <span className="hero-blob hero-blob-3" />
      </div>

      {/* Grid pattern overlay */}
      <div className="hero-grid absolute inset-0 -z-10" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,11,20,0.85)_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Greeting */}
        <p className="hero-greeting text-sm font-light tracking-wide text-slate-400 md:text-base">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="hero-name relative mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
          <span className="hero-name-text" aria-label={fullName}>
            {fullName.split('').map((char, i) => {
              if (char === ' ') return <span key={i}> </span>;
              return (
                <span
                  key={i}
                  aria-hidden="true"
                  className="animate-letter"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        </h1>

        {/* Role rotator */}
        <div className="hero-role mt-5 flex flex-wrap items-center justify-center text-base md:text-xl">
          <span className="text-slate-400">I&apos;m a&nbsp;</span>
          <span
            key={roleIndex}
            className="hero-role-item"
          >
            {ROLES[roleIndex]}
          </span>
        </div>

        {/* Tagline */}
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
          I craft elegant, performant, and accessible web experiences with a focus on
          design details and clean code.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#projects"
            className="cta-button group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/30"
          >
            <span className="cta-button-inner inline-flex items-center gap-2">
              View My Work
              <ArrowRightIcon />
            </span>
          </Link>
          <Link
            href="mailto:adityahardiansyah5@gmail.com"
            className="hero-button-secondary group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-slate-200 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
          >
            <MailIcon />
            Contact Me
          </Link>
        </div>

        {/* Socials */}
        <div className="mt-10 flex items-center gap-3">
          <span className="hidden h-px w-10 bg-white/10 sm:block" />
          {[
            { href: 'https://github.com/Kacong05', label: 'GitHub', icon: <GithubIcon /> },
            { href: '#', label: 'LinkedIn', icon: <LinkedinIcon /> },
            { href: 'https://www.instagram.com/adtya_dhr?igsh=MWUwZ3QwcjV5MmZ5cA==', label: 'Instagram', icon: <InstagramIcon /> },
          ].map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hero-social flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              {s.icon}
            </Link>
          ))}
          <span className="hidden h-px w-10 bg-white/10 sm:block" />
        </div>
      </div>
    </section>
  );
}
