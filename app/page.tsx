'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import RacingImage1 from '@logos/fixedgear.png';
import RacingImage2 from '@logos/landingpage.png';
import RacingImage3 from '@logos/run.png';
import RacingImage4 from '@logos/skate.png';
import ContactForm from '@/components/Contact';
import Events from '@/components/Events';
import Mission from '../components/Mission';
import Banner from '@/components/Banner';

export default function Home() {
  const images = [RacingImage1, RacingImage2, RacingImage3, RacingImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Image
        priority
        src={images[currentImageIndex]}
        alt="Cycling Race"
        width={1920}
        height={1080}
        sizes="100vw"
        className="w-full h-auto object-cover"
      />
      <Banner text="RUN • RIDE • SKATE • SWIM" />

      <div id="events" className="bg-blue px-6 pb-10 lg:px-10 lg:pb-20">
        <Events />
      </div>
      <Banner text="UNLEASH YOUR POTENTIAL" />
      <div id="mission">
        <Mission />
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-4xl">
          <div id="contact" className="px-6 py-4 md:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
