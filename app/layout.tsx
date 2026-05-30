import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const SITE_URL = 'https://www.adityadh.my.id';
const DESCRIPTION =
  'Portofolio Aditya Dwi Hardiansyah, Web Developer dari Jember Indonesia. Dibangun dengan Next.js, Laravel, dan React. Lihat project, sertifikat, dan cara menghubungi.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aditya Dwi Hardiansyah · Web Developer',
    template: '%s · Aditya Dwi Hardiansyah',
  },
  description: DESCRIPTION,
  applicationName: 'Aditya Portfolio',
  authors: [{ name: 'Aditya Dwi Hardiansyah', url: 'https://github.com/Kacong05' }],
  creator: 'Aditya Dwi Hardiansyah',
  publisher: 'Aditya Dwi Hardiansyah',
  keywords: [
    'Aditya Dwi Hardiansyah',
    'Web Developer Jember',
    'Web Developer Indonesia',
    'Laravel Developer',
    'React Developer',
    'Next.js Developer',
    'Frontend Developer',
    'Portfolio',
    'Kacong05',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    title: 'Aditya Dwi Hardiansyah · Web Developer',
    description: DESCRIPTION,
    siteName: 'Aditya Dwi Hardiansyah Portfolio',
    images: [
      {
        url: '/images/aditya.jpg',
        width: 800,
        height: 800,
        alt: 'Aditya Dwi Hardiansyah',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Dwi Hardiansyah · Web Developer',
    description: DESCRIPTION,
    images: ['/images/aditya.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Rt3cFqaepu3Z_vA2iC82MqrDKjrYFaiKIumB5cqyk88',
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aditya Dwi Hardiansyah',
  alternateName: 'Adit',
  url: SITE_URL,
  image: `${SITE_URL}/images/aditya.jpg`,
  jobTitle: 'Web Developer',
  description: DESCRIPTION,
  email: 'mailto:adityahardiansyah5@gmail.com',
  telephone: '+62-857-0877-9638',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jember',
    addressRegion: 'East Java',
    addressCountry: 'ID',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universitas Brawijaya',
  },
  knowsAbout: [
    'Web Development',
    'Laravel',
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'MySQL',
  ],
  sameAs: [
    'https://github.com/Kacong05',
    'https://www.instagram.com/adtya_dhr',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <head>
        <meta
          name="google-site-verification"
          content="Rt3cFqaepu3Z_vA2iC82MqrDKjrYFaiKIumB5cqyk88"
        />
      </head>
      <body className="min-h-screen bg-black text-slate-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
