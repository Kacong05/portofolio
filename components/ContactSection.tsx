'use client';

import Link from 'next/link';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section relative overflow-hidden bg-black pt-16 pb-10"
    >
      {/* Subtle grid pattern */}
      <div className="contact-grid pointer-events-none absolute inset-0" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[40vh] items-center justify-center px-6 pt-10 pb-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <h2 className="contact-title text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-[7rem]">
            Let&apos;s build something.
          </h2>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="mailto:adityahardiansyah5@gmail.com"
              className="contact-pill group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              <MailIcon />
              Send Email
            </Link>
            <Link
              href="https://wa.me/6285708779638"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#14f195]/40 hover:text-[#14f195] hover:bg-white/10"
            >
              <WhatsAppIcon />
              WhatsApp
            </Link>
          </div>

          {/* Socials */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { href: 'https://github.com/Kacong05', label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/aditya-dwi-hardiansyah-902903412?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
              { href: 'https://www.instagram.com/adtya_dhr?igsh=MWUwZ3QwcjV5MmZ5cA==', label: 'Instagram' },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-mini-pill inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-[11px] font-medium text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Big outline text */}
      <div className="contact-bigtext pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden text-center">
        <span className="contact-bigtext-inner block text-[18vw] font-black leading-none tracking-tighter">
          PORTFOLIO
        </span>
      </div>
    </section>
  );
}
