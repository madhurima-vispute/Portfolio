import { useState } from 'react';
import { Layout, Cpu, Database, Settings, ShieldAlert } from 'lucide-react';

interface SkillItem {
  name: string;
  level: string;
  concept: string;
  usage: string;
  capabilities: string[];
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: SkillItem[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>({
    name: 'React.js',
    level: 'Proficient',
    concept: 'Modular component architecture, custom hook composition, and high‑performance state integration.',
    usage: 'Developed landowner grievance panels at Deloitte and fleet dispatch scheduling forms at SundayTech, ensuring smooth user interactions.',
    capabilities: ["Component Architecture", "Custom Hook Development", "State Optimization", "Lifecycle Management"]
  });

  const categories: SkillCategory[] = [
    {
      id: 'frontend',
      title: 'Application & UI',
      icon: <Layout className="w-4 h-4" />,
      items: [
        { 
          name: 'React.js', 
          level: 'Proficient', 
          concept: 'Modular component architecture, custom hook composition, and high‑performance state integration.', 
          usage: 'Developed landowner grievance panels at Deloitte and fleet dispatch scheduling forms at SundayTech, ensuring smooth user interactions.',
          capabilities: ["Modular Architecture", "Custom Hook Design", "Rerender Minimization", "Reusable UI Systems"]
        },
        { 
          name: 'TypeScript', 
          level: 'Proficient', 
          concept: 'Static type systems, custom interface contracts, and compilation checks to catch runtime errors early.', 
          usage: 'Enforced strict type definitions across all shared components, building a highly reliable and self-documenting codebase.',
          capabilities: ["Type-Safe API Contracts", "Generic Composition", "Strict Type Guards", "Compilation Workflows"]
        },
        { 
          name: 'JavaScript (ES6+)', 
          level: 'Proficient', 
          concept: 'Asynchronous programming models (Promises, async/await), ES6 array operations, and DOM event handling.', 
          usage: 'Engineered robust API client request layers, dynamic JSON response parsers, and custom event handlers.',
          capabilities: ["Asynchronous Pipelines", "Async/Await Controls", "Event Broker Logic", "Data Parsing Protocols"]
        },
        { 
          name: 'Tailwind CSS', 
          level: 'Proficient', 
          concept: 'Utility-first styling systems, responsive layout engines, dynamic media queries, and custom styling tokens.', 
          usage: 'Designed pixel-perfect responsive layouts and fluid transitions across administrative panels.',
          capabilities: ["Fluid Layout Engines", "Token-Based Layouts", "Responsive Breakpoints", "Interactive UI States"]
        },
        { 
          name: 'CSS3 / Sass', 
          level: 'Proficient', 
          concept: 'Custom theme variables, preprocessor nested styling, flexible layout engines, and cross-browser stylesheet standards.', 
          usage: 'Refined styling structures, resolved browser rendering discrepancies, and added micro-interactions.',
          capabilities: ["Modular Preprocessing", "Variable Theme Contexts", "Keyframe Micro-Animations", "Cross-Browser Styling"]
        },
        { 
          name: 'HTML5', 
          level: 'Proficient', 
          concept: 'Semantic document outlines, strict web accessibility guidelines (WCAG), and search engine optimization structure.', 
          usage: 'Created accessible, well-structured pages ensuring screen-reader friendly and search-optimized semantic markups.',
          capabilities: ["Semantic Outlines", "WCAG Accessibility standards", "SEO Structure Best Practices"]
        }
      ]
    },
    {
      id: 'state',
      title: 'Systems & State',
      icon: <Cpu className="w-4 h-4" />,
      items: [
        { 
          name: 'Redux / RTK', 
          level: 'Proficient', 
          concept: 'Global state storage, action/reducer flows, middleware configuration, and memoized selector patterns.', 
          usage: 'Stored and managed large spatial datasets locally to prevent duplicate network queries and keep landowner profiles synchronized.',
          capabilities: ["State Normalization", "Memoized State Selectors", "Caching Strategies", "Middleware Pipelines"]
        },
        { 
          name: 'React Hook Form', 
          level: 'Proficient', 
          concept: 'Ref-based uncontrolled input streams, schema-based validations, and localized input renders.', 
          usage: 'Optimized high-frequency forms in fleet routing scheduler sheets, completely eliminating parent component input delays.',
          capabilities: ["Ref-Based Field Decoupling", "Uncontrolled Field Renders", "Schema Validation", "Input Speed Tuning"]
        },
        { 
          name: 'RESTful APIs', 
          level: 'Proficient', 
          concept: 'HTTP client communication methods, structured JSON request/response payloads, status codes, and server data sync.', 
          usage: 'Collaborated with backend engineers to integrate front-end user panels with backend server routes.',
          capabilities: ["HTTP Client Pipelines", "Data Sync Handlers", "Status Code Mapping", "Payload Normalization"]
        }
      ]
    },
    {
      id: 'backend',
      title: 'Data & Backend',
      icon: <Database className="w-4 h-4" />,
      items: [
        { 
          name: 'Node.js', 
          level: 'Comfortable', 
          concept: 'Event-driven server-side runtimes, file system operations, and npm package environments.', 
          usage: 'Wrote command-line developer scripts and set up configurations in MERN stack projects.',
          capabilities: ["Server Runtimes", "File Operations", "Script Configurations", "Package Environments"]
        },
        { 
          name: 'Express.js', 
          level: 'Comfortable', 
          concept: 'Robust routing middleware, error handling pipelines, request body parsing, and API architectures.', 
          usage: 'Developed backend API endpoints to serve database query responses securely to React clients.',
          capabilities: ["Routing Architectures", "Middleware Pipelines", "Response Formatting", "Server-Side Integrations"]
        },
        { 
          name: 'NoSQL (MongoDB)', 
          level: 'Comfortable', 
          concept: 'Document-oriented database systems, dynamic schema validations, and indexing patterns.', 
          usage: 'Designed collection schemas, created indexes, and built queries to support demonstrated MERN applications.',
          capabilities: ["Collection Schemas", "Indexing Operations", "MERN Stack Integrations", "Aggregate Pipelines"]
        },
        { 
          name: 'RDBMS (Postgres)', 
          level: 'Comfortable', 
          concept: 'Relational database systems, structured schema definitions, SQL queries, and join operations.', 
          usage: 'Designed normalized database tables to store transactions and user account details safely.',
          capabilities: ["Normalized Database Design", "SQL Query Writing", "Join Operations", "Indexing Strategies"]
        }
      ]
    },
    {
      id: 'tooling',
      title: 'Tools & Practices',
      icon: <Settings className="w-4 h-4" />,
      items: [
        { 
          name: 'Version Control (Git)', 
          level: 'Proficient', 
          concept: 'Distributed revision control, branch workflows, merge conflict resolutions, and pull request reviews.', 
          usage: 'Managed clean source histories, handled feature branch merging, and coordinated releases during agile sprints.',
          capabilities: ["Distributed Revision Flows", "Agile Branch Workflows", "Conflict Resolutions", "Release Tagging"]
        },
        { 
          name: 'Unit Testing', 
          level: 'Comfortable', 
          concept: 'Testing assertions, mock functions, component mounting, and test coverage parameters.', 
          usage: 'Wrote robust test suites for shared UI components using Jest to guarantee stable production releases.',
          capabilities: ["Jest Test Suites", "Component Mounting Tests", "Mock Assertions", "Coverage Diagnostics"]
        },
        { 
          name: 'Agile (Scrum)', 
          level: 'Proficient', 
          concept: 'Interactive sprint cycles, sprint planning, retrospective sessions, and daily coordinate standups.', 
          usage: 'Participated actively in daily standups and sprint planning to sync tasks and hit project milestones.',
          capabilities: ["Sprint Cycles", "Task Coordinate Standups", "Planning Sessions", "Sprint Retrospectives"]
        },
        { 
          name: 'Web Performance', 
          level: 'Comfortable', 
          concept: 'Dynamic code-splitting mechanisms, asset lazy loading, bundle analysis, and rendering critical paths.', 
          usage: 'Identified bundle size bottlenecks and implemented code-splitting to improve overall asset load times.',
          capabilities: ["Dynamic Chunk Splitting", "Asset Lazy Loading", "FCP Optimizations", "List Virtualization"]
        }
      ]
    }
  ];

  const handleSkillSelect = (skill: SkillItem) => {
    setSelectedSkill(skill);
  };

  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  return (
    <section id="skills" className="py-24 border-t border-zinc-800/20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold mb-2">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4 font-sans">
            Skills & Technologies
          </h2>
          <p className="text-sm text-zinc-300 font-light max-w-xl leading-relaxed">
            A mapping of the tools, technologies, and practices I use to build modern, reliable, and user-focused web applications.
          </p>
        </div>

        {/* Dynamic Skill Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Category Selection Links */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 lg:border-r border-zinc-800/50 pr-0 lg:pr-6 text-left">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (cat.items.length > 0) {
                    setSelectedSkill(cat.items[0]);
                  }
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs uppercase tracking-widest font-semibold transition-all whitespace-nowrap lg:w-full ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500/5 border border-emerald-500/30 text-emerald-400 font-bold'
                    : 'bg-transparent border border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.icon}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Middle Column: Interactive Skill Badge Cluster */}
          <div className="lg:col-span-5 flex flex-wrap gap-2.5 content-start text-left">
            {currentCategory.items.map((skill, i) => (
              <button
                key={i}
                onClick={() => handleSkillSelect(skill)}
                className={`px-4 py-2.5 rounded-lg border transition-all text-xs font-mono duration-300 ${
                  selectedSkill?.name === skill.name
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-semibold'
                    : 'bg-obsidian-900/10 border-zinc-800/20 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700/30 hover:bg-obsidian-900/30'
                }`}
              >
                <span>{skill.name}</span>
              </button>
            ))}
          </div>

          {/* Right Column: High-Fidelity Blueprint Details */}
          <div className="lg:col-span-4 bg-obsidian-950/60 border border-zinc-800/50 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden min-h-[300px] flex flex-col justify-between text-left">
            {selectedSkill ? (
              <div className="animate-fade-in flex flex-col justify-between h-full">
                <div>
                  {/* Skill Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono text-emerald-500/80 uppercase font-bold tracking-widest bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">
                      SKILL DETAILS
                    </span>
                  </div>

                  {/* Name & Concept */}
                  <h4 className="text-lg font-bold tracking-tight text-zinc-100 font-sans mb-4">
                    {selectedSkill.name}
                  </h4>
                  
                  {/* Capabilities List */}
                  <div className="mb-5">
                    <div className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-2">
                      Engineering Capabilities
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedSkill.capabilities?.map((cap, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-red-400 bg-red-500/5 border border-red-500/10 px-2 py-1 rounded">
                          → {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1.5">
                      Core Concept
                    </div>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      {selectedSkill.concept}
                    </p>
                  </div>

                  {/* Production Usage */}
                  <div>
                    <div className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-1.5">
                      Applied Experience
                    </div>
                    <p className="text-xs text-zinc-300 font-light leading-relaxed">
                      {selectedSkill.usage}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-12 text-zinc-500">
                <ShieldAlert className="w-8 h-8 mb-2 opacity-50" />
                <span className="text-xs font-mono tracking-widest">Select a skill to inspect details</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
