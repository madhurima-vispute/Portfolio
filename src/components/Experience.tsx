import { useState } from 'react';
import { Calendar, MapPin, Briefcase, Zap, Users } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  timeline: string;
  summary: string;
  bulletPoints: string[];
  optimizations: string[];
  collaboration: string[];
  tools: string[];
}

export default function Experience() {
  const [selectedRole, setSelectedRole] = useState<string>('sundaytech-dev');

  const roles: ExperienceItem[] = [
    {
      id: 'sundaytech-dev',
      company: 'SundayTech',
      role: 'Software Developer',
      location: 'Turbhe, MH (In-Office)',
      timeline: 'Dec 2024 - Jun 2025',
      summary: 'Engineered core modules and API systems for modern web applications, focusing on an enterprise land‑management portal for Coal India and internal administration suites.',
      bulletPoints: [
        'Managed dense land‑acquisition boundary coordinates, standardizing survey node maps and rendering geospatial structures.',
        'Architected localized grievance tracking panels that replaced a highly slow, manual paper‑based reporting workflow.',
        'Developed reusable dashboard grids and data layouts using TypeScript, prioritizing strict prop validation and clean routing states.'
      ],
      optimizations: [
        'Implemented viewport list virtualization to render extensive surveyor coordinate rows, removing scroll latency.',
        'Configured memoized Redux slice selectors to cache coordinates locally, preventing redundant HTTP requests.'
      ],
      collaboration: [
        'Partnered closely with backend engineers to align spatial schema payloads and standardize REST API request controls.',
        'Collaborated with design and QA to run browser compatibility audits and maintain accessible focus flows.'
      ],
      tools: ['React.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Sass', 'RESTful APIs', 'Git'],
    },
    {
      id: 'sundaytech-intern',
      company: 'SundayTech',
      role: 'Software Developer - Intern',
      timeline: 'Aug 2024 - Dec 2024',
      location: 'Turbhe, MH (In-Office)',
      summary: 'Developed dispatcher routing panels and scheduling controls for a B2B fleet logistics application.',
      bulletPoints: [
        'Designed dispatcher scheduling forms and asset allocation blocks for real‑time driver dispatch management.',
        'Implemented schema‑based input validation rules to secure route entries before database synchronization.',
        'Optimized control layout grids to ensure high workflow usability across varied screen form factors.'
      ],
      optimizations: [
        'Migrated state‑heavy route allocations to React Hook Form, decoupling keypress events to eliminate typing latency.'
      ],
      collaboration: [
        'Participated in daily standups and Scrum sprint cycles to sync workflow deadlines and verify staging code releases.'
      ],
      tools: ['React', 'TypeScript', 'Redux', 'React Hook Form', 'Tailwind CSS', 'Agile Scrum', 'Git'],
    }
  ];

  const currentRole = roles.find(r => r.id === selectedRole) || roles[0];

  return (
    <section id="experience" className="py-24 border-t border-zinc-800/20 relative overflow-hidden">
      {/* Subtle radial glow for background contrast */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-emerald-500/[0.005] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold mb-2">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4 font-sans">
            Professional Experience
          </h2>
          <p className="text-sm text-zinc-300 font-light max-w-xl leading-relaxed">
            Explore a role in the timeline to inspect responsibilities, technical choices, and collaborative contributions.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Timeline Link Track */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left border-l border-zinc-800/60 pl-6 ml-2 relative">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className="group relative flex flex-col items-start transition-all"
              >
                {/* Connector Dot */}
                <div 
                  className={`absolute -left-[31px] w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    selectedRole === role.id 
                      ? 'bg-emerald-400 scale-125 shadow-[0_0_8px_#10B981]' 
                      : 'bg-zinc-800 group-hover:bg-zinc-700'
                  }`} 
                />

                {/* Role Brief */}
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider mb-1 ${
                  selectedRole === role.id ? 'text-emerald-400' : 'text-zinc-500'
                }`}>
                  {role.timeline}
                </span>
                
                <h4 className={`text-base font-bold tracking-tight transition-colors font-sans ${
                  selectedRole === role.id ? 'text-zinc-100' : 'text-zinc-400 group-hover:text-zinc-300'
                }`}>
                  {role.role}
                </h4>
                
                <span className="text-xs text-zinc-500 font-medium">
                  {role.company}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Engineering Impact Ledger */}
          <div className="lg:col-span-8 bg-obsidian-950/40 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden min-h-[420px] flex flex-col justify-between">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.008] rounded-full blur-2xl pointer-events-none" />

            <div className="animate-fade-in">
              {/* Role Title Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-zinc-800/50 mb-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-100 font-sans">
                    {currentRole.role}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-400 font-mono mt-0.5">
                    {currentRole.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-mono">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                    <span>{currentRole.timeline}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-600" />
                    <span>{currentRole.location}</span>
                  </div>
                </div>
              </div>

              {/* Ledger Summary */}
              <p className="text-xs text-zinc-200 leading-relaxed font-light mb-6">
                {currentRole.summary}
              </p>

              {/* Core Ledger Subsections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Optimizations */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-3 flex items-center gap-1.5 border-b border-zinc-800/40 pb-1">
                    <Zap className="w-3.5 h-3.5 text-emerald-400/80" />
                    <span>Key Technical Focus</span>
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {currentRole.optimizations.map((opt, i) => (
                      <li key={i} className="text-xs text-zinc-350 font-light leading-relaxed flex items-start gap-2">
                        <span className="text-emerald-400/60 mt-1 select-none">›</span>
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Collaboration */}
                <div>
                  <h4 className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-3 flex items-center gap-1.5 border-b border-zinc-800/40 pb-1">
                    <Users className="w-3.5 h-3.5 text-emerald-400/80" />
                    <span>Collaboration & Teamwork</span>
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {currentRole.collaboration.map((col, i) => (
                      <li key={i} className="text-xs text-zinc-350 font-light leading-relaxed flex items-start gap-2">
                        <span className="text-emerald-400/60 mt-1 select-none">›</span>
                        <span>{col}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Accomplishments list */}
              <div className="mb-6">
                <h4 className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-3 flex items-center gap-1.5 border-b border-zinc-800/40 pb-1">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-400/80" />
                  <span>Responsibilities & Deliverables</span>
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {currentRole.bulletPoints.map((point, i) => (
                    <li key={i} className="text-xs text-zinc-300 font-light leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer metrics info */}
            <div className="pt-4 border-t border-zinc-800/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              <span>Core Technologies</span>
              
              <div className="flex flex-wrap items-center gap-1.5 sm:justify-end">
                {currentRole.tools.slice(0, 4).map((tool, i) => (
                  <span key={i} className="text-[9px] text-zinc-400 bg-obsidian-950 px-2 py-0.5 rounded border border-zinc-850 whitespace-nowrap">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
