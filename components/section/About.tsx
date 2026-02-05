'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

// Données extraites pour meilleure maintenabilité
const EXPERIENCE_DATA = [
  {
    id: 1,
    title: "Internship - Fullstack Developer",
    company: "Pepper World, Agadir",
    period: "03/2025 - 04/2025",
    description:
      "Developed fullstack applications using Laravel and jQuery, focusing on QR code systems, data filtering, and optimizing database performance.",
  },
] as const;

const EDUCATION_DATA = [
  {
    id: 1,
    title: "Bachelor Computer Systems & Web Technology",
    institution: "EST Sidi Bennour",
    period: "2025 - 2026",
    description: "Specializing in the convergence of Software Engineering and Infrastructure, including Cloud Computing and advanced DB administration.",
  },
  {
    id: 2,
    title: "Diploma in Digital Development (Full-Stack)",
    institution: "ISTA Mirleft",
    period: "2023 - 2025",
    description:
      "Comprehensive training in the software development lifecycle, secure backend architecture, and microservices orchestration.",
  },
] as const;

const TECHNOLOGIES = [
  'SPRING BOOT',
  'LARAVEL',
  'REACT',
  'ANGULAR',
  'DOCKER',
  'ORACLE DB',
  'MONGODB',
  'NODE.JS',
  'PHP',
  'JAVA',
  'GIT/GITHUB',
  'LINUX',
] as const;

// Sous-composant pour les items de timeline
interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
}

const TimelineItem = React.memo(({ title, subtitle, period, description }: TimelineItemProps) => (
  <article className="group relative pl-6 border-l border-gray-200 hover:border-black transition-colors duration-300">
    <span
      className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-white border-2 border-black rounded-full group-hover:bg-black transition-colors"
      aria-hidden="true"
    />
    <h4 className="text-base text-black font-bold">{title}</h4>
    <p className="text-xs font-mono text-gray-500 mb-1">
      {subtitle} • {period}
    </p>
    <p className="text-sm text-gray-600 leading-snug">{description}</p>
  </article>
));

TimelineItem.displayName = "TimelineItem";

// Sous-composant pour les sections About
interface AboutSectionProps {
  title: string;
  content: string;
}

const AboutSection = React.memo(({ title, content }: AboutSectionProps) => (
  <article>
    <h3 className="text-lg text-black font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-black" aria-hidden="true" />
      {title}
    </h3>
    <p className="text-gray-700 leading-relaxed text-sm lg:text-lg font-light text-justify">
      {content}
    </p>
  </article>
));

AboutSection.displayName = "AboutSection";

// Sous-composant TechMarquee optimisé
const TechMarquee = React.memo(() => (
  <div
    className="group absolute bottom-0 left-0 w-full py-4 border-t border-black/5 bg-neutral-50 overflow-hidden flex items-center z-20 pointer-events-auto"
    role="region"
    aria-label="Technologies marquee"
  >
    <div
      className="flex animate-scroll group-hover:[animation-play-state:paused] whitespace-nowrap pointer-events-auto"
      aria-label="Technologies I use"
    >
      {/* First set */}
      {TECHNOLOGIES.map((tech) => (
        <div key={tech} className="flex items-center">
          <span className="text-4xl lg:text-7xl font-black mx-6 lg:mx-12 text-transparent stroke-text-black opacity-30 hover:opacity-100 hover:stroke-text-black transition-all duration-300 cursor-default select-none">
            {tech}
          </span>
          <span className="text-xl text-black/20" aria-hidden="true">●</span>
        </div>
      ))}

      {/* Duplicate for seamless loop */}
      {TECHNOLOGIES.map((tech) => (
        <div key={`${tech}-dup`} className="flex items-center">
          <span className="text-4xl lg:text-7xl font-black mx-6 lg:mx-12 text-transparent stroke-text-black opacity-30 hover:opacity-100 hover:stroke-text-black transition-all duration-300 cursor-default select-none">
            {tech}
          </span>
          <span className="text-xl text-black/20" aria-hidden="true">●</span>
        </div>
      ))}
    </div>
  </div>
));

TechMarquee.displayName = "TechMarquee";

// Composant principal
function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Hooks pour chaque section
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { ref: leftColumnRef, isVisible: leftColumnVisible } = useIntersectionObserver({
    threshold: 0.4,
    triggerOnce: true,
  });
  const { ref: experienceRef, isVisible: experienceVisible } = useIntersectionObserver({
    threshold: 0.6,
    triggerOnce: true,
  });
  const { ref: educationRef, isVisible: educationVisible } = useIntersectionObserver({
    threshold: 0.8,
    triggerOnce: true,
  });

  // Observer pour la section principale avec cleanup
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentSection);

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`relative w-full flex flex-col justify-center pt-20 pb-30 px-5 lg:px-24 lg:pt-10 lg:pb-30 bg-neutral-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      aria-label="About Saad-Eddine El oddy"
    >
      {/* Header Section */}
      <header
        ref={headerRef}
        className={`border-b-2 border-black pt-4 pb-4 mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4 transition-all duration-700 ${headerVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
          }`}
      >
        <div>
          <h1 className="text-5xl text-black lg:text-6xl font-black uppercase tracking-tighter leading-none">
            SAAD EDDINE{" "}
            <br className="lg:hidden" />
            <span className="text-transparent stroke-text-black">EL ODDY</span>
          </h1>
        </div>
        <div className="hidden lg:block" aria-hidden="true">
          <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center animate-spin-slow">
            <span className="text-xl text-black">✶</span>
          </div>
        </div>
      </header>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 h-auto lg:h-full pointer-events-auto pb-6">
        {/* Left Column - About */}
        <div
          ref={leftColumnRef}
          className={`lg:col-span-5 flex flex-col gap-4 justify-start lg:justify-center transition-all duration-700 delay-200 ${leftColumnVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-10'
            }`}
        >
          <AboutSection
            title="Who Am I?"
            content="A Computer Systems Engineer in the making, currently based in Morocco. I bridge the gap between clean code and robust infrastructure, focusing on the intersection of Software Engineering and System Architecture."
          />
          <AboutSection
            title="What I Do?"
            content="I architect end-to-end digital solutions. Whether it’s building secure backends with Spring Boot and Laravel or orchestrating microservices with Docker, I focus on creating systems that are as stable as they are scalable."
          />
          <AboutSection
            title="What Drives Me?"
            content="The challenge of optimization. I’m driven by the 'DevOps' mindset—constantly looking for ways to automate workflows, secure data, and turn complex requirements into high-performance reality."
          />
        </div>

        {/* Right Column - Experience & Education */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience */}
          <div
            ref={experienceRef}
            className={`space-y-5 transition-all duration-700 delay-200 ${experienceVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="font-mono text-xs text-gray-400 uppercase border-b border-gray-200 pb-2">
              My Journey
            </h2>
            {EXPERIENCE_DATA.map((exp) => (
              <TimelineItem
                key={exp.id}
                title={exp.title}
                subtitle={exp.company}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>

          {/* Education */}
          <div
            ref={educationRef}
            className={`space-y-5 transition-all duration-700 delay-200 ${educationVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="font-mono text-xs text-gray-400 uppercase border-b border-gray-200 pb-2">
              Education
            </h2>
            {EDUCATION_DATA.map((edu) => (
              <TimelineItem
                key={edu.id}
                title={edu.title}
                subtitle={edu.institution}
                period={edu.period}
                description={edu.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tech Marquee */}
      <TechMarquee />
    </section>
  );
}

export default About;