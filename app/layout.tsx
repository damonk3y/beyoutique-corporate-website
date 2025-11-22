import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BEYOUTIQUE – A tua definição de moda',
  description:
    'A BEYOUTIQUE é a sua loja online de moda, beleza, autocuidado e autoestima. Descubra produtos selecionados especialmente para você, com uma experiência personalizada e suporte online agora.',
  applicationName: 'BEYOUTIQUE',
  keywords: [
    'moda',
    'beleza',
    'autocuidado',
    'autoestima',
    'loja online',
    'atendimento online',
    'multimarcas',
    'tendências',
    'produtos de beleza',
    'roupas femininas',
  ],
  authors: [{ name: 'BEYOUTIQUE' }],
  generator: 'Next.js',
  openGraph: {
    title: 'BEYOUTIQUE – Loja de moda, beleza e autoestima online',
    description:
      'Descubra produtos de moda, beleza e autocuidado e converse conosco para uma experiência de compra personalizada.',
    url: 'https://www.beyoutique.com',
    siteName: 'BEYOUTIQUE',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BEYOUTIQUE – Moda e Beleza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BEYOUTIQUE – Loja de moda, beleza e autoestima online',
    description: 'A melhor experiência online em moda, beleza e autoestima.',
    images: ['/og-image.png'],
    site: '@beyoutique',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
