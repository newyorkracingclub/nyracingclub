import ContactForm from '@/components/Contact';
import Events from '@/components/Events';
import Banner from '@/components/Banner';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <Carousel />
      <Banner text="RUN • RIDE • SKATE • SWIM" duration={40} />
      <div id="events" className="bg-blue px-8 pb-10 lg:pb-10 lg:p-0">
        <Events />
      </div>
      <Banner
        className="bg-sky-300"
        text="NEW YORK RACING CLUB"
        duration={30}
      />

      <div id="contact" className="px-6 py-4 md:p-10">
        <ContactForm />
      </div>
    </>
  );
}
