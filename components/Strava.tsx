import StravaImage from '@logos/strava.svg';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

export default function Strava() {
  return (
    <Link
      href="https://www.strava.com/clubs/VerrazanoBikes"
      prefetch={false}
      className="overflow-hidden hover:opacity-50"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex items-center w-8 h-8">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image priority src={StravaImage} alt="strava logo" />
        </AspectRatio>
      </div>
    </Link>
  );
}
