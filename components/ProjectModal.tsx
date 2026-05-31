'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  cover: string;
  gallery?: { src: string; alt: string }[];
  imageAlt: string;
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.11-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.16 5.56.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.78.54 4.46-1.5 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [{ src: project.cover, alt: project.imageAlt }];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % gallery.length);
      if (e.key === 'ArrowLeft')
        setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [gallery.length, onClose]);

  const next = () => setActiveIndex((i) => (i + 1) % gallery.length);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);

  const isPortrait =
    (project.gallery?.[0]?.src || project.cover).match(/\.(jpe?g)$/i) &&
    project.gallery &&
    project.gallery.length > 0;

  return (
    <div
      className="project-modal-backdrop fixed inset-0 z-[10000] flex items-start justify-center overflow-y-auto overflow-x-hidden p-3 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="project-modal relative my-4 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl sm:my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="project-modal-close absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/70 text-slate-200 backdrop-blur-xl transition-all hover:border-white/40 hover:bg-white/15 hover:text-white"
        >
          <CloseIcon />
        </button>

        <div
          className={`relative w-full overflow-hidden bg-zinc-950 ${
            isPortrait ? 'h-[55vh] sm:h-[60vh]' : 'aspect-[16/10]'
          }`}
        >
          <Image
            key={gallery[activeIndex].src}
            src={gallery[activeIndex].src}
            alt={gallery[activeIndex].alt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="project-modal-img object-contain p-3 sm:p-4"
            priority
          />

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="project-modal-nav absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-slate-100 backdrop-blur-xl transition-all hover:border-white/40 hover:bg-white/15"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="project-modal-nav absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-slate-100 backdrop-blur-xl transition-all hover:border-white/40 hover:bg-white/15"
              >
                <ChevronRightIcon />
              </button>

              <span className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[10px] font-semibold tracking-wider text-slate-200 backdrop-blur-xl">
                {activeIndex + 1} / {gallery.length}
              </span>
            </>
          )}
        </div>

        {gallery.length > 1 && (
          <div className="border-t border-white/5 px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {gallery.map((img, i) => (
                <button
                  type="button"
                  key={img.src}
                  onClick={() => setActiveIndex(i)}
                  className={`project-modal-thumb relative h-12 w-16 shrink-0 overflow-hidden rounded-md border transition-all sm:h-14 sm:w-20 ${
                    i === activeIndex
                      ? 'border-white/60 ring-2 ring-white/30'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="px-4 py-5 sm:px-7 sm:py-7">
          <h3 className="project-title text-lg font-bold text-slate-100 sm:text-xl">
            {project.title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="project-tag rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="project-desc mt-4 text-xs leading-relaxed text-slate-400 sm:text-sm">
            {project.longDescription || project.description}
          </p>

          {project.features && project.features.length > 0 && (
            <div className="mt-5">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300 sm:text-[11px]">
                Fitur Utama
              </h4>
              <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs text-slate-300"
                  >
                    <span className="mt-0.5 text-white/70">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-400">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/5 pt-4">
            {project.liveUrl && project.liveUrl !== '#' && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-100 backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/10"
              >
                <ExternalIcon />
                Live Demo
              </Link>
            )}
            {project.repoUrl && (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-100 backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/10"
              >
                <GithubIcon />
                View Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
