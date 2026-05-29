'use client';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer relative z-10 border-t border-white/10 bg-black px-6 py-5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500 sm:flex-row">
        <span>© {year} Aditya Dwi Hardiansyah. All Rights Reserved.</span>

        <span className="footer-built inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-[10px] tracking-[0.25em] text-slate-300">
          Built with
          <span className="inline-flex h-3.5 w-3.5 items-center justify-center text-rose-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
              <path d="M12 21s-7-4.35-9.5-9.5C.5 7 4 3 7.5 3c2 0 3.5 1.2 4.5 2.5C13 4.2 14.5 3 16.5 3 20 3 23.5 7 21.5 11.5 19 16.65 12 21 12 21z" />
            </svg>
          </span>
          & lots of
          <span className="inline-flex h-3.5 items-center text-amber-400">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
              <path d="M12 2 8 8H2l5 4-2 8 7-5 7 5-2-8 5-4h-6z" />
            </svg>
          </span>
        </span>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="footer-up flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
