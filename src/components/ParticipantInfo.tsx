import { Users, BookOpen, Clock, HelpCircle, Lightbulb, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ParticipantInfo = () => {
  const participantSections = [
    {
      icon: Users,
      title: "Who Can Join",
      description: "Open to all students - no experience required, just curiosity!",
      href: "https://www.notion.so/Who-Can-Join-231bd5ba1a8680859786e3a98e40ea54"
    },
    {
      icon: BookOpen,
      title: "How It Works",
      description: "Simple steps to get started with your useless project journey",
      href: "https://www.notion.so/How-It-Works-231bd5ba1a868075bfd2e63d1320d248"
    },
    {
      icon: Clock,
      title: "Timeline",
      description: "Event schedule and important dates to remember",
      href: "https://www.notion.so/Timeline-233bd5ba1a8680be9d07de16d54c35b7"
    },
    {
      icon: FileText,
      title: "Guidelines",
      description: "Rules and guidelines for a smooth experience",
      href: "https://www.notion.so/Guidelines-231bd5ba1a86800cb9ffd5b45209b8c0"
    },
    {
      icon: Lightbulb,
      title: "Sample Projects",
      description: "Get inspired by previous useless but amazing creations",
      href: "https://www.notion.so/Sample-Projects-231bd5ba1a868049883ed5389f9d4938"
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Common questions answered for participants",
      href: "https://www.notion.so/FAQ-231bd5ba1a8680648062ecc2d4440fe2"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            For Participants
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about joining Useless Projects 2.0
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {participantSections.map(({ icon: Icon, title, description, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-gradient-card p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-card animate-fade-in h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 mb-4">
                    <Icon 
                      className="text-primary group-hover:scale-110 transition-transform duration-300" 
                      size={28} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow text-lg px-8 py-4"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSftwP4054v0L0PA30kjoXIVxOlaCPGDvyIDhBISOXJCwwNM1w/viewform?usp=sharing&ouid=101850917464284594362", "_blank")}
          >
            Register as Participant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParticipantInfo;