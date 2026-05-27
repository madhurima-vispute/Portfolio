import { FileText, Download, ArrowRight, Cpu } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const profileCode = `interface DeveloperProfile {
  name: string;
  role: "Software Developer";
  focus: string[];
  currentStack: string[];
  interests: string[];
}

const madhurima: DeveloperProfile = {
  name: "Madhurima Vispute",
  role: "Software Developer",
  focus: [
    "Web Application Development",
    "Product Engineering",
    "Application Architecture"
  ],
  currentStack: ["React", "TypeScript", "Node.js", "MongoDB"],
  interests: [
    "Building scalable web apps",
    "Improving user experience",
    "Learning modern software architecture"
  ]
};`;

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Subtle Radial Glow Light Pools */}
      <div className="absolute top-[10%] left-[50%] -translate-x-[50%] w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[25%] left-[20%] w-[300px] h-[300px] bg-teal-500/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Value Proposition Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-xs font-semibold text-emerald-400 tracking-wider mb-6 animate-fade-in">
            <Cpu className="w-3.5 h-3.5" />
            <span>SOFTWARE DEVELOPER</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] leading-[1.15] text-zinc-100 mb-6 font-sans">
            Engineering reliable, maintainable web applications with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              clean architecture
            </span>
          </h1>

          {/* Subtitle / Narrative */}
          <p className="text-base md:text-lg text-zinc-350 font-light max-w-xl mb-8 leading-relaxed">
            I am a software developer focused on building modular web applications and structuring clean API integrations. I combine a strong product-engineering mindset with a focus on code readability, runtime performance optimizations, and building reliable systems that scale gracefully.
          </p>

          {/* Primary & Secondary Resume Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Primary Download Button */}
            <a
              href="/resume.pdf"
              download="Madhurima_Vispute_Resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-obsidian-950 font-bold tracking-wide transition-all shadow-[0_4px_20px_-5px_rgba(16,185,129,0.3)] hover:scale-[1.01]"
              title="Download Resume PDF directly"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {/* Secondary Preview Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-obsidian-900/60 hover:bg-obsidian-800 text-zinc-300 hover:text-zinc-100 font-medium transition-all"
              title="Open Resume PDF in New Tab"
            >
              <FileText className="w-4 h-4" />
              <span>Preview PDF</span>
            </a>

            {/* Talk Anchor Button */}
            <button
              onClick={onContactClick}
              className="flex items-center justify-center gap-1.5 px-4 py-3 text-sm text-zinc-300 hover:text-emerald-400 font-semibold group transition-all"
            >
              <span>Connect</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: IDE-style Component Spec Canvas */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="w-full max-w-[450px] bg-obsidian-900/40 border border-zinc-800/60 rounded-xl overflow-hidden shadow-2xl relative">
            {/* Header / Static Tab */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-obsidian-950/80 border-b border-zinc-800/45">
              <div className="flex items-center gap-1">
                <span className="px-1.5 py-1.5 text-[10px] font-mono tracking-wider text-red-400 select-none">
                  profile.ts
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-500/85 font-bold bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 select-none">
                TypeScript
              </span>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-[11px] leading-[1.6] text-zinc-400 overflow-x-auto max-h-[380px] select-none text-left">
              <pre className="whitespace-pre">
                {profileCode.split('\n').map((line, i) => {
                  let styledLine = line
                    .replace(/(interface|const|string|focus|interests|export|function|return|import|as|from|typeof|parseFloat)/g, '<span class="text-emerald-400">$1</span>')
                    .replace(/(DeveloperProfile|madhurima|createSelector|selectMemoizedCoordinates|getVisibleRows)/g, '<span class="text-teal-300">$1</span>')
                    .replace(/("Software Developer"|"Madhurima Vispute"|"React"|"TypeScript"|"Node.js"|"MongoDB"|"Building scalable web apps"|"Improving user experience"|"Learning modern software architecture"|"Frontend Development"|"Responsive UI"|"Full-Stack Applications")/g, '<span class="text-zinc-300">$1</span>')
                    .replace(/(\/\/.*)/g, '<span class="text-zinc-600 italic">$1</span>');

                  return (
                    <div key={i} className="flex gap-4">
                      <span className="text-zinc-700 text-right w-4 select-none">{i + 1}</span>
                      <code dangerouslySetInnerHTML={{ __html: styledLine }} />
                    </div>
                  );
                })}
              </pre>
            </div>

            {/* Visual Blueprint Grid Footer */}
            <div className="px-4 py-2.5 bg-obsidian-950/60 border-t border-zinc-800/40 flex items-center justify-between text-[10px] font-mono text-zinc-500 select-none">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                <span>UTF-8</span>
              </span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
