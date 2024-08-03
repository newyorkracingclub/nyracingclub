import Head from 'next/head';
import Link from 'next/link';

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank You - New York Racing Club</title>
        <meta
          name="description"
          content="Thank you for reaching out to the New York Racing Club. We have received your message and will get back to you shortly. Feel free to explore more about our events and activities."
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
      </Head>
      <div className="flex flex-col justify-center text-center h-[50vh] px-4 lg:px-0">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-4">
          Thank You for Your Message!
        </h1>
        <p className="text-lg lg:text-2xl pb-4">We will be in touch shortly.</p>
        <Link className="text-base underline hover:text-red-500" href="/">
          Return Home
        </Link>
      </div>
    </>
  );
}
