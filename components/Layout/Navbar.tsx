import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3 select-none">
          <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-500 group-hover:rotate-180">
             <svg viewBox="0 0 60 60" fill="none" className="w-full h-full overflow-visible">
                <circle cx="30" cy="30" r="28" stroke="#1B2538" strokeWidth="2" className="opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <path d="M24 16 L24 44" stroke="#1B2538" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M36 16 L36 44" stroke="#1B2538" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M16 30 L44 30" stroke="#1B2538" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="48" cy="12" r="4" fill="#84cc16" className="animate-pulse" />
             </svg>
          </div>
          
          <span className="text-xl font-bold tracking-tight text-brand-navy">
            FELJI<span className="text-brand-green">.</span>
          </span>
        </a>

        {/* Desktop Nav - Clean & Minimal */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2.5 text-sm font-medium text-zinc-600 hover:text-brand-navy transition-colors rounded-full hover:bg-white/50 hover:backdrop-blur-sm"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="group relative ml-4 px-6 py-2.5 text-sm font-semibold text-white bg-brand-navy overflow-hidden rounded-full shadow-lg shadow-brand-navy/10 hover:shadow-brand-green/20 transition-all hover:-translate-y-0.5">
             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
             <span className="relative">Get in Touch</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-navy p-2 hover:bg-zinc-100 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-zinc-100 md:hidden flex flex-col items-center py-8 space-y-6 shadow-xl rounded-b-3xl animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-zinc-800 hover:text-brand-green transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};