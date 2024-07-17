import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <h1 className="text-3xl tracking-tight font-bold pb-4">
        404 - Page Not Found
      </h1>
      <Link className="text-base underline hover:text-red-500" href="/">
        Return Home
      </Link>
    </div>
  );
}
