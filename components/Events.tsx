import Link from 'next/link';
import Image from 'next/image';
import BeachChannelImage from '@logos/beachchannel.jpeg';
import ConeyIslandImage from '@logos/coneyisland.jpeg';

function Events() {
  return (
    <div className="px-2 pb-10 lg:px-10 lg:pb-20">
      <div className="grid grid-cols-2 xl:flex xl:flex-row justify-center gap-3 lg:gap-8">
        <Link
          href="https://www.bikereg.com/beachchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:opacity-50"
        >
          <Image
            priority
            src={BeachChannelImage}
            alt="Beach Channel Time Trial Flyer"
            layout="responsive"
            width={1920}
            height={1080}
            className="aspect-square"
          />
        </Link>

        <Link
          href="https://www.bikereg.com/65211"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:opacity-50"
        >
          <Image
            priority
            src={ConeyIslandImage}
            alt="Coney Island Crit Flyer"
            layout="responsive"
            width={1920}
            height={1080}
            className="aspect-square"
          />
        </Link>
        <Link
          href="https://www.bikereg.com/65211"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:opacity-50"
        >
          <Image
            priority
            src={ConeyIslandImage}
            alt="Coney Island Crit Flyer"
            layout="responsive"
            width={1920}
            height={1080}
            className="aspect-square"
          />
        </Link>
        <Link
          href="https://www.bikereg.com/65211"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer hover:opacity-50"
        >
          <Image
            priority
            src={ConeyIslandImage}
            alt="Coney Island Crit Flyer"
            layout="responsive"
            width={1920}
            height={1080}
            className="aspect-square"
          />
        </Link>
      </div>
    </div>
  );
}

export default Events;
