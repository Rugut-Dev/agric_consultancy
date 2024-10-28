import Hero from '@/components/sections/Hero';
import AboutUs from '@/components/sections/AboutUs';
import WaitlistForm from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import TopBar from '@/components/sections/TopBar';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Hero />
      <AboutUs />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
