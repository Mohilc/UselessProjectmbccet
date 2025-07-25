import { Users, Building, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SimpleInfo = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            How to Join
          </h2>
        </div>

        <div className="flex justify-center mb-16">
          <div className="bg-gradient-card p-8 rounded-xl border border-primary/20 flex flex-col items-center justify-center text-center max-w-md">
            <Users className="text-primary mb-4" size={48} />
            <h3 className="text-2xl font-bold mb-4">Participants</h3>
            <p className="text-muted-foreground mb-6">
              Exclusive to MBCCET students. Build crazy, fun projects in 15 hours.
            </p>
    <Button 
      className="bg-gradient-primary"
      onClick={() =>
        window.open(
          "https://docs.google.com/forms/d/e/1FAIpQLSftwP4054v0L0PA30kjoXIVxOlaCPGDvyIDhBISOXJCwwNM1w/viewform?usp=sharing&ouid=101850917464284594362",
          "_blank"
        )
      }
    >
      Register as Participant
    </Button>
  </div>
</div>


        {/* Story */}
        <div className="text-center bg-gradient-card p-8 rounded-xl border border-primary/20">
          <Heart className="text-primary mb-4 mx-auto" size={32} />
          <h3 className="text-2xl font-bold mb-4">Why Useless?</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            In a world chasing results, we made space for students to create without pressure. 
            Because before innovation, there is imagination. Before skill, there is play.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleInfo;
