'use client';
import React, { useState } from 'react';
import Event from './Event';
import pastEvents from '@/lib/pastEvents';
import Link from 'next/link';

interface CalendarEvent {
  month: string;
  day: string;
  summary: string;
  link: string;
  date: string;
}

interface GroupedEvents {
  [year: string]: CalendarEvent[];
}

const AllEvents = () => {
  const groupedEvents: GroupedEvents = pastEvents.reduce(
    (acc: GroupedEvents, event: CalendarEvent) => {
      const year = new Date(event.date).getFullYear().toString();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(event);
      return acc;
    },
    {}
  );

  const sortedYears: string[] = Object.keys(groupedEvents).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  const [searchTerm, setSearchTerm] = useState('');

  const filterEvents = (year: string) =>
    groupedEvents[year].filter((event) =>
      event.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filteredYears = sortedYears.filter(
    (year) => filterEvents(year).length > 0
  );

  const renderYearsNav = () => (
    <nav>
      <ul className="flex flex-wrap justify-center md:space-x-6">
        {filteredYears.length > 0 ? (
          filteredYears.map((year) => (
            <div key={year} className="flex-shrink-0 mx-20 md:mx-0">
              <Link href={`#${year}`} className="text-blue-500 hover:underline">
                {year}
              </Link>
            </div>
          ))
        ) : (
          <li className="text-gray-500">No events found</li>
        )}
      </ul>
    </nav>
  );

  const renderEvents = () => (
    <div className="grid grid-cols-1 gap-4 md:w-[75vw] xl:w-[65vw]">
      {filteredYears.length > 0 ? (
        filteredYears.map((year) => (
          <div key={year} id={year}>
            <h3 className="text-3xl font-semibold mt-6 mb-4">{year}</h3>
            {filterEvents(year).length > 0 ? (
              filterEvents(year).map((event) => (
                <Event key={event.date} event={event} isPrevious={true} />
              ))
            ) : (
              <div className="text-gray-500">No events found for this year</div>
            )}
          </div>
        ))
      ) : (
        <div className="text-gray-500">No events found</div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center pb-10">
      <h2 className="text-3xl md:text-6xl font-semibold pt-8 md:py-8 lg:py-10 text-center tracking-tighter">
        ALL <span className="font-light">EVENTS</span>
      </h2>

      <div className="mt-6 md:mt-0 mb-6">{renderYearsNav()}</div>

      <div className="mb-6 text-white">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      {renderEvents()}
    </div>
  );
};

export default AllEvents;
