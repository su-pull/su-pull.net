import '@/styles/globals.scss';
import '@/styles/mobile.scss';
import App from '@/components/AppProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Playfair_Display } from 'next/font/google';
import { ServerCSS } from '@plumeria/next';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400', variable: '--source' });

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export default function RootLayout({ children }: RootLayoutProps) {
  const font = playfair.className + ' ' + playfair.variable;
  const url = process.env.PROJECTS_URL || '';
  return (
    <html lang="en">
      <head>
        <link rel="prefetch" href={url} />
        <link rel="prefetch" href="/feed.xml" />
        <ServerCSS />
      </head>
      <body className={font}>
        <App>{children}</App>
      </body>
    </html>
  );
}
