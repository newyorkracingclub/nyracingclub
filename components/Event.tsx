import { CalendarEvent } from '@/lib/events';
import Link from 'next/link';

interface EventCardProps {
  event: CalendarEvent;
  isPrevious: boolean;
}

const Event: React.FC<EventCardProps> = ({ event, isPrevious }) => {
  const cardContent = (
    <div
      className={`flex items-center justify-between ${isPrevious ? 'px-4 py-1' : 'px-4 py-2'} bg-white rounded-lg shadow-md`}
    >
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <div
            className={`text-red-600 ${isPrevious ? 'text-sm lg:text-base' : 'md:text-xl'} font-bold`}
          >
            {event.month}
          </div>
          <div
            className={`${isPrevious ? 'sm:text-xs md:text-sm lg:text-base' : 'md:text-3xl'} font-bold`}
          >
            {event.day}
          </div>
        </div>
        <div>
          <div
            className={`lg:px-4 font-light ${isPrevious ? 'text-xs md:text-base' : ' px-2 text-sm md:text-lg lg:text-2xl'}`}
          >
            {event.summary}
          </div>
        </div>
      </div>
      {!isPrevious && (
        <Link href={event.link ?? ''} target="_blank" passHref>
          <button className="text-xs md:text-base lg:text-base bg-red-600 text-white px-2 py-2 md:px-4 rounded-lg shadow-md hover:opacity-75">
            REGISTER
          </button>
        </Link>
      )}
    </div>
  );
  return isPrevious ? (
    <Link
      href={event.link ?? ''}
      className="hover:cursor-pointer hover:opacity-80"
      passHref
    >
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default Event;
