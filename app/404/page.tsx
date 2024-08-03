import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found - New York Racing Club</title>
        <meta
          name="description"
          content="404 Error: The page you are looking for does not exist. Return to the homepage of the New York Racing Club to explore our events and activities."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
      <div className="flex flex-col justify-center items-center h-[50vh] px-4">
        <h1 className="text-3xl tracking-tight font-bold pb-4">
          404 - Page Not Found
        </h1>
        <p className="text-base pb-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link className="text-base underline hover:text-red-500" href="/">
          Return Home
        </Link>
      </div>
    </>
  );
}
