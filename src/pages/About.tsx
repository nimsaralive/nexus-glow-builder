import { Navbar } from '@/components/Navbar';
import { TimelineItem } from '@/components/TimelineItem';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Target, Eye, Rocket, Users, ArrowRight } from 'lucide-react';

const timeline = [
  {
    year: '2019',
    title: 'Foundation',
    description: 'Paxxmo was founded with a vision to bridge the gap between cutting-edge technology and exceptional design.',
  },
  {
    year: '2020',
    title: 'First Milestone',
    description: 'Reached 25 successful projects and expanded our team to 15 talented professionals.',
  },
  {
    year: '2022',
    title: 'AI Integration',
    description: 'Pioneered AI-powered development workflows, revolutionizing how we build digital products.',
  },
  {
    year: '2024',
    title: 'Global Reach',
    description: 'Expanded operations internationally, serving clients across 20+ countries with futuristic solutions.',
  },
];

const team = [
  { name: 'Alex Chen', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80' },
  { name: 'Sarah Mitchell', role: 'CTO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80' },
  { name: 'Marcus Johnson', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80' },
  { name: 'Emily Rodriguez', role: 'AI Director', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80' },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Our Story</span>
            </div>
            <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About <span className="text-primary neon-text">Paxxmo</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are architects of the digital future, crafting innovative solutions 
              that transform businesses and inspire the world.
            </p>
          </motion.div>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-futuristic"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-orbitron text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, 
                enhance user experiences, and create lasting impact in an ever-evolving 
                technological landscape. We believe in pushing boundaries and redefining 
                what's possible in the digital realm.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-futuristic"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-orbitron text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading digital innovation partner, recognized for 
                creating transformative experiences that shape the future of technology. 
                We envision a world where every digital interaction is intuitive, 
                beautiful, and powerful.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Our Journey</span>
            </div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground">
              The <span className="text-primary neon-text">Timeline</span>
            </h2>
          </motion.div>

          {/* Timeline Line */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/30" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  {...item} 
                  index={index} 
                  isLeft={index % 2 === 0} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">The People</span>
            </div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary neon-text">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the brilliant minds behind Paxxmo's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="card-futuristic text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 border-2 border-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                      style={{ boxShadow: 'inset 0 0 20px hsl(217 91% 60% / 0.3)' }}
                    />
                  </div>
                  <h3 className="font-orbitron text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-futuristic"
          >
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Join Our <span className="text-primary neon-text">Team</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals to join our mission.
            </p>
            <Link to="/contact" className="btn-neon rounded-lg inline-flex items-center gap-2 group">
              Get in Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
