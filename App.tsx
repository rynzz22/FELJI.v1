import React, { useEffect } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { Mission } from './components/Sections/Mission';
import { Projects } from './components/Sections/Projects';
import { About } from './components/Sections/About';
import { Footer } from './components/Layout/Footer';
import { CustomCursor } from './components/UI/CustomCursor';
import { TechBackground } from './components/UI/TechBackground';

function App() {
  
  useEffect(() => {
    // Simple intersection observer for scroll reveal effects
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <CustomCursor />
      <TechBackground />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;