import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <div>
      <h1>Nested About Collage</h1>
      <Link href="/About">About</Link>
    </div>
  );
}

export default page;
