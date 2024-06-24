import Event from './Event';
import { CalendarEvent, splitEvents } from '@/lib/events';
import Image from 'next/image';
import Athletes from '@logos/athletes.png';

async function fetchEvents() {
  const res = await fetch(`${process.env.BASE_URL}/api/calendar`, {
    next: { revalidate: 86400 }, // Revalidate every 24 hours
  });

  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  const events = await res.json();
  return splitEvents(events);
}

async function Events() {
  // const { upcomingEvents, previousEvents } = await fetchEvents();

  const renderEventsSection = (
    title: string,
    events: CalendarEvent[],
    isPrevious: boolean,
    className: string
  ) => (
    <div className="w-[85vw] md:w-[80vw] lg:w-[75vw]">
      {(!isPrevious || events.length !== 0) && (
        <h2 className="text-3xl md:text-6xl font-semibold p-8 text-white text-center tracking-tighter">
          {title} <span className="font-light">EVENTS</span>
        </h2>
      )}
      {events.length === 0 && !isPrevious ? (
        <div className="flex flex-col justify-between items-center">
          <div className="flex-grow flex items-center justify-center">
            <div className="text-sm md:text-lg lg:text-2xl text-white font-light">
              No upcoming events! Stay tuned for updates.
            </div>
          </div>
          <div className="pt-8 lg:pt-16">
            <Image
              src={Athletes}
              alt="Athlete Icons"
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
    <div className="flex flex-col justify-content items-center space-y-4">
      {renderEventsSection('UPCOMING', [], false, 'gap-4')}
      {renderEventsSection('PREVIOUS', [], true, 'gap-0')}
    </div>
  );
}

export default Events;
