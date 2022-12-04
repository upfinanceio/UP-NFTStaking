import Link from 'next/link';
import * as React from 'react';

export default function Logo() {
  return (
    <div className='cursor-pointer'>
      <Link href='/'>    
        <div>      
          <img src="./images/logo.png" width="200px" />
        </div>
      </Link>
    </div>
  );
}
