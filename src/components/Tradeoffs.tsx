import { useState } from 'react';
import { ChevronDown, FileCode2, BookOpen } from 'lucide-react';

interface NoteItem {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  why: string;
}

export default function Tradeoffs() {
  const [expandedId, setExpandedId] = useState<string | null>('forms');

  const notes: NoteItem[] = [
    {
      id: "forms",
      category: " TMS - FLEET WORKFLOWS",
      title: "Preventing form lag in dispatcher routing panels",
      problem: "High-frequency Redux dispatch cycles triggered re-render latency across entire dispatcher schedules during rapid keystrokes.",
      solution: "Moved temporary routing fields to localized React Hook Form references, postponing state synchronization until submit or input blur events.",
      why: "Restored instantaneous keystroke responsiveness while preserving complete schema validation coverage prior to database writing."
    },
    {
      id: "virtualization",
      category: " LADM - SURVEYOR GRID",
      title: "Rendering dense spatial matrices without browser lockups",
      problem: "Rendering landowner coordinates lists containing thousands of geographic boundary rows bloated the DOM, locking up browsers on administrative client machines.",
      solution: "Implemented dynamic viewport list virtualization, calculating active viewport coordinates to render only the visible table rows.",
      why: "Eliminated over 90% of active DOM nodes, keeping scrolling fluid and interactive on older administrative client hardware."
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="tradeoffs" className="py-24 border-t border-zinc-800/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-[40%] left-[5%] w-[250px] h-[250px] bg-emerald-500/[0.003] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-12">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Notes</span>
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-4 font-sans">
            Implementation Decisions
          </h2>
          <p className="text-sm text-zinc-300 font-light max-w-xl leading-relaxed">
            Practical summaries of technical bottlenecks encountered during feature development, decisions made, and their concrete outcomes.
          </p>
        </div>

        {/* Notes Accordion List */}
        <div className="flex flex-col gap-4">
          {notes.map((note) => {
            const isExpanded = expandedId === note.id;
            return (
              <div 
                key={note.id}
                className={`rounded-xl border transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-obsidian-900/25 border-zinc-800/80 shadow-[0_4px_20px_-10px_rgba(16,185,129,0.05)]' 
                    : 'bg-obsidian-900/10 border-zinc-850 hover:border-zinc-800 hover:bg-obsidian-900/20'
                }`}
              >
                {/* Header Row (Button) */}
                <button
                  onClick={() => toggleExpand(note.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex flex-col gap-1 pr-4">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                      <FileCode2 className="w-3 h-3 text-emerald-500/60" />
                      <span>{note.category}</span>
                    </span>
                    <h4 className={`text-sm md:text-base font-bold tracking-tight transition-colors duration-200 ${
                      isExpanded ? 'text-emerald-400' : 'text-zinc-200'
                    }`}>
                      {note.title}
                    </h4>
                  </div>
                  
                  <div className={`p-1.5 rounded-lg bg-obsidian-950 border border-zinc-850 text-zinc-400 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-emerald-400 border-emerald-500/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Details Content Box */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[500px] border-t border-zinc-850/60' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 md:p-6 flex flex-col gap-4 text-left text-xs text-zinc-300 leading-relaxed font-light">
                    {/* Problem */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4">
                      <div className="md:col-span-2 font-mono text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                        Problem:
                      </div>
                      <div className="md:col-span-10 text-zinc-300">
                        {note.problem}
                      </div>
                    </div>

                    {/* Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4 pt-3 border-t border-zinc-900/40">
                      <div className="md:col-span-2 font-mono text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                        Solution:
                      </div>
                      <div className="md:col-span-10 text-zinc-200 font-normal">
                        {note.solution}
                      </div>
                    </div>

                    {/* Why */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-4 pt-3 border-t border-zinc-900/40">
                      <div className="md:col-span-2 font-mono text-[10px] text-emerald-500/80 uppercase tracking-wider font-bold">
                        Why:
                      </div>
                      <div className="md:col-span-10 text-zinc-300">
                        {note.why}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
