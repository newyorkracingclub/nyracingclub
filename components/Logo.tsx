import LogoImage from '@logos/logo.svg';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-72 h-30">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center pt-16"
        >
          <Image
            priority
            src={LogoImage}
            alt="ny racing logo"
            className="light:filter light:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}
