import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Hammer, Shield, Zap, Cog, HardHat, Ruler, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  const mainServices = [
    {
      icon: Wrench,
      title: 'Engineering Workshop',
      description: 'Complete workshop services with advanced machinery and skilled technicians for precision engineering works.',
      features: ['CNC Machining', 'Precision Cutting', 'Metal Forming', 'Quality Testing'],
    },
    {
      icon: Hammer,
      title: 'Structural Fabrication',
      description: 'Heavy-duty structural steel fabrication for industrial, commercial, and infrastructure projects.',
      features: ['Steel Structures', 'Custom Fabrication', 'Pre-fabrication', 'Assembly Services'],
    },
    {
      icon: Shield,
      title: 'High-Risk Works (Above 9m)',
      description: 'Certified for high-risk fabrication and installation works at heights exceeding 9 meters.',
      features: ['Height Safety Systems', 'Certified Personnel', 'Safety Compliance', 'Risk Assessment'],
    },
    {
      icon: Factory,
      title: 'Industrial Installations',
      description: 'Complete installation services for pharmaceutical, chemical, and manufacturing facilities.',
      features: ['Equipment Installation', 'Piping Systems', 'Plant Setup', 'Commissioning'],
    },
    {
      icon: Cog,
      title: 'Maintenance & Repair',
      description: 'Ongoing maintenance and repair services to ensure optimal performance of industrial equipment.',
      features: ['Preventive Maintenance', 'Emergency Repairs', 'Equipment Upgrades', '24/7 Support'],
    },
    {
      icon: Ruler,
      title: 'Custom Engineering',
      description: 'Bespoke engineering solutions tailored to specific project requirements and specifications.',
      features: ['Design Consultation', 'Technical Drawing', 'Prototyping', 'Custom Solutions'],
    },
  ];

  const capabilities = [
    { icon: HardHat, title: 'Skilled Workforce', description: '23+ experienced professionals' },
    { icon: Shield, title: 'Safety First', description: 'ISO certified safety protocols' },
    { icon: Zap, title: 'Quick Turnaround', description: 'On-time project delivery' },
    { icon: Factory, title: 'Pan-India Operations', description: 'Services across all states' },
  ];

  return (
    <div className="relative" data-testid="services-page">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" data-testid="services-hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1767793357572-7f282da502d3?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-foreground mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
              Comprehensive engineering and fabrication solutions for industrial excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services - Bento Grid */}
      <section className="py-24 bg-background" data-testid="main-services-section">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-4">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              End-to-end engineering solutions with expertise across multiple domains
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border p-8 hover:border-primary transition-all duration-300"
                  data-testid={`service-card-${index}`}
                >
                  <Icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-card" data-testid="capabilities-section">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-4">
              Our <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Built on a foundation of expertise, safety, and reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background border border-border p-6 text-center hover:border-primary transition-all duration-300 group"
                  data-testid={`capability-card-${index}`}
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-foreground mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-secondary text-sm">{capability.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-background" data-testid="industries-section">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Trusted by leading companies across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Pharmaceutical',
              'Chemical',
              'Manufacturing',
              'Construction',
              'Infrastructure',
              'Oil & Gas',
              'Power Plants',
              'Automotive',
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border p-6 text-center hover:border-primary hover:bg-primary/5 transition-all duration-300"
                data-testid={`industry-${index}`}
              >
                <p className="font-heading font-bold uppercase tracking-tight text-foreground text-sm">
                  {industry}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-y border-border" data-testid="services-cta-section">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-6">
              Need a Custom <span className="text-primary">Solution?</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto mb-8">
              Our team is ready to discuss your specific requirements and provide expert consultation.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300"
                data-testid="services-contact-button"
              >
                Request a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


