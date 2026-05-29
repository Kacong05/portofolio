'use client';

const MARQUEE_ITEMS = [
  'AVAILABLE FOR FREELANCE',
  'WEB DEVELOPER',
  'BASED IN JEMBER, INDONESIA',
  "LET'S TALK",
  'LARAVEL & REACT',
  'OPEN TO COLLABORATION',
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export default function Marquee() {
  return (
    <div className="contact-marquee relative -mt-28 border-y border-white/10 bg-white/[0.02] md:-mt-24">
      <div className="contact-marquee-track flex whitespace-nowrap py-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            aria-hidden={dup === 1}
            className="contact-marquee-list flex shrink-0 items-center gap-10 px-5"
          >
            {MARQUEE_ITEMS.map((item) => (
              <li key={`${dup}-${item}`} className="flex items-center gap-10">
                <span>{item}</span>
                <PlusIcon />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
