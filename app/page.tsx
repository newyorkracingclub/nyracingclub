import Head from 'next/head';
import ContactForm from '@/components/Contact';
import Events from '@/components/Events';
import Banner from '@/components/Banner';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>New York Racing Club</title>
        <meta
          name="description"
          content="Welcome to the New York Racing Club. Discover upcoming races, events, and more. Join us for running, cycling, skating, and swimming events in NYC."
        />
        <meta property="og:title" content="New York Racing Club - Home" />
        <meta
          property="og:description"
          content="Welcome to the New York Racing Club. Discover upcoming races, events, and more. Join us for running, cycling, skating, and swimming events in NYC."
        />
      </Head>
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
