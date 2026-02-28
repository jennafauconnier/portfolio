import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio personnel créé avec Next.js et Material UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <ThemeRegistry>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}