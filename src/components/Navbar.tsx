import { useState, useEffect } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check if user scrolled past a threshold
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'tradeoffs', label: 'Notes' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-obsidian-950/80 border-b border-zinc-800/40 backdrop-blur-md py-4' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      {/* Scroll Progress Indicator Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <button 
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 font-mono text-zinc-100 font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-sm">
            MV
          </span>
          <span className="hidden sm:inline-block text-sm tracking-[0.1em] font-sans font-semibold uppercase text-zinc-200">
            Madhurima Vispute
          </span>
        </button>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative py-1 text-[10px] uppercase tracking-widest font-medium transition-colors"
            >
              <span className={`transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-zinc-100 font-semibold' 
                  : 'text-zinc-400 hover:text-zinc-100'
              }`}>
                {item.label}
              </span>
              <span className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-emerald-500 rounded transition-all duration-300 transform origin-left ${
                activeSection === item.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`} />
            </button>
          ))}
        </nav>

        {/* Desktop Secondary Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-obsidian-900/50 hover:bg-obsidian-800 text-xs text-zinc-400 hover:text-zinc-200 font-medium transition-all"
            title="Open Resume PDF in New Tab"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Preview</span>
          </a>
          
          <a
            href="/resume.pdf"
            download="Madhurima_Vispute_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-xs text-emerald-400 font-semibold tracking-wide transition-all"
            title="Download PDF directly to device"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1 md:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 right-0 border-b border-zinc-800 bg-obsidian-950/95 backdrop-blur-lg animate-fade-in">
          <div className="px-6 py-8 flex flex-col gap-6">
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm uppercase tracking-widest font-medium py-1 transition-colors ${
                    activeSection === item.id ? 'text-emerald-400' : 'text-zinc-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="h-[1px] bg-zinc-800/60 my-2" />

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-lg border border-zinc-800 bg-obsidian-900 text-sm text-zinc-300 font-medium"
              >
                <FileText className="w-4 h-4" />
                <span>Preview Resume PDF</span>
              </a>

              <a
                href="/resume.pdf"
                download="Madhurima_Vispute_Resume.pdf"
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
