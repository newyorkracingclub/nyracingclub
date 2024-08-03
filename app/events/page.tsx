import Head from 'next/head';
import AllEvents from '@/components/AllEvents';

export default function AllEventsPage() {
  return (
    <>
      <Head>
        <title>Events - New York Racing Club | Past & Upcoming Races</title>
        <meta
          name="description"
          content="Explore both past and upcoming events organized by the New York Racing Club. Find details on fixed gear crits, cycling races, running events, and more. Stay updated with our latest activities and past highlights."
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta
          property="og:title"
          content="Events - New York Racing Club | Past & Upcoming Races"
        />
        <meta
          property="og:description"
          content="Discover past and upcoming events by the New York Racing Club. From fixed gear crits and cycling races to running and swimming competitions, explore all the details and stay informed about our activities."
        />
        <meta property="og:image" content="/logos/landingpage.webp" />
        <meta property="og:url" content="https://www.nyracing.org/events" />

        <meta
          name="twitter:title"
          content="Events - New York Racing Club | Past & Upcoming Races"
        />
        <meta
          name="twitter:description"
          content="Find out about past and upcoming events organized by the New York Racing Club. View details on various races and competitions, including fixed gear crits and more."
        />
        <meta name="twitter:image" content="/logos/landingpage.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="px-6 py-4 md:p-10">
        <AllEvents />
      </div>
    </>
  );
}
