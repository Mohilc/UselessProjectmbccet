import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ParticipantInfo from '@/components/ParticipantInfo';
import VenueHostInfo from '@/components/VenueHostInfo';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ParticipantInfo />
      <VenueHostInfo />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;