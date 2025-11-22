import { HeroSection } from './components/hero-section';
import { WhatWeDo } from './components/what-we-do';
import { CoreFeatures } from './components/core-features';
import { Footer } from './components/footer';
import { Testimonials } from './components/testimonials';
import { ProblemsWeSolve } from './components/problems-we-solve';

export default function Home() {
  return (
    <main className='w-full bg-neutral-50'>
      <div
        className='flex flex-col lg:flex-row md:gap-20 w-full max-w-7xl mx-auto'
      >
        <HeroSection />
        <ProblemsWeSolve />
      </div>
      <CoreFeatures />
      <Testimonials />
      <WhatWeDo />
      <Footer />
    </main>
  );
}
