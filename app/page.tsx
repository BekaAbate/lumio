import { Header } from '@/components/header';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Testimonial } from '@/components/sections/testimonial';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-14 md:pt-16 bg-surface-container-lowest min-h-screen">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonial />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
