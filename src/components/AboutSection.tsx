import { Heart, Mail, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const aboutLinks = [
    {
      icon: Info,
      title: "About TinkerHub",
      description: "Learn more about the organization behind this initiative",
      href: "https://www.notion.so/About-TinkerHub-231bd5ba1a8680c09ba1eb77efe3f5ce"
    },
    {
      icon: Mail,
      title: "Contact Us",
      description: "Get in touch with the organizing team",
      href: "https://www.notion.so/Contact-Us-231bd5ba1a8680499e56d225a0657324"
    }
  ];

  return (
    <section className="py-20 bg-surface-elevated">
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            The Story Behind Useless Projects
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="italic">
              "In a world chasing results, we paused to ask - what if we made space for students to create without the pressure to be 'useful'? That's how Useless Projects was born. A name that made people laugh, wonder, and then get curious enough to build."
            </p>
            
            <p>
              This initiative wasn't about big ideas or polished outcomes. It was about courage.
            </p>
            
            <p>
              What emerged was magical. Scrappy prototypes. Ridiculous ideas. And most importantly, students who dared to begin. One participant, barely weeks into college, built her first hardware project by morning. That spark? That's what we're here to ignite.
            </p>
            
            <p className="font-semibold text-foreground">
              Because before innovation, there is imagination. Before skill, there is play. And before impact, there is belief.
            </p>
            
            <p>
              Useless Projects returns with the same spirit - to remind young people that it's okay to play, to mess up, to dream without a roadmap. Because in those moments of low stakes and high courage, something real is sparked.
            </p>
            
            <p className="italic">
              We invite you to be part of it - as a host, a partner, a believer in the power of messy, joyful making.
            </p>
          </div>
        </div>

        {/* About & Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {aboutLinks.map(({ icon: Icon, title, description, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-gradient-card p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-card text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 mb-6 mx-auto">
                  <Icon 
                    className="text-primary group-hover:scale-110 transition-transform duration-300" 
                    size={32} 
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Final Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card p-8 rounded-xl border border-primary/20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="text-primary animate-glow-pulse mr-2" size={24} />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Join the Movement
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">
              Whether you're ready to build something wonderfully useless or want to bring this magic to your campus, we're here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow text-lg px-8 py-4"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSftwP4054v0L0PA30kjoXIVxOlaCPGDvyIDhBISOXJCwwNM1w/viewform?usp=sharing&ouid=101850917464284594362", "_blank")}
              >
                Start Building
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4"
              >
                Become a Host
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;