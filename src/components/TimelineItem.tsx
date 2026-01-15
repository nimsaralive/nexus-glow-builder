import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isLeft?: boolean;
}

export const TimelineItem = ({ year, title, description, index, isLeft = false }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8`}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'lg:text-right' : ''}`}>
        <div className="card-futuristic">
          <span className="font-orbitron text-2xl font-bold text-primary neon-text">
            {year}
          </span>
          <h3 className="font-orbitron text-xl font-semibold text-foreground mt-2 mb-3">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Timeline Node */}
      <div className="hidden lg:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary neon-glow relative z-10">
          <div className="absolute inset-0 rounded-full bg-primary animate-energy-pulse" />
        </div>
      </div>

      {/* Spacer for layout */}
      <div className="hidden lg:block flex-1" />
    </motion.div>
  );
};
