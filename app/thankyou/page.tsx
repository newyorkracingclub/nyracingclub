import Link from 'next/link';

export default function Thanks() {
  return (
    <div className="flex flex-col justify-center text-center h-[50vh] px-4 lg:px-0">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-4">
        Thank You for Your Message!
      </h1>
      <p className="text-lg lg:text-2xl pb-4">We will be in touch shortly.</p>
      <Link className="text-base underline hover:text-red-500" href="/">
        Return Home
      </Link>
    </div>
  );
}
