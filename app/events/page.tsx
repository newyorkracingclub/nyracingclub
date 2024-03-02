import RacingEvents from '@/components/Events';
import Calendar from '@/components/Calendar';
import Image from 'next/image';
import RacingImage from '@logos/landingpage.png';

function Events() {
  return (
    <>
      <div className="px-2 pt-2 lg:px-10 lg:pt-10">
        <Image
          priority
          src={RacingImage}
          alt="Cycling Race"
          layout="responsive"
          width={1920}
          height={1080}
        />
        <p className="text-blue text-2xl md:text-5xl lg:text-7xl xl:text-8xl py-4 text-center font-bold tracking-tighter">
          UNLEASH YOUR POTENTIAL: <br />
          <span className="font-light">RIDE, RUN, SKATE, SWIM</span>
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <Calendar />
      </div>
      <div>
        <RacingEvents />
      </div>
    </>
  );
}

export default Events;
