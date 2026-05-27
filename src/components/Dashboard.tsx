import { BarChart3, Clock, Layers, Shield } from 'lucide-react';

export default function Dashboard() {
  const metrics = [
    {
      icon: <Layers className="w-5 h-5 text-emerald-400" />, 
      value: "01",
      title: "Reliable Product Engineering",
      description: "Writing clean, maintainable code with modular component architectures, scalable state patterns, and strict TypeScript contracts to ensure codebase longevity.",
      impact: "Core Focus"
    },
    {
      icon: <Clock className="w-5 h-5 text-emerald-400" />, 
      value: "02",
      title: "User-Focused Architecture",
      description: "Translating complex design requirements into intuitive, fluid workflows. Focusing on pixel-perfect layouts, accessible interface design, and seamless navigation flow.",
      impact: "UI / UX"
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />, 
      value: "03",
      title: "Modern Web Applications",
      description: "Connecting responsive frontends to robust APIs and event-driven architectures, with secure data flows and optimized database integrations.",
      impact: "Full-Stack"
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-400" />, 
      value: "04",
      title: "Analytical Problem Solving",
      description: "Approaching development with a strong product mindset—thinking about end-to-end reliability, code performance, and scalable solutions that address real-world business needs.",
      impact: "Engineering"
    }
  ];

  return (
    <section id="what-i-bring" className="py-12 border-y border-zinc-800/30 bg-obsidian-950/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Typographic Introduction */}
        <div className="flex flex-col items-start text-left mb-10">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold mb-2">
            What I Bring
          </span>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-200">
            My strengths, development approach, and problem-solving habits
          </h2>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <div 
              key={i} 
              className="p-6 rounded-xl bg-obsidian-900/10 border-l border-zinc-800/80 hover:border-emerald-500/50 hover:bg-obsidian-900/30 transition-all duration-300 flex flex-col justify-between items-start text-left relative overflow-hidden group"
            >
              {/* Subtle gradient hover highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/[0.01] rounded-full blur-xl group-hover:bg-emerald-500/[0.02] transition-colors" />

              <div className="w-full">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4 w-full">
                  <div className="p-2 rounded-lg bg-obsidian-950 border border-zinc-800/40">
                    {metric.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-red-400 uppercase px-2 py-0.5 rounded bg-red-500/5 border border-red-500/10">
                    {metric.impact}
                  </span>
                </div>

                {/* Big Index Value */}
                <div className="text-3xl font-extrabold tracking-tight text-zinc-150 mb-2 font-sans">
                  {metric.value}
                </div>

                {/* Metric Title */}
                <div className="text-sm font-semibold text-zinc-200 mb-3 font-sans">
                  {metric.title}
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
