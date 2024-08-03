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
        <title>
          New York Racing Club - Cycling, Running, Speed Skating & Swimming
        </title>
        <meta
          name="description"
          content="Join the New York Racing Club for exciting events in NYC. Participate in fixed gear crits, road races, running competitions, swimming events, and speed skating. Perfect for all skill levels."
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta
          property="og:title"
          content="New York Racing Club - Cycling, Running, Speed Skating & Swimming"
        />
        <meta
          property="og:description"
          content="Join the New York Racing Club for exciting events in NYC, including fixed gear crits, road races, running, swimming, and speed skating competitions."
        />
        <meta property="og:image" content="/logos/landingpage.webp" />
        <meta property="og:url" content="https://www.nyracing.org" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'New York Racing Club',
              url: 'https://www.nyracing.org',
              logo: '/logos/landingpage.webp',
            }),
          }}
        ></script>

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
