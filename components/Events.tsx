'use client';

import { useEffect, useState } from 'react';
import Event from './Event';
import LoadingSpinner from './LoadingSpinner';
import { CalendarEvent, splitEvents } from '@/lib/events';
import Image from 'next/image';
import Athletes from '@logos/athletes.png';

function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState<CalendarEvent[]>([]);
  const [previousEvents, setPreviousEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/calendar', {
          next: { revalidate: 86400 },
        });
        const events: CalendarEvent[] = await res.json();
        const { upcomingEvents, previousEvents } = splitEvents(events);
        setUpcomingEvents(upcomingEvents);
        setPreviousEvents(previousEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const renderEventsSection = (
    title: string,
    events: CalendarEvent[],
    isPrevious: boolean,
    className: string
  ) => (
    <div className="lg:w-[75vw]">
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
    <div>
      {loading ? (
        <div className="">
          <h2 className="text-2xl md:text-6xl font-semibold p-8 text-white text-center tracking-tighter">
            UPCOMING <span className="font-light">EVENTS</span>
          </h2>
          <div className="py-20">
            <LoadingSpinner />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-content items-center space-y-4">
          {renderEventsSection('UPCOMING', upcomingEvents, false, 'gap-4')}
          {renderEventsSection('PREVIOUS', previousEvents, true, 'gap-0')}
        </div>
      )}
    </div>
  );
}

export default Events;
