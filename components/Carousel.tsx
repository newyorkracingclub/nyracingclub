'use client';
import RacingImage1 from '@logos/fixedgear.webp';
import RacingImage2 from '@logos/landingpage.webp';
import RacingImage3 from '@logos/run.webp';
import RacingImage4 from '@logos/skate.webp';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const images = [RacingImage1, RacingImage2, RacingImage3, RacingImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <Image
      priority
      src={images[currentImageIndex]}
      alt="Cycling Race"
      width={960}
      height={540}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="w-full h-auto object-cover"
    />
  );
}
