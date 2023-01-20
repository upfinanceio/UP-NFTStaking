import * as React from 'react';

import { Hero } from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import { StakingContainer } from '@/components/StakingContainer';

export default function HomePage() {
  return (
    <Layout title='Home'>
      <main>
        <section className='text-white'>
          <div className='mt-20 grid grid-cols-1 items-start justify-between gap-2 md:grid-cols-2 md:gap-0 '>
            <Hero />
            <StakingContainer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
