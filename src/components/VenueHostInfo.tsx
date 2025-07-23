import { Building, Users, FileText, Calendar, HelpCircle, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VenueHostInfo = () => {
  const hostSections = [
    {
      icon: Building,
      title: "Who Can Host",
      description: "Requirements and criteria for becoming a venue host",
      href: "https://www.notion.so/Who-Can-Host-231bd5ba1a868093b970f9238be016a6"
    },
    {
      icon: Users,
      title: "How to Apply",
      description: "Step-by-step application process for campus venues",
      href: "https://www.notion.so/How-to-Apply-231bd5ba1a8680449fdecb924b0a1352"
    },
    {
      icon: FileText,
      title: "Venue Host Handbook",
      description: "Complete guide for organizing the event at your campus",
      href: "https://www.notion.so/Venue-Host-Handbook-231bd5ba1a8680348f3ae340c508a0a4"
    },
    {
      icon: Calendar,
      title: "Event Schedule",
      description: "Detailed timeline and schedule for hosting venues",
      href: "https://www.notion.so/Event-Schedule-236bd5ba1a86809fb141f9c38e052054"
    },
    {
      icon: HelpCircle,
      title: "FAQ for Hosts",
      description: "Common questions and answers for venue hosts",
      href: "https://www.notion.so/FAQ-for-Hosts-231bd5ba1a8680469acbf3a02552e122"
    },
    {
      icon: Folder,
      title: "Resources",
      description: "All the resources and materials you'll need",
      href: "https://www.notion.so/Resources-231bd5ba1a868092903ec42bb2574703"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            For Campus Venue Hosts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bring Useless Projects 2.0 to your campus and inspire creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hostSections.map(({ icon: Icon, title, description, href }, index) => (
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
            variant="outline"
            size="lg" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4"
          >
            Apply to Host
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VenueHostInfo;