import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

export const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/services', label: 'SERVICES' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/team', label: 'TEAM' },
    { path: '/testimonials', label: 'TESTIMONIALS' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border" data-testid="main-navigation">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3" data-testid="logo-link">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="text-black font-heading font-black text-2xl">V</span>
              </div>
              <div>
                <div className="text-foreground font-heading font-bold text-xl tracking-tight">VVR PROJECTS</div>
                <div className="text-secondary text-xs font-technical uppercase tracking-wider">Engineering Excellence</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 font-heading text-sm tracking-wide transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-secondary hover:text-primary'
                  }`}
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-foreground p-2"
              data-testid="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
              data-testid="mobile-menu"
            >
              <div className="container mx-auto px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 font-heading text-sm tracking-wide transition-colors duration-300 ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/10 border-l-4 border-primary'
                        : 'text-secondary hover:text-primary hover:bg-muted'
                    }`}
                    data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-24" data-testid="main-footer">
        <div className="container mx-auto px-6 lg:px-20 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary flex items-center justify-center">
                  <span className="text-black font-heading font-black text-xl">V</span>
                </div>
                <div className="text-foreground font-heading font-bold text-lg">VVR PROJECTS</div>
              </div>
              <p className="text-secondary text-sm leading-relaxed">
                Premier engineering workshop and fabrication services across India, specializing in high-risk works above 9 meters.
              </p>
              <div className="font-technical text-xs text-secondary uppercase tracking-wider">
                GST: 36CHAPD3904K1ZL
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-heading font-bold text-sm uppercase tracking-wide mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-secondary hover:text-primary text-sm transition-colors" data-testid="footer-link-about">About Us</Link></li>
                <li><Link to="/services" className="text-secondary hover:text-primary text-sm transition-colors" data-testid="footer-link-services">Services</Link></li>
                <li><Link to="/projects" className="text-secondary hover:text-primary text-sm transition-colors" data-testid="footer-link-projects">Projects</Link></li>
                <li><Link to="/contact" className="text-secondary hover:text-primary text-sm transition-colors" data-testid="footer-link-contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-foreground font-heading font-bold text-sm uppercase tracking-wide mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm text-secondary">
                <li>Engineering Workshop</li>
                <li>Fabrication Works</li>
                <li>High-Risk Operations</li>
                <li>Structural Engineering</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-foreground font-heading font-bold text-sm uppercase tracking-wide mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2 text-sm text-secondary">
                  <Phone size={16} className="mt-1 text-primary flex-shrink-0" />
                  <span>9889887789</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-secondary">
                  <Mail size={16} className="mt-1 text-primary flex-shrink-0" />
                  <span>vvr.enterprises928@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary text-sm">
              © {new Date().getFullYear()} VVR Projects. All rights reserved.
            </p>
            <p className="text-secondary text-sm">
              Proprietor: Dasuri Abhilash Yadav
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};


