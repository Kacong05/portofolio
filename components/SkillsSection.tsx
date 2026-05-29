'use client';

interface Skill {
  name: string;
  category: string;
  icon: string;
  color: string;
  glow: string;
}

const skills: Skill[] = [
  {
    name: 'HTML5',
    category: 'Markup',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#E34F26',
    glow: 'rgba(227, 79, 38, 0.45)',
  },
  {
    name: 'CSS3',
    category: 'Styling',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    color: '#1572B6',
    glow: 'rgba(21, 114, 182, 0.45)',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E',
    glow: 'rgba(247, 223, 30, 0.45)',
  },
  {
    name: 'PHP',
    category: 'Language',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    color: '#777BB4',
    glow: 'rgba(119, 123, 180, 0.45)',
  },
  {
    name: 'Laravel',
    category: 'Framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    color: '#FF2D20',
    glow: 'rgba(255, 45, 32, 0.45)',
  },
  {
    name: 'React JS',
    category: 'Library',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB',
    glow: 'rgba(97, 218, 251, 0.45)',
  },
  {
    name: 'Tailwind CSS',
    category: 'Framework',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    color: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.45)',
  },
  {
    name: 'MySQL',
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    color: '#4479A1',
    glow: 'rgba(68, 121, 161, 0.45)',
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-24"
    >
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="gradient-text text-3xl font-bold md:text-5xl">
            My Skills
          </h2>
          <p className="skills-subtitle mx-auto mt-3 max-w-xl text-sm text-slate-400 md:text-base">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card group relative flex flex-col items-center overflow-hidden rounded-2xl bg-slate-900/60 p-6 ring-1 ring-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5"
              style={
                {
                  ['--skill-color' as string]: skill.color,
                  ['--skill-glow' as string]: skill.glow,
                } as React.CSSProperties
              }
            >
              {/* Top accent line */}
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--skill-color)] to-transparent opacity-50" />

              {/* Glow halo */}
              <span
                className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ backgroundColor: 'var(--skill-color)' }}
              />

              {/* Icon */}
              <div
                className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.02)' }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-9 w-9 transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Name + category */}
              <h3 className="skill-name text-sm font-semibold text-slate-100 md:text-base">
                {skill.name}
              </h3>
              <span className="skill-category mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                {skill.category}
              </span>

              {/* Hover ring */}
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: '0 20px 60px -20px var(--skill-glow)' }}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="skills-footer text-sm text-slate-500">
            Always learning and exploring new technologies
          </p>
        </div>
      </div>
    </section>
  );
}
