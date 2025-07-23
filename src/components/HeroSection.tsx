import { useState } from 'react';
import { Zap, Calendar, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  const handleTitleClick = () => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 300);
  };

  const floatingIcons = [
    { Icon: Zap, delay: '0s', position: 'top-1/4 left-1/4' },
    { Icon: Calendar, delay: '1s', position: 'top-1/3 right-1/4' },
    { Icon: Users, delay: '2s', position: 'bottom-1/3 left-1/3' },
    { Icon: Trophy, delay: '1.5s', position: 'bottom-1/4 right-1/3' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <Icon
          key={index}
          className={`absolute ${position} text-primary/30 animate-float hidden lg:block`}
          size={32}
          style={{ animationDelay: delay }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 cursor-pointer transition-all duration-300 ${
              isGlitching ? 'animate-glitch' : ''
            }`}
            onClick={handleTitleClick}
          >
    <span className="inline-block drop-shadow-glow">
  <img
    src="https://i.postimg.cc/FR3sF8NC/brave-screenshot-removebg-preview.png"
    alt="Useless Projects"
    className="w-[300px] h-auto"
  />
</span>

          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Build anything useless. No experience needed, just curiosity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSftwP4054v0L0PA30kjoXIVxOlaCPGDvyIDhBISOXJCwwNM1w/viewform?usp=sharing&ouid=101850917464284594362"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-primary text-lg px-8 py-4">
                <Zap className="mr-2" size={20} />
                Register Now
              </Button>
            </a>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
