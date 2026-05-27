import { Cpu, Terminal, ArrowUp, Download } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-zinc-800/40 bg-obsidian-950/40 py-12 backdrop-blur-md relative z-10 text-left">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
        
        {/* Row 1: Brand & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Brand Left */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5 font-mono text-zinc-200 font-bold tracking-tight">
              <span className="w-6.5 h-6.5 text-[11px] rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                MV
              </span>
              <span className="text-xs uppercase tracking-[0.15em] font-semibold text-zinc-300">
                Madhurima Vispute
              </span>
            </div>
            
            <p className="text-xs text-zinc-400 font-light max-w-sm leading-relaxed">
              A software developer who enjoys building reliable web applications, focusing on modular architecture, clean code, and intuitive user experiences.
            </p>

            <div className="text-[10px] text-zinc-500 font-mono">
              © {new Date().getFullYear()} Madhurima Vispute. All rights reserved.
            </div>
          </div>

          {/* Quick Nav Links Middle */}
          <div className="lg:col-span-3 flex flex-col items-start gap-3">
            <div className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1">
              Resources & Assets
            </div>
            
            <a 
              href="/resume.pdf" 
              download="Madhurima_Vispute_Resume.pdf"
              className="text-xs text-zinc-400 hover:text-emerald-400 flex items-center gap-1.5 transition-colors font-medium"
              title="Download direct PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume PDF</span>
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors font-medium"
              title="Open PDF in new tab"
            >
              Preview Resume PDF (New Tab)
            </a>

            <a 
              href="https://github.com/madhurima-vispute"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors font-medium"
            >
              GitHub Codebase
            </a>

            <a 
              href="https://www.linkedin.com/in/madhurima-v-a86286226?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-emerald-400 transition-colors font-medium"
            >
              LinkedIn Network
            </a>
          </div>

          {/* Details Panel Right */}
          <div className="lg:col-span-4 bg-obsidian-900/30 border border-zinc-900 rounded-xl p-4 flex flex-col gap-3 font-mono text-[10px] text-zinc-500 w-full">
            <div className="flex items-center justify-between border-b border-zinc-800/40 pb-2 mb-1">
              <span className="font-bold text-zinc-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Developer Snapshot</span>
              </span>
              <span className="text-emerald-500/80 font-bold bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/10">
                ACTIVE
              </span>
            </div>

            <div className="flex justify-between">
              <span>Focus:</span>
              <span className="text-zinc-400 font-semibold">Application Flow & UX</span>
            </div>

            <div className="flex justify-between">
              <span>Stack Interest:</span>
              <span className="text-zinc-400 font-semibold">React, Node.js, TypeScript</span>
            </div>

            <div className="flex justify-between">
              <span>Focus Area:</span>
              <span className="text-zinc-400 font-semibold">Scalable Web Architecture</span>
            </div>

            <div className="flex justify-between">
              <span>Approach:</span>
              <span className="text-zinc-400 font-semibold">Product-minded & User-first</span>
            </div>

            <div className="flex justify-between">
              <span>Availability:</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Opportunities</span>
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Scroll to Top bar */}
        <div className="pt-6 border-t border-zinc-800/40 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-emerald-500/50" />
            <span>Built with React and Tailwind CSS.</span>
          </div>

          <button
            onClick={handleScrollTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-emerald-400 transition-colors uppercase tracking-widest text-[9px] font-bold"
            title="Scroll to Top of Page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
