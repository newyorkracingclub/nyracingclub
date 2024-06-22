import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),
  title: 'New York Racing Club',
  description: 'Come experience exciting running, cycling, skating, and swimming events. Embrace competition and community across New York!',
  openGraph: {
    title: 'Join New York Racing Club',
    description: 'Come experience exciting running, cycling, skating, and swimming events. Embrace competition and community across New York!',
    url: `${process.env.BASE_URL}`,
    siteName: 'New York Racing Club',
    images: [
      {
        url: `${process.env.BASE_URL}/landingpage.webp`,
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QX2WGNWT0P"
        ></Script>
        <Script id="gtag">
          {`window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
           
             gtag('config', 'G-QX2WGNWT0P');
             `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
