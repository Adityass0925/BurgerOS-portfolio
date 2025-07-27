import React from 'react';
import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';

import './globals.css';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-silkscreen',
});

export const metadata: Metadata = {
  title: 'BurgerOS',
  description: `Hi 👋, we’re BurgerOS, a creative team passionate about building engaging and impactful digital experiences. We focus on designing and developing websites and platforms that are both delightful for users and efficient for businesses.`,
  creator: 'BurgerOS',
  applicationName: 'My website',
  keywords: [
    'BurgerOS',
    'Portfolio',
    'Next.js',
    'Software engineer',
  ],
  icons: {
    icon: './favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: 'https://www.scalonn.com',
    title: 'BurgerOS - Software Engineer',
    description: `Hi 👋, we’re BurgerOS, a creative team passionate about building engaging and impactful digital experiences. We focus on designing and developing websites and platforms that are both delightful for users and efficient for businesses.`,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 628,
        alt: 'BurgerOS',
      },
    ],
  },
  twitter: {
    title: 'BurgerOS - Software Engineer',
    description: `Hi 👋, we’re BurgerOS, a creative team passionate about building engaging and impactful digital experiences. We focus on designing and developing websites and platforms that are both delightful for users and efficient for businesses.`,
    card: 'summary_large_image',
    site: '@BurgerOS',
    images: '/opengraph-image.jpg',
  },
  verification: {
    google: 'k83JtkKiU8MvRqLS05NLwZPSOGLJXbZpzln4wdJ-iPI',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${silkscreen.variable} relative`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        <div className="main-mask pointer-events-none absolute inset-0 -z-50" />
      </body>
    </html>
  );
}
