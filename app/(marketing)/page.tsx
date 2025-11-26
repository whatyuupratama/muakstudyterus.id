import HeroSection from '@/components/landing/hero-section';
import { Testimoni } from '@/components/landing/marque-cs';
import FAQPage from '@/components/landing/sesi-faq';
import SideUnik from '@/components/landing/side-content';
import Particles from '@/components/magicui/particles';
// import { SphereMask } from '@/components/magicui/sphere-mask';

export default async function Page() {
  return (
    <>
      <HeroSection />
      <SideUnik />
      <Testimoni />
      {/* <SphereMask /> */}
      <Particles
        className='absolute inset-0 -z-10'
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={'#ffffff'}
      />
      <FAQPage />
    </>
  );
}
