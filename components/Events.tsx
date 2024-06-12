'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Event from './Event';
import LoadingSpinner from './LoadingSpinner';
import { CalendarEvent, splitEvents } from '@/lib/events';

function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState<CalendarEvent[]>([]);
  const [previousEvents, setPreviousEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get<CalendarEvent[]>('/api/calendar');
        const { upcomingEvents, previousEvents } = splitEvents(res.data);
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
        <div className="flex flex-col justify-content items-center space-y-8">
          <div className="lg:w-[75vw]">
            <h2 className="text-2xl md:text-6xl font-semibold p-8 text-white text-center tracking-tighter">
              UPCOMING <span className="font-light">EVENTS</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {upcomingEvents.map((event) => (
                <Event key={event.id} event={event} isPrevious={false} />
              ))}
            </div>
          </div>
          <div className="lg:w-[75vw]">
            <h2 className="text-lg md:text-2xl font-semibold text-white p-4 tracking-tighter">
              PREVIOUS <span className="font-light">EVENTS</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {previousEvents.map((event) => (
                <Event key={event.id} event={event} isPrevious />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
