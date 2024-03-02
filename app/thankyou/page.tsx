import React from 'react';
import Link from 'next/link';

function Thanks() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white rounded shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Thank You for Your Message!</h1>
        <p className="text-lg mb-6">
          We appreciate you reaching out to us. We will be in touch shortly.
        </p>
        <Link href="/">
          <a className="text-blue-600 underline">Return to Homepage</a>
        </Link>
      </div>
    </div>
  );
}

export default Thanks;
