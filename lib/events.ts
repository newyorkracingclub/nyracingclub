export interface CalendarEvent {
  id?: string;
  summary: string;
  month: string;
  day: string;
  date: string;
  link: string;
}

export interface GoogleCalendarEvent {
  id?: string;
  summary: string;
  start: {
    date: string;
  };
  location: string;
}

export async function fetchEvents() {
  const res = await fetch(`${process.env.BASE_URL}/api/calendar`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  const events = await res.json();
  return events as CalendarEvent[];
}

export const splitEvents = (events: CalendarEvent[]) => {
  const currentDate = new Date();
  const upcomingEvents: CalendarEvent[] = [];
  const previousEvents: CalendarEvent[] = [];

  events.forEach((event) => {
    const eventDate = new Date(event.date);
    if (eventDate >= currentDate) {
      upcomingEvents.push(event);
    } else {
      previousEvents.push(event);
    }
  });

  previousEvents.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return { upcomingEvents, previousEvents };
};
