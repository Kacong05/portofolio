# Portfolio — Aditya Dwi Hardiansyah

Halo, saya **Aditya Dwi Hardiansyah** — Web Developer dari Jember, Indonesia.
Repo ini berisi source code website portofolio pribadi saya yang dibangun
dengan Next.js dan tema **chrome-silver on black**.

Live: _coming soon_

## Tentang saya

Saya seorang fresh graduate yang fokus di pengembangan web. Selama kuliah
dan beberapa proyek freelance, saya banyak bermain dengan **Laravel** dan
**React**, mulai dari sistem manajemen toko, platform pemesanan online,
sampai dashboard IoT untuk monitoring postur tubuh.

Saya suka detail visual, animasi yang halus, dan kode yang rapi—tapi yang
paling saya kejar adalah membuat sesuatu yang benar-benar dipakai dan
membantu orang.

- 📍 Jember, Indonesia
- 🎓 Information Technology
- 📧 adityahardiansyah5@gmail.com
- 🐙 [github.com/Kacong05](https://github.com/Kacong05)

## Tentang website ini

Web ini adalah ruang saya untuk:

- Memperkenalkan diri lewat section **About**, **Skills**, dan stats GitHub
- Memamerkan beberapa **project** yang sudah saya kerjakan, lengkap dengan
  galeri foto + detail fitur
- Menampilkan **sertifikat** yang saya kumpulkan
- Menyediakan jalan paling cepat buat orang yang mau ngajak ngobrol
  (WhatsApp, email, sosial media)

Beberapa hal yang saya cari saat membangunnya:

- **Monochrome** — semua section pakai palet hitam + chrome silver, tanpa
  warna aksen yang mencolok. Lebih kalem, lebih konsisten.
- **Cepat** — gambar dikompres pakai `sharp`, di-serve dalam format
  AVIF/WebP otomatis lewat `next/image`.
- **Tanpa drama** — hero langsung tampil tanpa typewriter yang bisa gagal,
  GitHub stats punya fallback kalau API rate-limit, semua interaksi tetap
  bisa diklik di HP maupun laptop.

## Tech stack

| Bagian | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router) + React 19 |
| Styling | Tailwind CSS v4 + custom CSS |
| Bahasa | TypeScript |
| Image optim. | `next/image` + `sharp` |
| Hosting | Vercel (rencana) |

Semua icon ditulis tangan sebagai inline SVG, tidak pakai icon library, jadi
ukurannya tetap kecil.

## Menjalankan secara lokal

```bash
# 1. install dependency
npm install

# 2. jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Script lain

```bash
npm run build              # build untuk produksi
npm run start              # jalankan hasil build
npm run lint               # cek lint
npm run compress:images    # kompres semua foto di public/images/
npm run originals:move     # pindahkan backup hasil kompresi keluar dari public/
```

## Struktur folder

```
.
├─ app/                  # routing & layout (App Router)
├─ components/           # semua section + Header/Footer
├─ public/
│  ├─ cv/                # CV PDF
│  └─ images/            # foto profil, project, sertifikat
├─ scripts/              # utility (kompres foto, dsb)
└─ next.config.ts
```

## Catatan

Konten website (project, sertifikat, foto) merupakan milik saya pribadi.
Source code-nya boleh dijadikan referensi, tapi tolong **jangan deploy
ulang sebagai portofolio kamu sendiri**.

Kalau mau ngobrol soal kerjaan, kolaborasi, atau cuma sekadar tanya
gimana cara bikin section-nya, japri saya lewat
[WhatsApp](https://wa.me/6285708779638) atau email di atas.

— **Adit**
