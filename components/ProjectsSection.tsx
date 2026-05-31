'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import type { Project } from './ProjectModal';

// Modal is heavy (gallery, keyboard handlers, etc.) but only needed when the
// user actually clicks a card. Defer loading it until then.
const ProjectModal = dynamic(() => import('./ProjectModal'), {
  ssr: false,
});

const projects: Project[] = [
  {
    title: 'LifeHub - Food Tracker',
    description:
      'Aplikasi web pencatat asupan makanan harian dengan laporan kalori mingguan dan dashboard admin.',
    longDescription:
      'LifeHub adalah aplikasi web untuk mencatat asupan makanan harian dan memantau pola gaya hidup sehat. Pengguna bisa mencatat sarapan, makan siang, makan malam, dan camilan, lalu melihat total kalori, nutrisi, dan progres mingguan terhadap target kalori pribadi. Dilengkapi dashboard admin untuk manajemen user, monitoring aktivitas, pengelolaan rekomendasi makanan, dan kritik & saran.',
    features: [
      '🔐 Autentikasi: sign up, login, ganti password',
      '👤 Profil pengguna: berat badan, tinggi badan, target kalori',
      '🍱 Catatan harian: sarapan, makan siang, malam, camilan',
      '📊 Laporan mingguan: total kalori, rata-rata, hari tercapai',
      '💬 Form kritik & saran dari user',
      '👥 Admin: manajemen user dengan search & pagination',
      '📈 Admin: monitoring aktivitas user harian',
      '💡 Admin: pengelolaan rekomendasi makanan + upload gambar',
      '📤 Admin: export data user dan rekomendasi',
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
      '✨ Desain Modern: Antarmuka menarik dan responsif menggunakan Framer Motion',
      '📱 Responsive Design: Optimal di desktop, tablet, dan mobile',
      '🎨 UI/UX Design Services: Layanan desain antarmuka profesional',
      '💻 Web Development Services: Pengembangan website modern dan SEO-friendly',
      '📝 Form Pemesanan: Form untuk mengajukan pesanan layanan',
      '📞 Kontak Integrasi: Integrasi WhatsApp untuk komunikasi langsung',
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
          {projects.map((p) => (
            <article
              key={p.title}
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

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
          ))}
        </div>
      </div>

      {/* Detail Modal — only loaded when needed */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
