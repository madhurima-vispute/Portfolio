import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Tradeoffs from './components/Tradeoffs';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Configure the observer with margins to highlight precisely as the section enters the recruiter's viewport focus
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    });

    const sections = ['hero', 'projects', 'tradeoffs', 'skills', 'experience', 'education', 'contact'];
    
    // Bind elements
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Performance-conscious Scroll Reveal System
  useEffect(() => {
    const revealCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Unobserve to free up hardware thread resources
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      rootMargin: '0px 0px -40px 0px', // SNappy entry offset for clear visual transitions while scrolling
      threshold: 0.01 // Lower threshold ensures sections activate instantly on top edge entry
    });

    // Guard timeout ensures dynamic components have stabilized layouts before element query execution
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(el => revealObserver.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(el => revealObserver.unobserve(el));
    };
  }, []);

  const handleContactScroll = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const offset = 80; // Match sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 flex flex-col justify-between select-none sm:select-text selection:bg-emerald-500/20 selection:text-emerald-400">
      
      {/* Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero onContactClick={handleContactScroll} />
        
        {/* Highlights Section */}
        <div className="scroll-reveal">
          <Dashboard />
        </div>
        
        {/* Projects Section */}
        <div className="scroll-reveal">
          <Projects />
        </div>
        
        {/* Technical Tradeoffs Section */}
        <div className="scroll-reveal">
          <Tradeoffs />
        </div>
        
        {/* Skills Section */}
        <div className="scroll-reveal">
          <Skills />
        </div>
        
        {/* Experience Section */}
        <div className="scroll-reveal">
          <Experience />
        </div>
        
        {/* Education Section */}
        <div className="scroll-reveal">
          <Education />
        </div>
        
        {/* Contact Section */}
        <div className="scroll-reveal">
          <Contact />
        </div>
        
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
