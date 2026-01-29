/* eslint-disable react/jsx-no-comment-textnodes */
'use client';
import React, { useEffect, useRef, useState } from 'react';

// Données structurées
const TECH_STACK = [
  {
    id: 1,
    category: 'Front-end',
    color: 'bg-blue-500',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS','TypeScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    id: 2,
    category: 'Back-end',
    color: 'bg-green-500',
    technologies: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'Java', 'C', 'C++', 'REST API'],
  },
  {
    id: 3,
    category: 'Databases',
    color: 'bg-yellow-500',
    technologies: ['MySQL', 'MongoDB', 'Oracle Database', 'PostgreSQL', 'Firebase'],
  },
  {
    id: 4,
    category: 'Project Management',
    color: 'bg-purple-500',
    technologies: ['Git', 'Jira', 'GitHub', 'Scrum'],
  },
  {
    id: 5,
    category: 'Software Tools',
    color: 'bg-pink-500',
    technologies: ['Figma', 'VS Code', 'Postman', 'Canva'],
  },
  {
    id: 6,
    category: 'Architecture & Security',
    color: 'bg-red-500',
    technologies: ['UML', 'Merise', 'MVC Pattern', 'JWT Auth', 'Computer Security'],
  },
] as const;

// Hook pour Intersection Observer
function useIntersectionObserver(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isVisible } as const;
}

// Composant pour une carte de technologie
interface TechCardProps {
  category: string;
  technologies: readonly string[];
  color: string;
  index: number;
}

const TechCard = React.memo(({ category, technologies, color, index }: TechCardProps) => {
  const { ref, isVisible } = useIntersectionObserver(0.2);

  return (
    <article
      ref={ref}
      className={`flex flex-col group relative p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 mt-2 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
      }}
    >
      {/* Top border animation */}
      <div
        className={`absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500 ${color}`}
      />

      <div>
        <h3 className="text-2xl font-bold uppercase tracking-wider mb-6 flex items-center">
          <span className="text-lg mr-3 text-gray-500 font-mono">
            {String(index + 1).padStart(2, '0')}
          </span>
          {category}
        </h3>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full text-gray-300 group-hover:text-white group-hover:border-white/60 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
});

TechCard.displayName = 'TechCard';

// Composant principal
function Tech() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver(0.2);

  return (
    <section
      className="w-full h-full bg-neutral-900 flex items-center justify-center px-4 py-12"
      aria-label="Tech Stack"
    >
      <div className="max-w-[95%] lg:max-w-[85%] w-full flex flex-col">
        {/* Header */}
        <header
          ref={headerRef}
          className={`flex-shrink-0 mb-10 border-b border-white/20 pb-4 flex items-end justify-between transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <h2 className="text-5xl lg:pt-4 lg:text-6xl font-black uppercase tracking-tighter leading-none text-white">
              Tech <span className="text-transparent stroke-text">Stack</span>
            </h2>
          </div>

          <div className="hidden lg:block text-right" aria-hidden="true">
            <p className="font-mono text-xs text-gray-400">/// SYSTEM.READY</p>
            <p className="font-mono text-xs text-gray-400">/// SCROLL.DETECTED</p>
          </div>
        </header>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:flex-1 lg:min-h-0 lg:overflow-y-auto pr-2 pb-8 pointer-events-auto">
          {TECH_STACK.map((stack, index) => (
            <TechCard
              key={stack.id}
              category={stack.category}
              technologies={stack.technologies}
              color={stack.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tech;