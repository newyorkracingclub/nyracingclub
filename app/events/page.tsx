import Head from 'next/head';
import AllEvents from '@/components/AllEvents';

export default function AllEventsPage() {
  return (
    <>
      <Head>
        <title>Events - New York Racing Club</title>
        <meta
          name="description"
          content="Explore past events organized by the New York Racing Club. View event details from previous years and stay updated on our activities."
        />
        <meta
          property="og:title"
          content="Past Events - New York Racing Club"
        />
        <meta
          property="og:description"
          content="Explore past events organized by the New York Racing Club. View event details from previous years and stay updated on our activities."
        />
        <meta property="og:image" content="/logos/landingpage.webp" />
      </Head>
      <div className="px-6 py-4 md:p-10">
        <AllEvents />
      </div>
    </>
  );
}
