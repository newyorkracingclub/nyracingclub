import InstagramImage from '@logos/instagram.svg';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

export default function Instagram() {
  return (
    <Link
      href="https://www.instagram.com/verrazanocap/"
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
          <Image
            priority
            src={InstagramImage}
            alt="instagram logo"
            className="filter invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}
