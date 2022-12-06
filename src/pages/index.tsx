import * as React from 'react';

import { Hero } from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import { MintContainer } from '@/components/MintContainer';
import Refs from '@/components/Refs';

export default function HomePage() {
  return (
    <Layout title='Home'>
      <main>
        <section className='text-white'>
          <div className='mt-20 grid grid-cols-1 items-start justify-between gap-2 md:grid-cols-2 md:gap-0 '>
            <Hero />
            <MintContainer />
          </div>
        </section>
        <section className='text-white'>
          <Refs />
        </section>
      </main>
    </Layout>
  );
}
