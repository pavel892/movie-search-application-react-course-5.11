import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MenuComponent from '@/components/Menu';
import OfflineBanner from '@/components/OfflineBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Movie Search Application',
  description: 'Movie Search Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <OfflineBanner MenuComponent={<MenuComponent />}>{children}</OfflineBanner>
      </body>
    </html>
  );
}
