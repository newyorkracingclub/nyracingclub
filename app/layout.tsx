import './globals.css';
import Header from '../components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import Script from 'next/script';
require('dotenv').config({ path: '.envrc' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>New York Racing Club</title>
        <meta property="og:title" content="New York Racing Club" />
        <meta property="og:site_name" content="New York Racing Club" />
        <meta
          property="og:image"
          content="/images/logos/carousel/landingpage.webp"
        />
        <meta
          property="og:description"
          content="New York Racing Club hosts monthly races in New York City, inviting competitive sports enthusiasts to participate in running, cycling, skating, and swimming events across all skill levels."
        />
        <meta
          name="description"
          content="New York Racing Club hosts monthly races in New York City, inviting competitive sports enthusiasts to participate in running, cycling, skating, and swimming events across all skill levels."
        />
        <link rel="icon" href="/favicon.ico" />
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
          <div className="flex-grow">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
