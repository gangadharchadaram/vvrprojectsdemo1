import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase } from 'lucide-react';


export const Team = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);


  const sampleTeam = [
    {
      member_id: '1',
      name: 'Dasuri Abhilash Yadav',
      role: 'Proprietor & Chief Engineer',
      category: 'Management',
      experience: '15+ years',
      image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      member_id: '2',
      name: 'Rajesh Kumar',
      role: 'Senior Fabrication Engineer',
      category: 'Skilled',
      experience: '12+ years',
      image_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      member_id: '3',
      name: 'Suresh Reddy',
      role: 'Workshop Supervisor',
      category: 'Skilled',
      experience: '10+ years',
      image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      member_id: '4',
      name: 'Venkat Rao',
      role: 'Welding Specialist',
      category: 'Skilled',
      experience: '8+ years',
      image_url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      member_id: '5',
      name: 'Prakash Singh',
      role: 'Structural Engineer',
      category: 'Skilled',
      experience: '7+ years',
      image_url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      member_id: '6',
      name: 'Mohammed Azhar',
      role: 'Fabrication Technician',
      category: 'Semi-Skilled',
      experience: '5+ years',
      image_url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      member_id: '7',
      name: 'Kiran Kumar',
      role: 'CNC Operator',
      category: 'Semi-Skilled',
      experience: '4+ years',
      image_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      member_id: '8',
      name: 'Ramesh Babu',
      role: 'Assembly Technician',
      category: 'Semi-Skilled',
      experience: '3+ years',
      image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
  ];


useEffect(() => {
  setTeam(sampleTeam);
  setLoading(false);
}, []);

  const displayTeam = team.length > 0 ? team : sampleTeam;
  const categories = ['Management', 'Skilled', 'Semi-Skilled'];

  return (
    <div className="relative" data-testid="team-page">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" data-testid="team-hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1581092160607-ee67fc022bb4?crop=entropy&cs=srgb&fm=jpg&q=85')`,
          }}
        />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-foreground mb-6">
              Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
              Expert professionals driving engineering excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-24 bg-card" data-testid="team-overview-section">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-6">
              Powered by <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              Our team of 23+ skilled professionals brings decades of combined experience in engineering, fabrication, and high-risk industrial works. Each team member is trained in safety protocols and equipped with cutting-edge technical skills.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-background border border-border p-6">
                <div className="font-heading font-black text-4xl text-primary mb-2">23+</div>
                <div className="font-technical text-xs uppercase tracking-wider text-secondary">Team Members</div>
              </div>
              <div className="bg-background border border-border p-6">
                <div className="font-heading font-black text-4xl text-primary mb-2">100+</div>
                <div className="font-technical text-xs uppercase tracking-wider text-secondary">Combined Years</div>
              </div>
              <div className="bg-background border border-border p-6">
                <div className="font-heading font-black text-4xl text-primary mb-2">100%</div>
                <div className="font-technical text-xs uppercase tracking-wider text-secondary">Safety Trained</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members by Category */}
      {categories.map((category, categoryIndex) => {
        const categoryMembers = displayTeam.filter(member => member.category === category);
        if (categoryMembers.length === 0) return null;

        return (
          <section 
            key={category} 
            className={`py-24 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-card'}`}
            data-testid={`team-category-${category.toLowerCase()}`}
          >
            <div className="container mx-auto px-6 lg:px-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-foreground mb-2">
                  {category} <span className="text-primary">Team</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryMembers.map((member, index) => (
                  <motion.div
                    key={member.member_id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-card border border-border overflow-hidden hover:border-primary transition-all duration-300"
                    data-testid={`team-member-${index}`}
                  >
                    {/* Member Image */}
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={member.image_url}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Member Details */}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award size={14} className="text-primary" />
                        <span className="font-technical text-xs uppercase tracking-wider text-primary">
                          {member.category}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg uppercase tracking-tight text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-secondary text-sm mb-3">{member.role}</p>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Briefcase size={12} className="text-primary" />
                        <span>{member.experience}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Join Our Team CTA */}
      <section className="py-24 bg-card border-y border-border" data-testid="join-team-section">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-6">
              Join Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto mb-8">
              We're always looking for skilled professionals who share our commitment to excellence and safety.
            </p>
            <a href="mailto:vvr.enterprises928@gmail.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-black px-8 py-4 font-heading font-bold text-sm uppercase tracking-wide hover:bg-white transition-colors duration-300"
                data-testid="careers-button"
              >
                Explore Careers
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


