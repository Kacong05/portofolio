'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

interface Project {
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

const projects: Project[] = [
  {
    title: 'LifeHub - Food Tracker',
    description:
      'Aplikasi web pencatat asupan makanan harian dengan laporan kalori mingguan dan dashboard admin.',
    longDescription:
      'LifeHub adalah aplikasi web untuk mencatat asupan makanan harian dan memantau pola gaya hidup sehat. Pengguna bisa mencatat sarapan, makan siang, makan malam, dan camilan, lalu melihat total kalori, nutrisi, dan progres mingguan terhadap target kalori pribadi. Dilengkapi dashboard admin untuk manajemen user, monitoring aktivitas, pengelolaan rekomendasi makanan, dan kritik & saran.',
    features: [
      'Autentikasi: sign up, login, ganti password',
      'Profil pengguna: berat badan, tinggi badan, target kalori',
      'Catatan harian: sarapan, makan siang, malam, camilan',
      'Laporan mingguan: total kalori, rata-rata, hari tercapai',
      'Form kritik & saran dari user',
      'Admin: manajemen user dengan search & pagination',
      'Admin: monitoring aktivitas user harian',
      'Admin: pengelolaan rekomendasi makanan + upload gambar',
      'Admin: export data user dan rekomendasi',
    ],
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Kacong05',
    cover: '/images/project/lifehub/awal.png',
    gallery: [
      { src: '/images/project/lifehub/awal.png', alt: 'Landing page LifeHub' },
      { src: '/images/project/lifehub/login.png', alt: 'Halaman login' },
      { src: '/images/project/lifehub/buat-akun.png', alt: 'Halaman registrasi' },
      { src: '/images/project/lifehub/catatan.png', alt: 'Catatan makanan harian' },
      { src: '/images/project/lifehub/laporan.png', alt: 'Laporan kalori mingguan' },
      { src: '/images/project/lifehub/profile.png', alt: 'Profil pengguna' },
      { src: '/images/project/lifehub/kritik-user.png', alt: 'Form kritik & saran' },
      { src: '/images/project/lifehub/admin/manajemen-user.png', alt: 'Admin - Manajemen User' },
      { src: '/images/project/lifehub/admin/rekomendasi.png', alt: 'Admin - Pengelolaan Rekomendasi' },
      { src: '/images/project/lifehub/admin/kritik-saran.png', alt: 'Admin - Kritik & Saran' },
    ],
    imageAlt: 'LifeHub food tracker web app',
  },
  {
    title: 'Toko Kunci - Sistem Manajemen',
    description:
      'Aplikasi web manajemen toko kunci dengan fitur transaksi penjualan, pengelolaan stok produk, dan laporan penjualan.',
    longDescription:
      'Aplikasi web manajemen toko kunci yang dibangun untuk memenuhi kebutuhan operasional toko sehari-hari. Sistem ini menyediakan dashboard admin yang efisien untuk mengelola transaksi penjualan, stok produk, dan menghasilkan laporan penjualan secara otomatis. Dibangun dengan Laravel sebagai backend dan MySQL sebagai database, aplikasi ini mempermudah pemilik toko dalam memantau performa bisnis.',
    features: [
      'Manajemen Pengguna (Admin & User)',
      'Pemesanan Kunci',
      'Rating & Review',
      'Kontak & Pesan',
      'Notifikasi Real-time',
      'Dashboard Admin',
      'Peta Lokasi Toko',
    ],
    tags: ['Laravel', 'PHP', 'MySQL'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Kacong05',
    cover: '/images/project/toko-kunci-barokah/cover.png',
    gallery: [
      { src: '/images/project/toko-kunci-barokah/cover.png', alt: 'Tampilan utama' },
      { src: '/images/project/toko-kunci-barokah/register.png', alt: 'Halaman register pengguna' },
      { src: '/images/project/toko-kunci-barokah/dashboard-user.png', alt: 'Dashboard user' },
      { src: '/images/project/toko-kunci-barokah/pemesanan.png', alt: 'Halaman pemesanan' },
      { src: '/images/project/toko-kunci-barokah/rating.png', alt: 'Halaman rating user' },
      { src: '/images/project/toko-kunci-barokah/admin/dashboard.png', alt: 'Admin - Dashboard' },
      { src: '/images/project/toko-kunci-barokah/admin/user.png', alt: 'Admin - Manajemen User' },
      { src: '/images/project/toko-kunci-barokah/admin/pesanan.png', alt: 'Admin - Daftar Pesanan' },
      { src: '/images/project/toko-kunci-barokah/admin/pesan.png', alt: 'Admin - Pesan Masuk' },
      { src: '/images/project/toko-kunci-barokah/admin/rating.png', alt: 'Admin - Rating Produk' },
    ],
    imageAlt: 'Toko Kunci dashboard built with Laravel',
  },
  {
    title: 'Web Pemesanan Online',
    description:
      'Platform pemesanan online untuk layanan pembuatan website dengan antarmuka modern.',
    longDescription:
      'Platform pemesanan online yang memungkinkan pelanggan memesan layanan pembuatan website secara langsung. Dilengkapi dengan katalog paket, sistem booking, dan dashboard untuk tracking progress proyek. Antarmuka modern dan responsif memberikan pengalaman pengguna yang nyaman di semua perangkat.',
    features: [
      'UI/UX Design Services: Layanan desain antarmuka profesional',
      'Web Development Services: Pengembangan website modern dan SEO-friendly',
      'Form Pemesanan: Form untuk mengajukan pesanan layanan',
      'Kontak Integrasi: Integrasi WhatsApp untuk komunikasi langsung',
    ],
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Kacong05',
    cover: '/images/project/project-web-pemesanan/cover.png',
    imageAlt: 'Web Pemesanan online ordering platform',
  },
  {
    title: 'Remind Me - Reminder App',
    description:
      'Aplikasi mobile pengingat jadwal dan tugas dengan antarmuka yang clean dan intuitif.',
    longDescription:
      'Aplikasi mobile pengingat jadwal dan tugas dengan antarmuka yang clean dan intuitif. Mendukung notifikasi terjadwal, kategori reminder, dan tampilan kalender yang membantu pengguna tetap produktif sepanjang hari. Aplikasi ini dirancang untuk membantu pengguna mengelola tugas-tugas harian dengan mudah dan efisien.',
    features: [
      'Notifikasi terjadwal yang akurat',
      'Kategori reminder berdasarkan prioritas',
      'Tampilan kalender harian dan mingguan',
      'Edit dan hapus task dengan mudah',
      'Profil pengguna dengan kustomisasi',
    ],
    tags: ['Flutter', 'Dart', 'SQLite', 'Local Notification'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Kacong05',
    cover: '/images/project/remind-me/tampilan-awal.jpeg',
    gallery: [
      { src: '/images/project/remind-me/tampilan-awal.jpeg', alt: 'Tampilan awal aplikasi' },
      { src: '/images/project/remind-me/overview.jpeg', alt: 'Overview dashboard' },
      { src: '/images/project/remind-me/task.jpeg', alt: 'Halaman task' },
      { src: '/images/project/remind-me/edit-task.jpeg', alt: 'Edit task' },
      { src: '/images/project/remind-me/profile.jpeg', alt: 'Profile pengguna' },
    ],
    imageAlt: 'Remind Me reminder app built with Flutter',
  },
  {
    title: 'Smart Posture Dashboard',
    description:
      'Dashboard IoT untuk monitoring postur tubuh real-time menggunakan ESP32 dan sensor MPU6050.',
    longDescription:
      'Aplikasi web backend sekaligus dashboard untuk sistem monitoring postur tubuh berbasis IoT. Project ini dibuat untuk memenuhi tugas mata kuliah Internet of Things (IoT). Pada sisi hardware menggunakan mikrokontroler ESP32 yang terhubung ke 2 buah sensor kemiringan (MPU6050) yang ditempelkan pada punggung atas dan punggung bawah pengguna. Alat tersebut membaca sudut kemiringan punggung setiap saat dan mengirimkan datanya ke server melalui protokol MQTT.',
    features: [
      'Monitoring real-time grafik sudut pitch, roll, yaw',
      'Visualisasi 3D kerangka manusia (Three.js)',
      'Status postur otomatis (Baik / Kurang Baik / Buruk)',
      'Notifikasi & riwayat sesi monitoring',
      'Pengaturan threshold sudut kemiringan',
      'Komunikasi MQTT & HTTP REST API',
    ],
    tags: ['Laravel 12', 'React', 'Three.js', 'MQTT', 'Recharts'],
    liveUrl: '#',
    repoUrl: 'https://github.com/Kacong05',
    cover: '/images/project/project-web-smart-posture-iot/cover.png',
    gallery: [
      { src: '/images/project/project-web-smart-posture-iot/cover.png', alt: 'Dashboard Smart Posture' },
      { src: '/images/project/project-web-smart-posture-iot/status-perangkat.png', alt: 'Status perangkat IoT' },
      { src: '/images/project/project-web-smart-posture-iot/riwayat.png', alt: 'Riwayat sesi monitoring' },
    ],
    imageAlt: 'Smart Posture IoT Dashboard with 3D visualization',
  },
];

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

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const gallery = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ src: project.cover, alt: project.imageAlt }];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % gallery.length);
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [gallery.length, onClose]);

  const next = () => setActiveIndex((i) => (i + 1) % gallery.length);
  const prev = () => setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);

  const isPortrait = (project.gallery?.[0]?.src || project.cover).match(/\.(jpe?g)$/i)
    && project.gallery && project.gallery.length > 0;

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

        {/* Image gallery */}
        <div className={`relative w-full overflow-hidden bg-zinc-950 ${isPortrait ? 'h-[55vh] sm:h-[60vh]' : 'aspect-[16/10]'}`}>
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

              {/* Counter */}
              <span className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/15 bg-black/70 px-3 py-1 text-[10px] font-semibold tracking-wider text-slate-200 backdrop-blur-xl">
                {activeIndex + 1} / {gallery.length}
              </span>
            </>
          )}
        </div>

        {/* Thumbnails */}
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

        {/* Body */}
        <div className="px-4 py-5 sm:px-7 sm:py-7">
          <h3 className="project-title text-lg font-bold text-slate-100 sm:text-xl">
            {project.title}
          </h3>

          {/* Tags */}
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

          {/* Features */}
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

          {/* Actions */}
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

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="projects-section relative overflow-hidden px-6 py-16"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="gradient-text text-2xl font-bold md:text-4xl">
            Featured Projects
          </h2>
          <p className="projects-subtitle mx-auto mt-3 max-w-xl text-sm text-slate-400 md:text-base">
            Beberapa project yang sudah saya kerjakan, dari aplikasi web hingga mobile.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <ScrollReveal
              key={p.title}
              delay={(idx % 3) * 120}
              className="h-full"
            >
              <article
                onClick={() => setActiveProject(p)}
                className="project-card group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-slate-900/60 ring-1 ring-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:ring-white/30"
              >
              {/* Cover */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={p.cover}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                {/* Top shine */}
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* View detail badge (appears on hover) */}
                <div className="absolute right-3 top-3 translate-y-1 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-100 opacity-0 backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Details
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="project-title text-sm font-semibold text-slate-100 md:text-base">
                  {p.title}
                </h3>
                <p className="project-desc mt-1.5 text-xs leading-relaxed text-slate-400 line-clamp-3">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-3">
                  <span className="text-[10px] font-medium text-slate-400">
                    Click to see more
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
