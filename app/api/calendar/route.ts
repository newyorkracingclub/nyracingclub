import { NextResponse } from 'next/server';
import axios from 'axios';
import { CalendarEvent, GoogleCalendarEvent } from '@/lib/events';
require('dotenv').config({ path: '.envrc' });

function transformEvent(event: GoogleCalendarEvent): CalendarEvent {
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

function getStartOfYearDate(): string {
  const date = new Date();
  date.setMonth(0);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date.toISOString();
}

export async function GET() {
  const calendarId = process.env.NYRC_CALENDAR_KEY;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!calendarId || !apiKey) {
    throw new Error('API key or calendar ID is not set');
  }

  const results = await axios
    .get<{ items: GoogleCalendarEvent[] }>(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${getStartOfYearDate()}`
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
