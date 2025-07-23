import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SimpleInfo from '@/components/SimpleInfo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SimpleInfo />
      <Footer />
    </div>
  );
};

export default Index;