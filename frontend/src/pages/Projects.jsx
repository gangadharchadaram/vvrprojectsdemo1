import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2, ChevronRight } from 'lucide-react';


export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');



  const sampleProjects = [
    {
      project_id: '1',
      title: 'Eugia Pharma Specialities Unit 3',
      description: 'Complete fabrication and installation services for pharmaceutical manufacturing facility including structural works above 9m.',
      client: 'Eugia Pharma Specialities Limited',
      location: 'Pashamylaram, Medak District, Telangana',
      category: 'Pharmaceutical',
      completed_date: '2024',
      image_url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      project_id: '2',
      title: 'Industrial Steel Structure',
      description: 'Heavy-duty steel structure fabrication and erection for manufacturing plant expansion.',
      client: 'ABC Manufacturing Ltd',
      location: 'Hyderabad, Telangana',
      category: 'Manufacturing',
      completed_date: '2023',
      image_url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      project_id: '3',
      title: 'High-Rise Fabrication Works',
      description: 'Specialized high-risk fabrication works at heights exceeding 15 meters with complete safety compliance.',
      client: 'XYZ Construction',
      location: 'Bangalore, Karnataka',
      category: 'Construction',
      completed_date: '2024',
      image_url: 'https://images.unsplash.com/photo-1759367902849-87e82720c313?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      project_id: '4',
      title: 'Chemical Plant Installation',
      description: 'Complete installation of process equipment and piping systems for chemical manufacturing facility.',
      client: 'Chemical Industries Corp',
      location: 'Mumbai, Maharashtra',
      category: 'Chemical',
      completed_date: '2023',
      image_url: 'https://images.unsplash.com/photo-1581092160607-ee67fc022bb4?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      project_id: '5',
      title: 'Precision Workshop Services',
      description: 'Custom fabrication and precision machining for automotive component manufacturing.',
      client: 'Auto Parts Limited',
      location: 'Chennai, Tamil Nadu',
      category: 'Automotive',
      completed_date: '2024',
      image_url: 'https://images.unsplash.com/photo-1562568068-7a90cf9e499d?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
    {
      project_id: '6',
      title: 'Infrastructure Steel Works',
      description: 'Large-scale structural steel fabrication for infrastructure development project.',
      client: 'Infrastructure Development Authority',
      location: 'Delhi NCR',
      category: 'Infrastructure',
      completed_date: '2023',
      image_url: 'https://images.unsplash.com/photo-1764245546004-e6b743242a80?crop=entropy&cs=srgb&fm=jpg&q=85',
    },
  ];

  useEffect(() => {
  setProjects(sampleProjects);
  setLoading(false);
}, []);

  const categories = ['All', ...new Set([...projects, ...sampleProjects].map(p => p.category))];
  const displayProjects = projects.length > 0 ? projects : sampleProjects;
  const filteredProjects = filter === 'All' 
    ? displayProjects 
    : displayProjects.filter(p => p.category === filter);

  return (
    <div className="relative" data-testid="projects-page">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" data-testid="projects-hero-section">
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
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
              A showcase of engineering excellence across diverse industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-card border-b border-border" data-testid="filter-section">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 font-heading text-sm uppercase tracking-wide transition-all duration-300 ${
                  filter === category
                    ? 'bg-primary text-black'
                    : 'bg-background border border-border text-secondary hover:border-primary hover:text-primary'
                }`}
                data-testid={`filter-button-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background" data-testid="projects-grid-section">
        <div className="container mx-auto px-6 lg:px-20">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent animate-spin" />
              <p className="text-secondary mt-4">Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-secondary text-lg">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.project_id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border overflow-hidden hover:border-primary transition-all duration-300"
                  data-testid={`project-card-${index}`}
                >
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary px-4 py-1">
                      <span className="font-technical text-xs uppercase tracking-wider text-black font-bold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-secondary text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start space-x-2 text-xs text-muted-foreground">
                        <Building2 size={14} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="font-technical uppercase">{project.client}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-xs text-muted-foreground">
                        <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-xs text-muted-foreground">
                        <Calendar size={14} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>Completed: {project.completed_date}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-primary font-heading text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                      <span>View Details</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-24 bg-card border-t border-border" data-testid="project-stats-section">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase tracking-tight text-foreground mb-6">
              Delivering <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto mb-12">
              Our track record speaks for itself. From pharmaceutical facilities to large-scale infrastructure, we've successfully delivered complex projects across India.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="font-heading font-black text-5xl text-primary mb-2">100+</div>
                <div className="font-technical text-xs uppercase tracking-wider text-secondary">Projects Completed</div>
              </div>
              <div>
                <div className="font-heading font-black text-5xl text-primary mb-2">50+</div>
                <div className="font-technical text-xs uppercase tracking-wider text-secondary">Satisfied Clients</div>
              </div>
              <div>
                <div className="font-heading font-black text-5xl text-primary mb-2">15+</div>
                <div className="font-technical text-xs uppercase tracking-wider text-secondary">Years Experience</div>
              </div>
              <div>
                <div className="font-heading font-black text-5xl text-primary mb-2">100%</div>
                <div className="font-technical text-xs uppercase tracking-wider text-secondary">Safety Compliance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


