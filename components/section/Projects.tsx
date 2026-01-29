'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

// Données des projets
const PROJECTS_DATA = [
  {
    id: 1,
    name: 'Erpify',
    category: 'Enterprise Resource Planning',
    description:
      'ERPIFY is a comprehensive ERP solution designed to streamline business operations. Built with a modern tech stack, it enables companies to manage resources, track workflows, and optimize productivity across departments.',
    technologies: ['React.js', 'TypeScript', 'Express.js', 'Tailwind', 'Node.js', 'MySQL'],
    image: '/img/erpify.png',
    color: 'bg-indigo-600',
    github: 'https://github.com/iamy4sser/Erpify',
    isConfidential: true,
  },
  {
    id: 2,
    name: 'TresoNet',
    category: 'Financial Management',
    description:
      'TresoNet is a robust treasury management system that helps organizations track cash flow, manage financial operations, and generate real-time reports for better financial decision-making.',
    technologies: ['Laravel', 'Tailwind', 'MongoDB', 'Node.js', 'JavaScript'],
    image: '/img/tresonet.png',
    color: 'bg-emerald-600',
    github: 'https://github.com/iamy4sser/TresoNet',
    isConfidential: true,
  },
] as const;

// Constantes pour les hauteurs (pour cohérence)
const HEADER_HEIGHT = 120; // Hauteur du header en px

// Composant pour une carte de projet (mobile)
interface ProjectCardProps {
  project: typeof PROJECTS_DATA[number];
  index: number;
}

const ProjectCard = React.memo(({ project, index }: ProjectCardProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <article
      ref={ref}
      className={`flex flex-col gap-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
      }}
    >
      {/* Image */}
      <div 
        className="relative w-full h-[300px] overflow-hidden rounded-lg border border-white/10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/bg-project.jpg')",
        }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23222' width='400' height='300'/%3E%3C/svg%3E"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className={`absolute top-4 left-4 w-1 h-8 ${project.color}`} />
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
            {String(index + 1).padStart(2, '0')} / {project.category}
          </p>
        </div>

        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">
          {project.name}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] font-mono border border-white/20 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.isConfidential ? (
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-gray-600">
            <span>Available Soon</span>
            <span className="text-[8px] border border-white/10 px-1 rounded">
              Confidential
            </span>
          </div>
        ) : (
          <Link
            href={project.github!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors"
          >
            <span>View Code</span>
          </Link>
        )}
      </div>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

// Composant Desktop Project - SIMPLIFIÉ
const DesktopProject = React.memo(({ project, index, total }: ProjectCardProps & { total: number }) => {
  return (
    <div className="w-full h-full snap-start snap-always flex flex-shrink-0 p-12">
      {/* Left side - Content */}
      <div className="w-5/12 px-16 py-12 flex flex-col justify-center relative z-30 bg-black">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className={`w-2 h-8 ${project.color}`} />
            <p className="font-mono text-sm text-gray-400 uppercase tracking-widest">
              {project.category}
            </p>
          </div>

          <h3 className="text-6xl xl:text-7xl font-bold uppercase leading-[0.9] tracking-tighter">
            {project.name}
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full text-gray-300 hover:bg-white/5 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="pt-2 relative z-50 pointer-events-auto">
            {project.isConfidential ? (
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase text-gray-600">
                <span>Available Soon</span>
                <span className="text-xs border border-white/10 px-2 py-1 rounded">
                  Confidential
                </span>
              </div>
            ) : (
              <Link
                href={project.github!}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors cursor-pointer"
              >
                <div className="w-12 h-[1px] bg-white group-hover:bg-blue-400 group-hover:w-16 transition-all" />
                <span>View Code</span>
              </Link>
            )}
          </div>
        </div>

        {/* Counter */}
        <div className="absolute bottom-8 left-16 font-mono text-6xl text-white/5 select-none">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>

      {/* Right side - Image */}
      <div 
        className="w-7/12 relative h-full overflow-hidden z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/bg-project.jpg')",
        }}
      >
        {/* Project Image - Centered */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-full h-full">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-contain"
              sizes="60vw"
              priority={index === 0}
              quality={90}
              loading={index === 0 ? "eager" : "lazy"}
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%23222' width='800' height='600'/%3E%3C/svg%3E"
            />
          </div>
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-600/20 via-neutral-200/20 to-transparent z-10" />
      </div>
    </div>
  );
});

DesktopProject.displayName = 'DesktopProject';

// Composant principal avec CSS GRID
function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  // Détecter si la section Projects est visible
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsProjectsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Détecter le projet actif
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const newIndex = Math.round(scrollTop / containerHeight);
      setActiveIndex(Math.min(newIndex, PROJECTS_DATA.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full lg:h-screen bg-black text-white relative z-10 lg:overflow-hidden pointer-events-auto"
    >
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay z-0" />

      {/* Grid Layout Container */}
      <div className="hidden lg:grid lg:grid-rows-[auto_1fr] h-full w-full">
        {/* Header - Auto height */}
        <header 
          ref={headerRef}
          className="relative w-full px-6 lg:px-16 pt-8 pb-6 z-50 bg-gradient-to-b from-black via-black/90 to-transparent"
        >
          <div className="border-b border-white/10 pb-4 flex justify-between items-end">
            <div>
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-1">
                / Selected Works
              </p>
              <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter">
                Projects
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
              <span>SCROLL TO EXPLORE</span>
              <span>↓</span>
            </div>
          </div>
        </header>

        {/* Scroll Container - Takes remaining space */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar"
        >
          {PROJECTS_DATA.map((project, index) => (
            <DesktopProject
              key={project.id}
              project={project}
              index={index}
              total={PROJECTS_DATA.length}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicators */}
      {isProjectsVisible && (
        <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 pointer-events-auto transition-all duration-300">
          {PROJECTS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const container = scrollContainerRef.current;
                if (container) {
                  const projectHeight = container.clientHeight;
                  container.scrollTo({
                    top: index * projectHeight,
                    behavior: 'smooth',
                  });
                }
              }}
              className={`w-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'h-12 bg-white' 
                  : 'h-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Mobile - Vertical Cards */}
      <div className="lg:hidden w-full h-auto">
        {/* Mobile Header - Sticky */}
        <div className="sticky top-0 w-full px-6 py-6 z-40 bg-black border-b border-white/10">
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">
            / Selected Works
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tighter">
            Projects
          </h2>
        </div>

        {/* Cards Container */}
        <div className="px-6 py-8 space-y-20">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;