import { CalendarEvent } from '@/lib/events';
import Link from 'next/link';
import GreaterThanSign from '@logos/greaterThanArrow.png';
import Image from 'next/image';

interface EventProps {
  event: CalendarEvent;
  isPrevious: boolean;
}

export default function Event({ event, isPrevious }: EventProps) {
  const eventClasses = isPrevious
    ? 'block border-t border-b border-gray-700 p-2 md:p-4 bg-defaultbg hover:bg-gray-800 focus:bg-defaultbg'
    : 'flex items-center justify-between p-2 pr-2 md:p-4 md:pr-4 bg-gray-200 rounded-lg shadow-md';

  return (
    <div
      className={`event-card ${isPrevious ? 'previous-event' : 'current-event'}`}
    >
      {isPrevious ? (
        <Link
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          passHref
        >
          <button
            className={`${eventClasses} w-full`}
            aria-label={`Details of ${event.summary} on ${event.month} ${event.day}`}
          >
            <div className="flex items-center justify-between">
              <div className="text-center border-l-2 border-sky-500 pl-2 mr-4 lg:mr-8">
                <div className="text-xl font-bold text-red-500">
                  {event.month}
                </div>
                <div className="md:text-3xl font-bold text-white">
                  {event.day}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-start text-xs md:text-lg lg:text-2xl text-white font-bold mr-4 lg:mr-6">
                  {event.summary}
                </div>
              </div>
              <div className="ml-4">
                <Image
                  src={GreaterThanSign}
                  alt="Arrow indicating more details"
                  width={48}
                  height={48}
                  className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
                />
              </div>
            </div>
          </button>
        </Link>
      ) : (
        <div className={eventClasses}>
          <div className="flex items-center justify-between">
            <div className="text-center mr-4 pr-2 lg:mr-6">
              <div className="text-xl font-bold text-red-700">
                {event.month}
              </div>
              <div className="md:text-3xl font-bold">{event.day}</div>
            </div>

            <div className="flex-1">
              <div className="text-start text-xs md:text-lg lg:text-2xl font-bold mr-4 lg:mr-6">
                {event.summary}
              </div>
            </div>
          </div>
          <Link
            href={event.link ?? ''}
            target="_blank"
            rel="noopener noreferrer"
            passHref
          >
            <button className="text-xs md:text-base lg:text-base bg-red-700 text-white px-2 py-2 md:px-4 rounded-lg shadow-md hover:bg-gray-700 focus:bg-red-700">
              REGISTER
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
