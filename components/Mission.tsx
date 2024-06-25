import RacingImage1 from '@logos/carousel/kids_blades.jpg';
import Image from 'next/image';
function Mission() {
  return (
    <div className="grid lg:grid-cols-2 mx-auto items-center p-10 bg-red-400 text-center">
      <div className="p-8">
        <Image
          priority
          src={RacingImage1}
          alt="Cycling Race"
          width={960}
          height={540}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="text-blue">
        <p className="text-4xl md:text-6xl xl:text-8xl font-medium tracking-tighter italic">
          &#8220;Our goal is for everyone to race and grow together for a
          faster, more inclusive world.&#8220;
        </p>
      </div>
    </div>
  );
}

export default Mission;
