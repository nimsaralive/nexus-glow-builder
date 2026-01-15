import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Share2, 
  Brain, 
  Palette, 
  Cpu, 
  Code,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const featuredServices = [
  {
    icon: <Globe size={32} />,
    title: 'Web Development',
    description: 'Cutting-edge web solutions with futuristic interfaces and seamless experiences.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'App Development',
    description: 'Native and cross-platform apps that push the boundaries of mobile innovation.',
  },
  {
    icon: <Brain size={32} />,
    title: 'AI Integration',
    description: 'Transform your business with intelligent automation and machine learning solutions.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Services Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Our Expertise</span>
            </div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-6">
              Services We <span className="text-primary neon-text">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver next-generation digital solutions that transform businesses 
              and create lasting impact in the digital landscape.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link to="/services" className="btn-glass rounded-lg inline-flex items-center gap-2 group">
              Explore All Services
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full">
                <Cpu className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Why Paxxmo</span>
              </div>
              <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-6">
                Innovation at <span className="text-primary neon-text">Core</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We don't just build digital products—we engineer the future. Our team combines 
                cutting-edge technology with creative vision to deliver solutions that set 
                new standards in the industry.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  'AI-Powered Development Workflows',
                  'Futuristic UI/UX Design Patterns',
                  'Scalable Cloud Architecture',
                  '24/7 Premium Support',
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary neon-glow" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/about" className="btn-neon rounded-lg inline-flex items-center gap-2 mt-8 group">
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 border-2 border-primary/30 rounded-full"
                />
                {/* Middle Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-8 border border-primary/50 rounded-full"
                />
                {/* Inner Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-16 border border-primary/70 rounded-full"
                />
                {/* Center Orb */}
                <div className="absolute inset-24 rounded-full bg-primary/20 flex items-center justify-center neon-glow">
                  <div className="w-16 h-16 rounded-full bg-primary animate-pulse-glow flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-12 h-12 rounded-xl glass flex items-center justify-center text-primary"
                >
                  <Globe size={24} />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-12 h-12 rounded-xl glass flex items-center justify-center text-primary"
                >
                  <Brain size={24} />
                </motion.div>
                <motion.div
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-xl glass flex items-center justify-center text-primary"
                >
                  <Palette size={24} />
                </motion.div>
                <motion.div
                  animate={{ x: [10, -10, 10] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-xl glass flex items-center justify-center text-primary"
                >
                  <Smartphone size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-futuristic relative overflow-hidden"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 cyber-grid opacity-20" />
            
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative py-8">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Build the <span className="text-primary neon-text">Future</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's transform your vision into reality. Get in touch and let's 
                create something extraordinary together.
              </p>
              <Link to="/contact" className="btn-neon rounded-lg inline-flex items-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
