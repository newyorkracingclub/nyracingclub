import { NextResponse } from 'next/server';
import axios from 'axios';
import { CalendarEvent, GoogleCalendarEvent } from '@/lib/events';
require('dotenv').config({ path: '.envrc' });

function transformEvent(event: GoogleCalendarEvent): CalendarEvent {
  const [year, month, day] = event.start.date.split('-').map(Number);

  const date = new Date(year, month - 1, day);

  const monthStr = date
    .toLocaleString('default', { month: 'short' })
    .toUpperCase();

  return {
    id: event.id,
    summary: event.summary,
    month: monthStr,
    day: day.toString(),
    date: event.start.date,
    link: event.location,
  };
}

function getStartOf2018(): string {
  const date = new Date('2018-01-01T00:00:00.000Z');
  return date.toISOString();
}

export async function GET() {
  const calendarId = process.env.NYRC_CALENDAR_KEY;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!calendarId || !apiKey) {
    throw new Error('API key or calendar ID is not set');
  }

  const timeMin = getStartOf2018();

  const params = new URLSearchParams({
    key: apiKey,
    orderBy: 'startTime',
    singleEvents: 'true',
    timeMin: timeMin,
    maxResults: '2500', // Add this to get more results
  });

  const results = await axios
    .get<{ items: GoogleCalendarEvent[] }>(
      `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params.toString()}`
    )
    .then((response) => response.data.items.map(transformEvent))
    .catch((error) => {
      const status = error.response?.status || 500;
      const message =
        error.response?.data?.error?.message || 'Failed to fetch events';
      throw { status, message };
    });

  return NextResponse.json(results);
}
