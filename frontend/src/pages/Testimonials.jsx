import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Building2 } from 'lucide-react';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  

  const sampleTestimonials = [
    {
      testimonial_id: '1',
      client_name: 'Dr. Rajesh Sharma',
      company: 'Eugia Pharma Specialities Limited',
      message: 'VVR Projects delivered exceptional quality on our Unit 3 facility. Their expertise in high-risk fabrication and commitment to safety standards made them the perfect partner for our pharmaceutical manufacturing expansion.',
      rating: 5,
      project: 'Pharmaceutical Facility - Unit 3 EOU',
    },
    {
      testimonial_id: '2',
      client_name: 'Amit Patel',
      company: 'ABC Manufacturing Ltd',
      message: 'Outstanding work on our steel structure project. The team was professional, punctual, and delivered beyond expectations. Their technical expertise in complex fabrication is truly impressive.',
      rating: 5,
      project: 'Industrial Steel Structure',
    },
    {
      testimonial_id: '3',
      client_name: 'Sunita Reddy',
      company: 'XYZ Construction',
      message: 'We needed a specialist for high-rise fabrication works, and VVR Projects exceeded all our requirements. Their safety protocols and skilled workforce made the project a complete success.',
      rating: 5,
      project: 'High-Rise Fabrication Works',
    },
    {
      testimonial_id: '4',
      client_name: 'Vikram Singh',
      company: 'Chemical Industries Corp',
      message: 'Impressive precision and attention to detail in our chemical plant installation. VVR Projects handled complex piping systems with expertise and professionalism throughout the project.',
      rating: 5,
      project: 'Chemical Plant Installation',
    },
    {
      testimonial_id: '5',
      client_name: 'Priya Nair',
      company: 'Auto Parts Limited',
      message: 'Excellent workshop services for our automotive components. The precision machining and custom fabrication quality was top-notch. Highly recommend for any precision engineering needs.',
      rating: 5,
      project: 'Precision Workshop Services',
    },
    {
      testimonial_id: '6',
      client_name: 'Arun Kumar',
      company: 'Infrastructure Development Authority',
      message: 'Large-scale project completed on time and within budget. VVR Projects demonstrated exceptional project management and technical capabilities throughout the infrastructure development.',
      rating: 5,
      project: 'Infrastructure Steel Works',
    },
  ];

  useEffect(() => {
  setTestimonials(sampleTestimonials);
  setLoading(false);
}, []);

  const displayTestimonials = testimonials.length > 0 ? testimonials : sampleTestimonials;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'fill-primary text-primary' : 'text-border'}
      />
    ));
  };

  return (
    <div className="relative" data-testid="testimonials-page">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" data-testid="testimonials-hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-foreground mb-6">
              Client <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
              Trusted by leading companies across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-b border-border" data-testid="testimonials-stats-section">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="font-heading font-black text-4xl lg:text-5xl text-primary mb-2">50+</div>
              <div className="font-technical text-xs uppercase tracking-wider text-secondary">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="font-heading font-black text-4xl lg:text-5xl text-primary mb-2">100+</div>
              <div className="font-technical text-xs uppercase tracking-wider text-secondary">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="font-heading font-black text-4xl lg:text-5xl text-primary mb-2">98%</div>
              <div className="font-technical text-xs uppercase tracking-wider text-secondary">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="font-heading font-black text-4xl lg:text-5xl text-primary mb-2">100%</div>
              <div className="font-technical text-xs uppercase tracking-wider text-secondary">On-Time Delivery</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background" data-testid="testimonials-grid-section">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-4">
              What Our Clients <span className="text-primary">Say</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Real feedback from companies we've partnered with
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent animate-spin" />
              <p className="text-secondary mt-4">Loading testimonials...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.testimonial_id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border p-8 hover:border-primary transition-all duration-300 relative"
                  data-testid={`testimonial-card-${index}`}
                >
                  {/* Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Message */}
                  <p className="text-secondary text-sm leading-relaxed mb-6 relative z-10">
                    "{testimonial.message}"
                  </p>

                  {/* Client Info */}
                  <div className="border-t border-border pt-4">
                    <h4 className="font-heading font-bold uppercase text-foreground mb-1">
                      {testimonial.client_name}
                    </h4>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-2">
                      <Building2 size={12} className="text-primary" />
                      <span className="font-technical uppercase">{testimonial.company}</span>
                    </div>
                    <p className="text-xs text-primary font-technical uppercase tracking-wider">
                      {testimonial.project}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-card border-t border-border" data-testid="trust-indicators-section">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-12">
              Why Clients <span className="text-primary">Trust Us</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-background border border-border p-8">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-foreground mb-3">
                  Quality Assured
                </h3>
                <p className="text-secondary text-sm">
                  ISO certified processes and stringent quality control at every stage
                </p>
              </div>

              <div className="bg-background border border-border p-8">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-foreground mb-3">
                  Industry Expertise
                </h3>
                <p className="text-secondary text-sm">
                  15+ years serving pharmaceutical, chemical, and manufacturing sectors
                </p>
              </div>

              <div className="bg-background border border-border p-8">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-foreground mb-3">
                  Safety First
                </h3>
                <p className="text-secondary text-sm">
                  100% safety compliance with certified high-risk work protocols
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background" data-testid="testimonials-cta-section">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-6">
              Become Our Next <span className="text-primary">Success Story</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto mb-8">
              Join our growing list of satisfied clients and experience engineering excellence
            </p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300"
                data-testid="testimonials-contact-button"
              >
                Start Your Project
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


