import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-cosmic-deeper/50">
      {/* Top Energy Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center neon-glow">
                <span className="font-orbitron font-bold text-xl text-primary-foreground">P</span>
              </div>
              <span className="font-orbitron text-xl font-bold tracking-wider">PAXXMO</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Where digital innovation meets the future. Building next-generation 
              experiences for forward-thinking businesses.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
                { icon: <Instagram size={18} />, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-sm uppercase tracking-wider text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-orbitron text-sm uppercase tracking-wider text-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'App Development',
                'AI Integration',
                'UI/UX Design',
                'Digital Marketing',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-orbitron text-sm uppercase tracking-wider text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">hello@paxxmo.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  123 Innovation Street<br />
                  Tech City, TC 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Paxxmo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
