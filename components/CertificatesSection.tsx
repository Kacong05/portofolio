'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image: string;
  imageAlt: string;
}

const certificates: Certificate[] = [
  {
    title: 'Cyber Security Fundamentals',
    issuer: 'HMPSTI',
    date: '2025',
    credentialUrl: '#',
    image: '/images/certifikat/cyber.jpeg',
    imageAlt: 'Cyber Security certificate',
  },
];

function CertificateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7 22l5-3 5 3-2-8.5" />
      <path d="M12 6v3l2 1" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
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

function CertificateModal({
  cert,
  onClose,
}: {
  cert: Certificate;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="project-modal-backdrop fixed inset-0 z-[10000] flex items-start justify-center overflow-y-auto overflow-x-hidden p-3 sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="project-modal relative my-4 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl sm:my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="project-modal-close absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/70 text-slate-200 backdrop-blur-xl transition-all hover:border-white/40 hover:bg-white/15 hover:text-white"
        >
          <CloseIcon />
        </button>

        {/* Image */}
        <div className="relative h-[55vh] w-full overflow-hidden bg-zinc-950 sm:h-[65vh]">
          <Image
            src={cert.image}
            alt={cert.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="project-modal-img object-contain p-3 sm:p-4"
            priority
          />
        </div>

        {/* Body */}
        <div className="px-4 py-5 sm:px-7 sm:py-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="cert-title text-lg font-bold text-slate-100 sm:text-xl">
                {cert.title}
              </h3>
              <p className="cert-issuer mt-1.5 inline-flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
                <CertificateIcon />
                {cert.issuer}
              </p>
            </div>
            <span className="cert-date inline-flex shrink-0 items-center rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              {cert.date}
            </span>
          </div>

          {cert.credentialUrl && cert.credentialUrl !== '#' && (
            <div className="mt-5 border-t border-white/5 pt-4">
              <Link
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-100 backdrop-blur-xl transition-all hover:border-white/30 hover:bg-white/10"
              >
                View credential
                <ExternalIcon />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CertificatesSection() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="certificates-section relative overflow-hidden px-6 py-24"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="gradient-text text-3xl font-bold md:text-5xl">
            Certificates
          </h2>
          <p className="certs-subtitle mx-auto mt-3 max-w-xl text-sm text-slate-400 md:text-base">
            Continuous learning through courses and certifications I&apos;ve earned.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <article
              key={c.title}
              onClick={() => setActiveCert(c)}
              className="certificate-card group relative h-full cursor-pointer overflow-hidden rounded-2xl bg-slate-900/60 ring-1 ring-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:ring-white/30"
            >
              {/* Top accent bar */}
              <span className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              {/* Cover image */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-950">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Gradient overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent" />

                {/* View badge on hover */}
                <div className="absolute right-3 top-3 translate-y-1 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-100 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View
                </div>
              </div>

              <div className="flex flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="cert-title text-base font-semibold text-slate-100 md:text-lg">
                    {c.title}
                  </h3>
                  <span className="cert-date inline-flex shrink-0 items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    {c.date}
                  </span>
                </div>
                <p className="cert-issuer mt-1.5 inline-flex items-center gap-1.5 text-xs text-slate-400 md:text-sm">
                  <CertificateIcon />
                  {c.issuer}
                </p>

                <div className="mt-4 border-t border-white/5 pt-3">
                  <span className="cert-link inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 transition-colors group-hover:text-white">
                    Click to preview
                    <ExternalIcon />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeCert && (
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}
