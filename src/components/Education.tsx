import { GraduationCap, Award, Calendar, MapPin, Landmark } from 'lucide-react';

interface AcademicItem {
  institution: string;
  degree: string;
  timeline: string;
  location: string;
  focus: string[];
}

interface CertificationItem {
  issuer: string;
  title: string;
  timeline: string;
  location: string;
  focus: string[];
}

export default function Education() {
  const educationList: AcademicItem[] = [
    {
      institution: "SRM Institute of Science and Technology",
      degree: "Master of Computer Application (MCA)",
      timeline: "Jul 2025 - Present",
      location: "Chennai, TN",
      focus: [
        "Advanced Data Structures & Analysis of Algorithms",
        "Software Engineering & Web Technologies",
        "Database Management Systems (RDBMS)"
      ]
    },
    {
      institution: "S.K Somaiya College",
      degree: "Bachelor of Science in Information Technology (B.Sc IT)",
      timeline: "Sep 2021 - Mar 2024",
      location: "Vidyavihar, MH",
      focus: [
        "Object-Oriented Programming & Web Programming",
        "Database Management Systems & SQL",
        "Web Technologies (HTML, CSS, JavaScript)"
      ]
    }
  ];

  const certifications: CertificationItem[] = [
    {
      issuer: "Smartbyte",
      title: "Full Stack Development Internship Program",
      timeline: "Mar 2024 - Jul 2024",
      location: "Dombivli, MH",
      focus: [
        "MERN Stack Web Development (MongoDB, Express, React, Node)",
        "Building RESTful APIs, user authentication, and database integration",
        "Responsive component design and styling using CSS frameworks"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 border-t border-zinc-800/20 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-semibold mb-2">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4 font-sans">
            Education & Certifications
          </h2>
          <p className="text-sm text-zinc-300 font-light max-w-xl leading-relaxed">
            My educational background and technical training in computer applications and web development.
          </p>
        </div>

        {/* Education & Certs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>ACADEMIC DEGREES</span>
            </h3>

            {educationList.map((edu, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-obsidian-900/20 border border-zinc-800/40 relative overflow-hidden backdrop-blur-md"
              >
                {/* Visual Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-lg font-bold tracking-tight text-zinc-100 font-sans">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold text-emerald-400 font-mono flex items-center gap-1.5 mt-0.5">
                      <Landmark className="w-3.5 h-3.5 text-emerald-500/70" />
                      <span>{edu.institution}</span>
                    </span>
                  </div>

                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3 sm:gap-1 text-xs text-zinc-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{edu.timeline}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{edu.location}</span>
                    </span>
                  </div>
                </div>

                {/* Core Focus Bullet logs */}
                <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-800/40">
                  {edu.focus.map((item, j) => (
                    <li key={j} className="text-xs text-zinc-300 font-light leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-400/50 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>PROFESSIONAL CERTIFICATIONS</span>
            </h3>

            {certifications.map((cert, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-obsidian-900/20 border border-zinc-800/40 relative overflow-hidden backdrop-blur-md"
              >
                {/* Visual Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-lg font-bold tracking-tight text-zinc-100 font-sans">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-semibold text-emerald-400 font-mono flex items-center gap-1.5 mt-0.5">
                      <Landmark className="w-3.5 h-3.5 text-emerald-500/70" />
                      <span>{cert.issuer}</span>
                    </span>
                  </div>

                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3 sm:gap-1 text-xs text-zinc-500 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{cert.timeline}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{cert.location}</span>
                    </span>
                  </div>
                </div>

                {/* Core Focus Bullet logs */}
                <ul className="flex flex-col gap-2 pt-3 border-t border-zinc-800/40">
                  {cert.focus.map((item, j) => (
                    <li key={j} className="text-xs text-zinc-300 font-light leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-400/50 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="p-4 rounded-xl border border-zinc-800/40 bg-obsidian-900/10 flex items-start gap-3 text-left">
              <span className="text-sm select-none flex-shrink-0">📄</span>
              <div className="text-xs leading-relaxed text-zinc-400 font-light font-sans">
                Academic transcripts and internship certificates are available upon request.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
