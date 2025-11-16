import ClientSection from '@/components/landing/client-section';
import CallToActionSection from '@/components/landing/cta-section';
import HeroSection from '@/components/landing/hero-section';
import PricingSection from '@/components/landing/pricing-section';
import FAQPage from '@/components/landing/sesi-faq';
import SideUnik from '@/components/landing/side-content';
import Particles from '@/components/magicui/particles';
import { SphereMask } from '@/components/magicui/sphere-mask';
// import { TerminalDemo } from '@/components/code-side';

export default async function Page() {
  return (
    <>
      <HeroSection />
      <SideUnik />
      <FAQPage />
      {/* <DContent /> */}
      {/* <ClientSection />
      <SphereMask />
      <PricingSection />
      <CallToActionSection /> */}
      {/* <Model3d /> */}
      {/* <Particles
        className='absolute inset-0 -z-10'
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={'#ffffff'}
      /> */}
    </>
  );
}
