import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { CalendarEvent, GoogleCalendarEvent } from '@/lib/events';

const cache: { data?: CalendarEvent[]; timestamp?: number } = {};
const CACHE_DURATION = 1000 * 60 * 1000;

export async function GET(req: NextRequest) {
  const calendarId = process.env.NYRC_CALENDAR_KEY;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key is not set' }, { status: 500 });
  }

  if (
    cache.data &&
    cache.timestamp &&
    Date.now() - cache.timestamp < CACHE_DURATION
  ) {
    return NextResponse.json(cache.data);
  }

  try {
    const response = await axios.get<{ items: GoogleCalendarEvent[] }>(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true`
    );

    const transformedEvents: CalendarEvent[] = response.data.items.map(
      (event) => {
        const date = new Date(event.start.date);
        const month = date
          .toLocaleString('default', { month: 'short' })
          .toUpperCase();
        const day = date.getDate().toString();

        return {
          id: event.id,
          summary: event.summary,
          month,
          day,
          date: event.start.date,
          link: event.location,
        };
      }
    );
    cache.data = transformedEvents;
    cache.timestamp = Date.now();
    return NextResponse.json(transformedEvents);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}
