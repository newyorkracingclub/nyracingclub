import Event from './Event';
import { CalendarEvent, fetchEvents, splitEvents } from '@/lib/events';
import Image from 'next/image';
import Athletes from '@logos/athletes.png';
import Link from 'next/link';
import Head from 'next/head';

async function Events() {
  const { upcomingEvents, previousEvents } = splitEvents(await fetchEvents());
  const lastFivePreviousEvents = previousEvents.slice(0, 5);

  const renderEventsSection = (
    title: string,
    events: CalendarEvent[],
    isPrevious: boolean,
    className: string
  ) => (
    <div className="md:w-[75vw] xl:w-[65vw]">
      {(!isPrevious || events.length !== 0) && (
        <h2 className="text-3xl md:text-6xl font-semibold py-8 lg:py-10 text-white text-center tracking-tighter">
          {title} <span className="font-light">EVENTS</span>
        </h2>
      )}
      {events.length === 0 && !isPrevious ? (
        <div className="flex flex-col justify-between items-center p-8">
          <div className="flex grow items-center justify-center">
            <div className="text-sm md:text-lg lg:text-2xl text-white font-light">
              No upcoming events! Stay tuned for updates.
            </div>
          </div>
          <div className="pt-8 lg:pt-16">
            <Image
              src={Athletes}
              alt="Icons of athletes representing various sports"
              width={200}
              height={200}
            />
          </div>
        </div>
      ) : (
        <div className={`grid grid-cols-1 ${className}`}>
          {events.map((event) => (
            <Event key={event.id} event={event} isPrevious={isPrevious} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <Head>
        <title>Upcoming and Previous Events - New York Racing Club</title>
        <meta
          name="description"
          content="Explore upcoming and previous events organized by the New York Racing Club. Find details on our fixed gear crits, cycling races, running events, and more."
        />
        <meta
          property="og:title"
          content="Upcoming and Previous Events - New York Racing Club"
        />
        <meta
          property="og:description"
          content="Discover upcoming and past events hosted by the New York Racing Club. Get information on various racing events and stay informed about our activities."
        />
        <meta property="og:image" content="/logos/landingpage.webp" />
        <meta property="og:url" content="https://www.nyracing.org" />
      </Head>
      <div className="flex flex-col justify-content items-center">
        {renderEventsSection('UPCOMING', upcomingEvents, false, 'gap-4')}
        <div className="relative">
          {renderEventsSection(
            'PREVIOUS',
            lastFivePreviousEvents,
            true,
            'gap-0'
          )}
          <div className="flex justify-center py-10">
            <Link href="/events" passHref>
              <button className="text-xs md:text-base lg:text-base font-bold bg-red-700 text-white px-6 py-2 md:px-10 rounded-lg shadow-md hover:bg-gray-700 focus:bg-red-700">
                VIEW ALL EVENTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
