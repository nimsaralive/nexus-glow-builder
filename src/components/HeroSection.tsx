import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 cyber-grid-animated opacity-30" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      {/* Floating Holographic Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-[10%] w-40 h-40 rounded-full bg-accent/20 blur-3xl"
      />

      {/* Decorative Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[600px] h-[600px] border border-primary/20 rounded-full"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[800px] h-[800px] border border-primary/10 rounded-full"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Next-Generation Digital Agency
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Building</span>
          <br />
          <span className="text-primary neon-text">Future-Ready</span>
          <br />
          <span className="text-foreground">Digital Experiences</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Where digital innovation meets the future. We craft immersive web experiences,
          cutting-edge applications, and transformative AI solutions for tomorrow's world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact" className="btn-neon rounded-lg flex items-center gap-2 group">
            Launch Your Project
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/portfolio" className="btn-glass rounded-lg">
            View Our Work
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
        >
          {[
            { value: '100+', label: 'Projects Delivered' },
            { value: '50+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-orbitron text-3xl md:text-4xl font-bold text-primary neon-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Energy Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};
