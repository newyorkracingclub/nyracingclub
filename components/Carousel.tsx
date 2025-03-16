'use client';
import RacingImage1 from '@carousel/ride1.jpg';
import RacingImage2 from '@carousel/ride2.jpg';
import RacingImage3 from '@carousel/ride3.webp';
import RacingImage4 from '@carousel/ride4.webp';
import RacingImage5 from '@carousel/ride5.jpg';
import RacingImage6 from '@carousel/ride6.jpg';
import RacingImage7 from '@carousel/run.webp';
import RacingImage8 from '@carousel/run1.jpg';
import RacingImage9 from '@carousel/run2.jpg';
import RacingImage10 from '@carousel/skate.webp';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
  const images = [
    RacingImage3,
    RacingImage8,
    RacingImage1,
    RacingImage10,
    RacingImage5,
    RacingImage7,
    RacingImage4,
    RacingImage6,
    RacingImage9,
    RacingImage2,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

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
