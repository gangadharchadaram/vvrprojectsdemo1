import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setSubmitting(true);
  setError('');

  setTimeout(() => {
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
    setSubmitting(false);
  }, 1000);
};

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['9889887789'],
      link: 'tel:9889887789',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['vvr.enterprises928@gmail.com'],
      link: 'mailto:vvr.enterprises928@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '7-1-276/37/A, Plot No. 37,',
        'Suprabath Nagar, BK Guda,',
        'Sanjeeva Reddy Nagar,',
        'Hyderabad, Telangana - 500038',
      ],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
    },
  ];

  return (
    <div className="relative" data-testid="contact-page">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" data-testid="contact-hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1759847552281-60e45956124d?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-foreground mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
              Let's discuss your project and bring your engineering vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-card" data-testid="contact-info-section">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background border border-border p-6 hover:border-primary transition-all duration-300 group"
                  data-testid={`contact-info-${index}`}
                >
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-secondary text-sm">
                        {info.link && idx === 0 ? (
                          <a href={info.link} className="hover:text-primary transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-background" data-testid="contact-form-section">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-6">
                Send Us a <span className="text-primary">Message</span>
              </h2>
              <p className="text-secondary mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="bg-primary/10 border border-primary p-4 mb-6 flex items-center space-x-3" data-testid="success-message">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-primary text-sm font-heading uppercase tracking-wide">
                    Message sent successfully! We'll contact you soon.
                  </p>
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500 p-4 mb-6" data-testid="error-message">
                  <p className="text-red-500 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block font-heading text-sm uppercase tracking-wider text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-card border border-border text-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your full name"
                    data-testid="contact-form-name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block font-heading text-sm uppercase tracking-wider text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-card border border-border text-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                      data-testid="contact-form-email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-heading text-sm uppercase tracking-wider text-foreground mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-card border border-border text-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your phone number"
                      data-testid="contact-form-phone"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block font-heading text-sm uppercase tracking-wider text-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-card border border-border text-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your company name (optional)"
                    data-testid="contact-form-company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-heading text-sm uppercase tracking-wider text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-card border border-border text-foreground px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                    data-testid="contact-form-message"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                  className={`w-full bg-primary text-black px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300 flex items-center justify-center space-x-2 ${
                    submitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  data-testid="contact-form-submit"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map & Business Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-card border border-border overflow-hidden h-[400px]" data-testid="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.44!3d17.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzQ4LjAiTiA3OMKwMjYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="VVR Projects Location"
                />
              </div>

              {/* Business Details */}
              <div className="bg-card border border-border p-8">
                <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-foreground mb-6">
                  Business <span className="text-primary">Details</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-technical uppercase tracking-wider text-muted-foreground mb-1">GST Number</p>
                    <p className="text-foreground font-technical">36CHAPD3904K1ZL</p>
                  </div>
                  <div>
                    <p className="text-xs font-technical uppercase tracking-wider text-muted-foreground mb-1">Registration Date</p>
                    <p className="text-foreground">March 13, 2025</p>
                  </div>
                  <div>
                    <p className="text-xs font-technical uppercase tracking-wider text-muted-foreground mb-1">Constitution</p>
                    <p className="text-foreground">Proprietorship</p>
                  </div>
                  <div>
                    <p className="text-xs font-technical uppercase tracking-wider text-muted-foreground mb-1">Proprietor</p>
                    <p className="text-foreground">Dasuri Abhilash Yadav</p>
                  </div>
                  <div>
                    <p className="text-xs font-technical uppercase tracking-wider text-muted-foreground mb-1">Operational Area</p>
                    <p className="text-foreground">Pan-India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};


