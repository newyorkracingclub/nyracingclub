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
        <title>New York Racing Club - Competitive Races in NYC</title>
        <meta
          name="description"
          content="Join the New York Racing Club for monthly races in NYC. Participate in running, cycling, skating, and swimming events for all skill levels."
        />
        <meta
          property="og:title"
          content="New York Racing Club - Competitive Races in NYC"
        />
        <meta property="og:site_name" content="New York Racing Club" />
        <meta
          property="og:description"
          content="Join the New York Racing Club for exciting monthly races in NYC. Participate in running, cycling, skating, and swimming events for all skill levels."
        />
        <meta
          property="og:image"
          content="/images/logos/carousel/landingpage.webp"
        />
        <meta property="og:url" content="https://www.nyracing.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="New York Racing Club - Competitive Races in NYC"
        />
        <meta
          name="twitter:description"
          content="Join the New York Racing Club for exciting monthly races in NYC. Participate in running, cycling, skating, and swimming events for all skill levels."
        />
        <meta
          name="twitter:image"
          content="/images/logos/carousel/landingpage.webp"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.nyracing.org" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QX2WGNWT0P"
        ></Script>
        <Script id="gtag">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QX2WGNWT0P');`}
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
