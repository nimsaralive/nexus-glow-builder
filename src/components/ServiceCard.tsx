import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative group"
    >
      <div className="card-futuristic relative corner-leds h-full">
        {/* Holographic Overlay on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hologram rounded-xl" />
        
        {/* Corner LED Accents */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />

        {/* Icon Container */}
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <div className="text-primary group-hover:neon-text transition-all duration-300">
              {icon}
            </div>
          </div>
          {/* Icon Glow */}
          <div className="absolute inset-0 w-16 h-16 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Title */}
        <h3 className="font-orbitron text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Bottom Energy Line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-500" 
          style={{ boxShadow: '0 0 10px hsl(217 91% 60% / 0.8)' }} 
        />
      </div>
    </motion.div>
  );
};
