'use client';

import Image from 'next/image';
import Link from 'next/link';

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10 12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5a6 6 0 0 0 12 0v-5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}

function PaperPlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22l-4-9-9-4 20-7z" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Column */}
        <div className="flex-1 relative flex justify-center items-center">
          <div className="relative w-[250px] h-[250px]">
            {/* Border Circle */}
            <div className="absolute inset-0 rounded-full border-4 glow-cyan" style={{ borderColor: '#67e8f9' }}></div>
            {/* Image */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="/images/aditya.jpg"
                alt="Aditya Dwi Hardiansyah - Web Developer"
                width={250}
                height={250}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Decorative orbits */}
            <div className="absolute inset-0">
              <div className="absolute top-[10%] right-[-5%] w-6 h-6 z-10">
                <div
                  className="w-6 h-6 rounded-full animate-orbit-right"
                  style={{
                    backgroundColor: '#14f195',
                    boxShadow: '0 0 20px rgba(20, 241, 149, 0.6)',
                  }}
                />
              </div>
              <div className="absolute bottom-[20%] left-[-8%] w-4 h-4 z-10">
                <div
                  className="w-4 h-4 bg-purple-500 rounded-full animate-orbit-left"
                  style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.6)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex-[1.5]">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-3">About Me</h2>
          <h3 className="text-base md:text-lg font-semibold mb-4 about-subtitle">
            I&apos;m <span className="gradient-text">Aditya Dwi Hardiansyah</span>, a Web Developer
          </h3>

          <p className="text-sm leading-relaxed mb-3 about-text font-medium">
            I specialize in building exceptional digital experiences that live on the internet. With a focus on creating elegant, efficient, and user-friendly applications, I bring ideas to life with code.
          </p>

          <p className="text-sm leading-relaxed mb-5 about-text font-medium">
            As a recent graduate in web development, I&apos;ve worked on various projects during my studies and through freelance work—ranging from simple websites to applications with complex features. I enjoy combining technical skills with creative problem-solving to deliver effective and engaging solutions.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 my-5">
            <div className="info-card-blue border rounded-lg p-2.5 flex items-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all" style={{ borderColor: '#334155' }}>
              <MapPinIcon />
              <span className="text-xs">Jember, Indonesia</span>
            </div>

            <div className="info-card-green border rounded-lg p-2.5 flex items-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all" style={{ borderColor: '#334155' }}>
              <EnvelopeIcon />
              <span className="text-xs">adityahardiansyah5@gmail.com</span>
            </div>

            <div className="info-card-purple border rounded-lg p-2.5 flex items-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all" style={{ borderColor: '#334155' }}>
              <PhoneIcon />
              <span className="text-xs">+62 857 0877 9638</span>
            </div>

            <div className="info-card-brown border rounded-lg p-2.5 flex items-center gap-3 hover:-translate-y-1 hover:shadow-lg transition-all" style={{ borderColor: '#334155' }}>
              <GraduationCapIcon />
              <span className="text-xs">Information Technology, Universitas Brawijaya</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <Link
              href="/cv/cv-aditya-dwi-hardiansyah.pdf"
              download="CV Aditya Dwi Hardiansyah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary px-5 py-2.5 text-sm rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold hover:-translate-y-1 hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <DownloadIcon />
              Download CV
            </Link>
            <Link
              href="#contact"
              className="button-secondary px-5 py-2.5 text-sm rounded-full border-2 font-semibold hover:-translate-y-1 hover:shadow-lg transition-all flex items-center justify-center gap-2 about-button-secondary"
            >
              <PaperPlaneIcon />
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
