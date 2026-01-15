import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

export const PortfolioCard = ({ title, category, image, index }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl glass aspect-[4/3]">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cosmic-darker via-cosmic-darker/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Neon Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"
          style={{ boxShadow: '-2px -2px 10px hsl(217 91% 60% / 0.5)' }}
        />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0"
          style={{ boxShadow: '2px 2px 10px hsl(217 91% 60% / 0.5)' }}
        />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-primary text-sm font-orbitron uppercase tracking-wider">
            {category}
          </span>
          <h3 className="font-orbitron text-xl font-semibold text-foreground mt-2">
            {title}
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-foreground hover:text-primary hover:neon-glow transition-all"
          >
            <Eye size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-foreground hover:text-primary hover:neon-glow transition-all"
          >
            <ExternalLink size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
