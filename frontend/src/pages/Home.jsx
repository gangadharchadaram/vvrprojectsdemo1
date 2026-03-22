import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Wrench, Shield, Users, Award } from 'lucide-react';


export const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const staticProjects = [
      {
        project_id: 1,
        title: "Luxury Villa Construction",
        description: "Premium residential villa",
        image_url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        category: "Residential",
        client: "Ramesh",
        location: "Hyderabad"
      },
      {
        project_id: 2,
        title: "Commercial Complex",
        description: "Modern commercial building",
        image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        category: "Commercial",
        client: "ABC Group",
        location: "Vizag"
      },
      {
        project_id: 3,
        title: "Interior Design",
        description: "Premium interiors",
        image_url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        category: "Interior",
        client: "Sneha",
        location: "Bangalore"
      }
    ];

    setProjects(staticProjects);
  }, []);

  const services = [
    {
      icon: Wrench,
      title: 'Engineering Workshop',
      description: 'Complete workshop solutions with state-of-the-art equipment and skilled workforce.',
    },
    {
      icon: Shield,
      title: 'High-Risk Fabrication',
      description: 'Specialized fabrication works above 9 meters with certified safety protocols.',
    },
    {
      icon: Users,
      title: 'Expert Workforce',
      description: 'Skilled, semi-skilled, and specialized teams for complex industrial projects.',
    },
  ];

  const stats = [
    { value: '23+', label: 'Team Members' },
    { value: '100+', label: 'Projects Completed' },
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Happy Clients' },
  ];

  return (
    <div className="relative" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay" data-testid="hero-section">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url('https://images.unsplash.com/photo-1759847552281-60e45956124d?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-6 py-2 border border-primary/30 bg-primary/5">
              <span className="font-technical text-xs uppercase tracking-widest text-primary">GST Registered • ISO Certified</span>
            </div>
            
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-8xl uppercase tracking-tight text-foreground mb-6">
              ENGINEERING
              <br />
              <span className="text-primary">EXCELLENCE</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Premier fabrication and engineering workshop services across India. Specializing in high-risk structural works above 9 meters with certified safety protocols.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-black px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300 flex items-center space-x-2"
                  data-testid="cta-get-quote-button"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:border-primary hover:text-primary transition-colors duration-300"
                  data-testid="cta-view-projects-button"
                >
                  View Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-16 border-y border-border" data-testid="stats-section">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-heading font-black text-4xl lg:text-5xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-technical text-xs uppercase tracking-wider text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background" data-testid="services-section">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-foreground mb-4">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Comprehensive engineering and fabrication solutions for industrial projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
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
                  <Icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300 inline-flex items-center space-x-2"
                data-testid="view-all-services-button"
              >
                <span>View All Services</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {projects.length > 0 && (
        <section className="py-24 bg-card" data-testid="featured-projects-section">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-foreground mb-4">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                Showcasing our expertise in complex engineering solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.project_id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-background border border-border overflow-hidden hover:border-primary transition-all duration-300"
                  data-testid={`project-card-${index}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="font-technical text-xs uppercase tracking-wider text-primary mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary text-sm mb-4">{project.description}</p>
                    <div className="text-xs text-muted-foreground">
                      <span className="font-technical uppercase">{project.client}</span> • {project.location}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:border-primary hover:text-primary transition-colors duration-300 inline-flex items-center space-x-2"
                  data-testid="view-all-projects-button"
                >
                  <span>View All Projects</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-24 bg-background" data-testid="why-choose-section">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-6">
                Why Choose <span className="text-primary">VVR Projects</span>
              </h2>
              <p className="text-secondary text-lg mb-8 leading-relaxed">
                As a GST-registered and ISO-certified engineering firm, we deliver unmatched quality and safety in every project.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Certified for high-risk works above 9 meters',
                  'Expert workforce: Skilled, semi-skilled teams',
                  'Pan-India operations with proven track record',
                  'State-of-the-art fabrication equipment',
                  'Stringent safety protocols and compliance',
                  'On-time delivery with quality assurance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-black px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300 inline-flex items-center space-x-2"
                    data-testid="learn-more-button"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={20} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1764245546004-e6b743242a80?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Welding and fabrication"
                className="w-full h-[500px] object-cover border border-border"
              />
              <div className="absolute top-8 left-8 bg-primary px-6 py-4">
                <div className="font-heading font-black text-3xl text-black">15+</div>
                <div className="font-technical text-xs uppercase text-black">Years in Business</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-y border-border" data-testid="cta-section">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-6">
              Ready to Start Your <span className="text-primary">Project?</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto mb-8">
              Get in touch with our team for a detailed consultation and competitive quote.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300 inline-flex items-center space-x-2"
                data-testid="cta-contact-button"
              >
                <span>Contact Us Today</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


