import { Metadata } from 'next';
import AllEvents from '@/components/AllEventsClient';
import { fetchEvents } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Events - New York Racing Club | Past & Upcoming Races',
  description:
    'Explore both past and upcoming events organized by the New York Racing Club. Find details on fixed gear crits, cycling races, running events, and more. Stay updated with our latest activities and past highlights.',
  robots: 'index, follow',
  openGraph: {
    title: 'Events - New York Racing Club | Past & Upcoming Races',
    description:
      'Discover past and upcoming events by the New York Racing Club. From fixed gear crits and cycling races to running and swimming competitions, explore all the details and stay informed about our activities.',
    images: ['/logos/landingpage.webp'],
    url: 'https://www.nyracing.org/events',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events - New York Racing Club | Past & Upcoming Races',
    description:
      'Find out about past and upcoming events organized by the New York Racing Club. View details on various races and competitions, including fixed gear crits and more.',
    images: ['/logos/landingpage.webp'],
  },
};

export default async function AllEventsPage() {
  const allEvents = await fetchEvents();

  return (
    <div className="px-6 py-4 md:p-10">
      <AllEvents events={allEvents} />
    </div>
  );
}
