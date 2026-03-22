import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Users, MapPin, FileCheck, Shield } from 'lucide-react';

export const About = () => {
  const achievements = [
    { icon: Award, title: 'GST Registered', description: 'GSTIN: 36CHAPD3904K1ZL' },
    { icon: FileCheck, title: 'ISO Certified', description: 'Quality Management System' },
    { icon: Shield, title: 'Safety Certified', description: 'High-Risk Work Approved' },
    { icon: Users, title: '23+ Team Members', description: 'Skilled & Semi-Skilled' },
  ];

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started with a vision for engineering excellence' },
    { year: '2015', title: 'High-Risk Certification', description: 'Certified for fabrication works above 9 meters' },
    { year: '2020', title: 'Pan-India Operations', description: 'Expanded services across India' },
    { year: '2025', title: 'GST Registration', description: 'Officially registered on March 13, 2025' },
  ];

  return (
    <div className="relative" data-testid="about-page">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" data-testid="about-hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1759367902849-87e82720c313?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-foreground mb-6">
              About <span className="text-primary">VVR Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
              Building India's industrial infrastructure with precision, safety, and excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background" data-testid="company-overview-section">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-secondary text-lg mb-6 leading-relaxed">
                VVR Projects is a premier engineering workshop and fabrication company operating across India. Established as a proprietorship under the leadership of <strong className="text-foreground">Dasuri Abhilash Yadav</strong>, we specialize in high-risk structural engineering and fabrication works.
              </p>
              <p className="text-secondary text-lg mb-6 leading-relaxed">
                Our expertise lies in complex projects that require precision, safety, and technical excellence, particularly for works above 9 meters in height. With a skilled workforce and state-of-the-art equipment, we deliver solutions that meet the highest industry standards.
              </p>
              <p className="text-secondary text-lg leading-relaxed">
                From pharmaceutical facilities to industrial plants, we've successfully completed projects across diverse sectors, earning trust through quality delivery and uncompromising safety standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1562568068-7a90cf9e499d?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Engineering tools"
                className="w-full h-[500px] object-cover border border-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-card" data-testid="achievements-section">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-4">
              Our <span className="text-primary">Credentials</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Certified and recognized for excellence in engineering and fabrication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background border border-border p-8 text-center hover:border-primary transition-all duration-300 group"
                  data-testid={`achievement-card-${index}`}
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-secondary text-sm">{achievement.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proprietor Section */}
      <section className="py-24 bg-background" data-testid="proprietor-section">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 lg:p-12"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-foreground">
                    Dasuri Abhilash Yadav
                  </h3>
                  <p className="text-primary font-technical text-sm uppercase tracking-wider">Proprietor</p>
                </div>
              </div>
              
              <p className="text-secondary text-lg mb-6 leading-relaxed">
                Leading VVR Projects with a vision for engineering excellence and industrial innovation. With extensive experience in high-risk fabrication and structural engineering, Mr. Yadav has built a reputation for delivering complex projects with precision and safety.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-technical uppercase tracking-wider text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground text-sm">Telangana, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-technical uppercase tracking-wider text-muted-foreground mb-1">GST Number</p>
                      <p className="text-foreground text-sm font-technical">36CHAPD3904K1ZL</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-technical uppercase tracking-wider text-muted-foreground mb-1">Workforce</p>
                      <p className="text-foreground text-sm">23+ Skilled Professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-technical uppercase tracking-wider text-muted-foreground mb-1">Constitution</p>
                      <p className="text-foreground text-sm">Proprietorship</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card" data-testid="timeline-section">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Milestones that define our growth and commitment to excellence
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-6 group"
                  data-testid={`milestone-${index}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-heading font-black text-2xl text-black">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-background border border-border p-6 hover:border-primary transition-colors duration-300">
                    <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-secondary">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Details */}
      <section className="py-24 bg-background" data-testid="business-details-section">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto bg-card border border-border p-8 lg:p-12">
            <h2 className="font-heading font-black text-3xl uppercase tracking-tight text-foreground mb-8 text-center">
              Business <span className="text-primary">Information</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm font-technical uppercase tracking-wider text-muted-foreground mb-2">Trade Name</p>
                <p className="text-foreground text-lg font-heading font-bold">VVR PROJECTS</p>
              </div>
              <div>
                <p className="text-sm font-technical uppercase tracking-wider text-muted-foreground mb-2">Constitution</p>
                <p className="text-foreground text-lg">Proprietorship</p>
              </div>
              <div>
                <p className="text-sm font-technical uppercase tracking-wider text-muted-foreground mb-2">GST Registration</p>
                <p className="text-foreground text-lg font-technical">36CHAPD3904K1ZL</p>
                <p className="text-sm text-secondary mt-1">Registered: March 13, 2025</p>
              </div>
              <div>
                <p className="text-sm font-technical uppercase tracking-wider text-muted-foreground mb-2">Registration Type</p>
                <p className="text-foreground text-lg">Regular</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-technical uppercase tracking-wider text-muted-foreground mb-2">Principal Place of Business</p>
                <p className="text-foreground text-lg leading-relaxed">
                  7-1-276/37/A, Plot No. 37, Suprabath Nagar, BK Guda,<br />
                  Sanjeeva Reddy Nagar, Hyderabad, Telangana, 500038
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-technical uppercase tracking-wider text-muted-foreground mb-2">Industry Classification</p>
                <p className="text-foreground text-lg">
                  Engineering Workshop & Fabrication Works<br />
                  <span className="text-primary text-sm">Specialized in heights above 9 meters</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


