import FacebookImage from '@logos/facebook.svg';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

export default function Facebook() {
  return (
    <Link
      href="https://www.facebook.com/VerrazanoTeamRacing/"
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
          <Image priority src={FacebookImage} alt="facebook logo" />
        </AspectRatio>
      </div>
    </Link>
  );
}
