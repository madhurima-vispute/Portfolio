import { useState } from 'react';
import { Database, Cpu, Layout, HelpCircle, Code, ShieldCheck, Workflow } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  role: string;
  subtitle: string;
  timeline: string;
  technologies: string[];
  summary: string;
  challenge: string;
  solution: string;
  architecture: string;
  github?: string;
}

export default function Projects() {
  const [activeTabs, setActiveTabs] = useState<Record<string, 'summary' | 'challenge' | 'architecture' | 'flow'>>({
    'ladm': 'summary',
    'tms': 'summary'
  });

  const projects: Project[] = [
    {
      id: 'ladm',
      title: 'Deloitte - LADM',
      role: 'Software Developer',
      subtitle: 'Government Land Acquisition & Decision Management suite for Coal India',
      timeline: 'Dec 2024 - Jun 2025',
      technologies: ['React.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Sass', 'RESTful APIs'],
      summary: 'Engineered core landowner modules and coordinate tracking systems for a large‑scale land management suite used by Coal India. The application helps landowners submit local grievances and track property acquisitions, replacing a highly manual, paper‑driven process.',
      challenge: 'Recruiters and landowners needed to scroll through dense coordinate spreadsheets containing thousands of survey rows. On older administrative computers, this caused severe lag and browser lockups.',
      solution: 'Implemented a list virtualization system that only renders the visible table rows in the viewport. This reduced the DOM node count by over 90% and restored interactive scrolling speeds.',
      architecture: 'Designed a modular local caching layer using Redux to store coordinate matrices. This prevented duplicate queries during tab switches and reduced API loads on server databases.'
    },
    {
      id: 'tms',
      title: 'Transporter Management System',
      role: 'Software Developer - Intern',
      subtitle: 'B2B fleet logistics management application at SundayTech',
      timeline: 'Aug 2024 - Dec 2024',
      technologies: ['React', 'TypeScript', 'Redux', 'React Hook Form', 'Tailwind CSS', 'Agile'],
      summary: 'Built dispatcher workflow panels and scheduling forms for a B2B fleet logistics app. This internal tool allows logistics coordinators to allocate transportation assets, assign drivers, and plan cargo routes in real‑time.',
      challenge: 'Dispatchers entering high‑frequency route scheduling data experienced input lag, where typing was noticeably slower than their actual keystrokes due to parent state re‑renders.',
      solution: 'Migrated form fields to React Hook Form to decouple local keystroke renders from the global page state. This eliminated the typing delay completely, improving dispatchers\' operational speed.',
      architecture: 'Wrote strictly typed component interfaces to map complex driver and vehicle data, standardizing coordinate formats between logistics APIs and dispatcher tables.'
    }
  ];

  const handleTabChange = (projectId: string, tab: 'summary' | 'challenge' | 'architecture' | 'flow') => {
    setActiveTabs(prev => ({
      ...prev,
      [projectId]: tab
    }));
  };

  return (
    <section id="projects" className="py-24 border-t border-zinc-800/20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Typography */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold mb-2">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4 font-sans">
            Featured Projects & Case Studies
          </h2>
          <p className="text-sm text-zinc-300 font-light max-w-xl leading-relaxed">
            Case studies outlining real-world problems, key decisions, and implementation strategies chosen to deliver highly responsive digital platforms.
          </p>
        </div>

        {/* Project Grid */}
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 rounded-2xl bg-obsidian-900/20 border border-zinc-800/40 relative overflow-hidden"
            >
              {/* Subtle visual background grid overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

              {/* Left Column: Metadata & Tech Spec */}
              <div className="lg:col-span-5 flex flex-col justify-between text-left relative z-10">
                <div>
                  {/* Timeline Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">
                      {project.timeline}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      React & MERN Stack
                    </span>
                  </div>

                  {/* Project Titles */}
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-100 font-sans mb-1">
                    {project.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-400/90 font-mono mb-4">
                    {project.role}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed font-light mb-6">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6 lg:mb-0">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="text-[9px] text-zinc-400 bg-obsidian-950 px-2 py-0.5 rounded border border-zinc-850 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Dynamic Engineering Tabs */}
              <div className="lg:col-span-7 flex flex-col justify-between relative z-10 text-left bg-obsidian-950/40 border border-zinc-800/50 rounded-xl p-5 md:p-6 backdrop-blur-md">
                <div>
                  {/* Tabs Nav */}
                  <div className="flex border-b border-zinc-800/60 pb-3 mb-5 gap-3 sm:gap-4 overflow-x-auto scrollbar-none">
                    <button
                      onClick={() => handleTabChange(project.id, 'summary')}
                      className={`text-[10px] font-semibold uppercase tracking-wider pb-1 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                        activeTabs[project.id] === 'summary' 
                          ? 'text-emerald-400 border-b border-emerald-500' 
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <Layout className="w-3.5 h-3.5" />
                      <span>Summary</span>
                    </button>

                    <button
                      onClick={() => handleTabChange(project.id, 'challenge')}
                      className={`text-[10px] font-semibold uppercase tracking-wider pb-1 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                        activeTabs[project.id] === 'challenge' 
                          ? 'text-emerald-400 border-b border-emerald-500' 
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Key Challenges</span>
                    </button>

                    <button
                      onClick={() => handleTabChange(project.id, 'architecture')}
                      className={`text-[10px] font-semibold uppercase tracking-wider pb-1 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                        activeTabs[project.id] === 'architecture' 
                          ? 'text-emerald-400 border-b border-emerald-500' 
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <Database className="w-3.5 h-3.5" />
                      <span>Tech Details</span>
                    </button>

                    <button
                      onClick={() => handleTabChange(project.id, 'flow')}
                      className={`text-[10px] font-semibold uppercase tracking-wider pb-1 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                        activeTabs[project.id] === 'flow' 
                          ? 'text-emerald-400 border-b border-emerald-500' 
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <Workflow className="w-3.5 h-3.5" />
                      <span>System Flow</span>
                    </button>
                  </div>

                  {/* Tab Contents */}
                  <div className="min-h-[160px] flex flex-col justify-center">
                    {activeTabs[project.id] === 'summary' && (
                      <div className="animate-fade-in">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 font-sans flex items-center gap-1.5">
                          <Code className="w-3.5 h-3.5 text-emerald-400/80" />
                          <span>Project Overview</span>
                        </h4>
                        <p className="text-xs text-zinc-300 font-light leading-relaxed">
                          {project.summary}
                        </p>
                      </div>
                    )}

                    {activeTabs[project.id] === 'challenge' && (
                      <div className="animate-fade-in flex flex-col gap-4">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 font-sans flex items-center gap-1.5">
                            <HelpCircle className="w-3.5 h-3.5 text-amber-500/80" />
                            <span>Problem / Challenge</span>
                          </h4>
                          <p className="text-xs text-zinc-300 font-light leading-relaxed">
                            {project.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 font-sans flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400/80" />
                            <span>Solution & Implementation</span>
                          </h4>
                          <p className="text-xs text-zinc-300 font-light leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTabs[project.id] === 'architecture' && (
                      <div className="animate-fade-in">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 font-sans flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5 text-emerald-400/80" />
                          <span>Tech Stack & Key Decisions</span>
                        </h4>
                        <p className="text-xs text-zinc-300 font-light leading-relaxed">
                          {project.architecture}
                        </p>
                      </div>
                    )}

                    {activeTabs[project.id] === 'flow' && project.id === 'ladm' && (
                      <div className="animate-fade-in font-mono text-[9px] text-zinc-500 bg-obsidian-950 p-4 rounded-lg border border-zinc-900/60 leading-relaxed overflow-x-auto select-none w-full">
                        <div className="text-emerald-400 font-bold mb-2">// COORDINATES PROCESSING PIPELINE</div>
                        <div>[Landowner Portal (Grievance Form)]</div>
                        <div className="text-zinc-700">  │ (Client Validation & Input Schema Verification)</div>
                        <div className="text-zinc-300">  ▼</div>
                        <div>[React Hook Form Context] ──(Cache Matrix Sync)──► [Redux Local Caching]</div>
                        <div className="text-zinc-700">  │                                                 │</div>
                        <div className="text-zinc-700">  │ (Accurate spatial payloads)                      │ (Selector Memoization Checks)</div>
                        <div className="text-zinc-300">  ▼                                                 ▼</div>
                        <div>[RESTful API Client Gateway] ────────────────► [Deloitte Secure Database]</div>
                      </div>
                    )}

                    {activeTabs[project.id] === 'flow' && project.id === 'tms' && (
                      <div className="animate-fade-in font-mono text-[9px] text-zinc-500 bg-obsidian-950 p-4 rounded-lg border border-zinc-900/60 leading-relaxed overflow-x-auto select-none w-full">
                        <div className="text-emerald-400 font-bold mb-2">// LOGISTICS ROUTING WORKFLOW ENGINE</div>
                        <div>[Dispatcher Allocation Grid]</div>
                        <div className="text-zinc-700">  │ (Keystroke Event Isolation)</div>
                        <div className="text-zinc-300">  ▼</div>
                        <div>[Isolated Ref Field Hooks] ──(Strict TS Types)──► [React Hook Form Context]</div>
                        <div className="text-zinc-700">  │                                                 │</div>
                        <div className="text-zinc-700">  │ (Dynamic Route payload)                          │ (Driver/Vehicle Allocation Contracts)</div>
                        <div className="text-zinc-300">  ▼                                                 ▼</div>
                        <div>[REST API Router Pipelines] ─────────────────► [SundayTech Enterprise APIs]</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* External Anchors */}
                <div className="mt-6 pt-4 border-t border-zinc-800/40 flex items-center justify-end">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-650" />
                    <span>Enterprise Project</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
