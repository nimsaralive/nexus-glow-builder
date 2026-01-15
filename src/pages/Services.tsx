import { Navbar } from '@/components/Navbar';
import { ServiceCard } from '@/components/ServiceCard';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ParticleBackground';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Share2, 
  Brain, 
  Palette, 
  Cpu, 
  Code,
  Briefcase,
  Sparkles
} from 'lucide-react';

const services = [
  {
    icon: <Globe size={32} />,
    title: 'Web Development',
    description: 'Cutting-edge websites and web applications with futuristic interfaces, blazing-fast performance, and seamless user experiences across all devices.',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'App Development',
    description: 'Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter. Beautiful, performant, and ready for tomorrow.',
  },
  {
    icon: <Share2 size={32} />,
    title: 'Social Media Marketing',
    description: 'Strategic digital campaigns that amplify your brand across all platforms. Data-driven strategies for maximum engagement and growth.',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'eBiz Consulting',
    description: 'Expert guidance for digital transformation. We help you navigate the evolving digital landscape and optimize your business operations.',
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'Futuristic interface design that merges aesthetics with functionality. Creating immersive digital experiences that captivate users.',
  },
  {
    icon: <Brain size={32} />,
    title: 'AI Integrations',
    description: 'Harness the power of artificial intelligence. Custom AI solutions, chatbots, machine learning models, and intelligent automation.',
  },
  {
    icon: <Code size={32} />,
    title: 'Custom Software',
    description: 'Tailored software solutions built from the ground up. Enterprise-grade systems designed for your unique business requirements.',
  },
  {
    icon: <Cpu size={32} />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud architecture and DevOps excellence. AWS, Azure, and Google Cloud deployments with 99.9% uptime guarantee.',
  },
];

const Services = () => {
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
              <span className="text-sm font-medium text-muted-foreground">What We Do</span>
            </div>
            <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="text-primary neon-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions designed to propel your business into the future.
              From concept to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>

        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary neon-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to bringing your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision, goals, and requirements through in-depth consultation.' },
              { step: '02', title: 'Strategy', description: 'Crafting a comprehensive plan with timelines, technologies, and milestones.' },
              { step: '03', title: 'Development', description: 'Building your solution with cutting-edge technology and best practices.' },
              { step: '04', title: 'Launch', description: 'Deploying your product with ongoing support and optimization.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="card-futuristic text-center h-full">
                  <div className="font-orbitron text-4xl font-bold text-primary/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-orbitron text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-primary/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
