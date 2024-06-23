import { CalendarEvent } from '@/lib/events';
import Link from 'next/link';
import GreaterThanSign from '@logos/greaterThanArrow.png';
import Image from 'next/image';

interface EventCardProps {
  event: CalendarEvent;
  isPrevious: boolean;
}

const Event: React.FC<EventCardProps> = ({ event, isPrevious }) => {
  return isPrevious ? (
    <Link href={event.link} passHref>
      <div className="block border-t border-b border-gray-700 p-2 md:p-4 hover:bg-gray-800 transition duration-300">
        <div className="flex items-center">
          <div className="text-center border-l-2 border-sky-500 px-4 mr-4">
            <div className="text-xl font-bold text-red-500">{event.month}</div>
            <div className="md:text-3xl font-bold font-bold text-white">
              {event.day}
            </div>
          </div>
          <div className="flex-1">
            <div className="text-sm md:text-lg lg:text-2xl text-white font-light">
              {event.summary}
            </div>
          </div>
          <div className="ml-4">
            <Image
              src={GreaterThanSign}
              alt="GreaterThan"
              width={48}
              height={48}
              className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-200 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <div className="text-red-700 md:text-xl font-bold">{event.month}</div>
          <div className="md:text-3xl font-bold">{event.day}</div>
        </div>
        <div>
          <div className="lg:px-4 font-light px-2 text-sm md:text-lg lg:text-2xl">
            {event.summary}
          </div>
        </div>
      </div>
      <Link href={event.link ?? ''} target="_blank" rel="nofollow" passHref>
        <button className="text-xs md:text-base lg:text-base bg-red-700 text-white px-2 py-2 md:px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300">
          REGISTER
        </button>
      </Link>
    </div>
  );
};

export default Event;
