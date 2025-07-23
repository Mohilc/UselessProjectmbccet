import { Heart, Mail, Phone } from 'lucide-react';
import { Instagram } from 'lucide-react';
import tinkerHubLogo from '@/assets/tinkerhub-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer id="contact" className="bg-surface-elevated border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <img 
      src="https://i.postimg.cc/KvLVqbQH/brave-screenshot.png" 
      alt="Useless Projects" 
      className="h-10 w-10 animate-glow-pulse" 
    />

              <div>
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Useless Projects
                </h3>
                <p className="text-sm text-muted-foreground">by TinkerHub MBCCET</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Build literally anything – imagination is your limit. Join the most creative 15-hour make-a-thon experience.
            </p>
          </div>

          {/* Event Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Event Information</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-primary">Date & Time</p>
                <p className="text-sm text-muted-foreground">August 1-2, 2025</p>
                <p className="text-sm text-muted-foreground">5:00 PM – 8:00 AM</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Venue</p>
                <p className="text-sm text-muted-foreground">MBCCET Campus, Peermade</p>
                <p className="text-sm text-muted-foreground">Kerala, India</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Format</p>
                <p className="text-sm text-muted-foreground">15-Hour Make-a-thon</p>
                <p className="text-sm text-muted-foreground">Limited to 150 participants</p>
              </div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-lg font-bold text-foreground mb-2">For any queries, feel free to reach out to us!</h4>
              
              {/* Social Icons */}
              <div className="flex justify-center space-x-4 mb-6">
                <a 
                  href="https://instagram.com/tinkerhub.mbccet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="text-white" size={20} />
                </a>
                <a 
                  href="https://linkedin.com/company/tinkerhub-mbccet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <svg className="text-white" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-gradient-card p-6 rounded-lg border border-primary/20">
              <h5 className="text-lg font-semibold text-foreground mb-4 text-center">For more Information</h5>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">👤</span>
                  </div>
                  <span className="text-foreground font-medium">Shaun david prince</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="text-primary" size={16} />
                  </div>
                  <a href="tel:+918826173157" className="text-foreground hover:text-primary transition-colors">
                    +91 8289867709
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="text-primary" size={16} />
                  </div>
                  <a href="mailto:chrissattasseril16@gmail.com" className="text-foreground hover:text-primary transition-colors break-all">
                    princeshaundavid@gmail.com

                  </a>
                </div>
                <div className="text-center mt-4 pt-3 border-t border-primary/20">
                  <p className="text-sm text-muted-foreground">TinkerHub MBCCET Campus Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© {currentYear} TinkerHub MBCCET. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="text-primary animate-glow-pulse" size={16} />
              <span>for makers everywhere</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-primary px-6 py-2 rounded-full text-primary-foreground font-semibold">
              <span></span>
           
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
