'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

// Données des projets
const PROJECTS_DATA = [
  {
    id: 1,
    name: 'Bibliotheque',
    category: 'Library Management System',
    description:
      'Bibliotheque is a Laravel-based library management application. It provides book CRUD, categories, user management, REST API endpoints (with JWT auth), event/listener logging, database factories & seeders, and a Blade/Bootstrap frontend with asset pipeline via Laravel Mix.',
    technologies: ['PHP', 'Laravel 9', 'Blade', 'MySQL', 'Redis (predis)', 'JavaScript', 'Laravel Mix (Webpack)', 'Composer', 'tymon/jwt-auth', 'PHPUnit'],
    images: ['/img/biblio1.png','/img/biblio2.png','/img/bib3.png'], // leave empty — you will add images
    color: 'bg-emerald-600',
    github: 'https://github.com/Saadellody/Bibliotheque',
  },
  {
    id: 2, // Increment based on your project list
    name: 'Elegence',
    category: 'E-commerce / Luxury Retail',
    description:
      'LuxeParfum is a full-stack premium fragrance boutique application. It features a high-end shopping experience with real-time state management, secure user authentication via Laravel Sanctum, a dedicated Admin Dashboard for inventory control, and a responsive design optimized for luxury branding.',
    technologies: [
      'Laravel 11', 
      'PHP', 
      'React 19', 
      'Vite', 
      'Redux Toolkit', 
      'Tailwind CSS v4', 
      'Sanctum', 
      'MySQL', 
      'Axios'
    ],
    images: ['/img/elegence1.png','/img/elegence2.png','/img/elegence3.png','/img/elegence4.png','/img/elegence5.png'], // Replace these with your actual screenshot paths
    color: 'bg-stone-800', // A sophisticated, neutral dark color fitting for luxury products
    github: 'https://github.com/Saadellody/E-commerce_Parfums', // Based on your workspace name
  },
  {
id: 3,
name: 'EasySyndic',
category: 'Property Management',
description:
'EasySyndic is a full-stack syndic/property-management platform that centralizes apartment and tenant data, manages charges and payments, generates PDFs/reports, and provides role-based dashboards for admins and proprietors to simplify building administration.',
technologies: ['Java', 'Spring Boot', 'Maven', 'JPA/Hibernate', 'React', 'TypeScript', 'Vite', 'Redux (RTK Query)', 'REST APIs', 'WebSockets'],
images: ['/img/easy1.png','/img/easy2.png','/img/easy3.png','/img/easy4.png','/img/easy5.png','/img/easy6.png'], // add your image paths here
color: 'bg-sky-600',
github: 'https://github.com/hammouyounes/EasySyndic', // add your GitHub URL here
},
{
  id: 4,
  name: 'PwTrace',
  category: 'Agricultural Management',
  description:
    'PepperWorldTrace is a comprehensive agricultural management and traceability platform that centralizes plantation data, farm operations, crop measurements, and observations. Features real-time data tracking, role-based dashboards for farmers and administrators, QR code generation for traceability, PDF/Excel report generation, and integrated irrigation monitoring to streamline farming operations and ensure quality control.',
  technologies: ['PHP', 'Laravel', 'MySQL', 'Eloquent ORM', 'Laravel Sanctum', 'jQuery', 'SASS', 'Laravel Mix', 'DOMPDF', 'PHPUnit', 'QR Code Generation', 'Excel Export'],
  images: ['/img/pepper1.png'], // add your image paths here
  color: 'bg-red-600',
  github: '', // add your GitHub URL here
}
] as const;

// Composant ImageSlider pour gérer plusieurs photos
interface ImageSliderProps {
  images: readonly string[];
  projectName: string;
  isPriority?: boolean;
}

const ImageSlider = ({ images, projectName, isPriority }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length <= 1) {
    return (
      <div className="relative w-full h-full">
        <Image
          src={images[0]}
          alt={projectName}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority={isPriority}
          quality={90}
          loading={isPriority ? "eager" : "lazy"}
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%23222' width='800' height='600'/%3E%3C/svg%3E"
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full group outline-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`${projectName} - ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={isPriority && currentIndex === 0}
            quality={95}
            placeholder="blur"
            blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%23222' width='800' height='600'/%3E%3C/svg%3E"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={prevImage}
          className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-white' : 'bg-white/40 hover:bg-white/60'
              }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

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
      className={`flex flex-col gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
      }}
    >
      {/* Container Image avec Slider */}
      <div
        className="relative w-full h-[350px] overflow-hidden rounded-lg border border-white/10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/bg-project.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <ImageSlider images={project.images} projectName={project.name} />
        </div>
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className={`absolute top-4 left-4 w-1 h-8 ${project.color} z-10`} />
      </div>

      {/* Content */}
      <div className="px-2">
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
        <div className="relative z-10">
          {project.id === 3 ? (
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase border-b border-gray-500 pb-1 text-gray-400">
              🔒 Private Repository
            </span>
          ) : (
            <Link
              href={project.github!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors"
            >
              <span>{project.github}</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

// Composant Desktop Project
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

          {/* Link */}
          <div className="pt-3 relative z-50 pointer-events-auto">
            {project.id === 3 ? (
              <div className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-400">
                <div className="w-12 h-[1px] bg-gray-500" />
                <span>🔒 Private Repository</span>
              </div>
            ) : (
              <Link
                href={project.github!}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors cursor-pointer"
              >
                <div className="w-12 h-[1px] bg-white group-hover:bg-blue-400 group-hover:w-16 transition-all" />
                <span>{project.github}</span>
              </Link>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full text-gray-300 hover:bg-white/5 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="absolute bottom-8 left-16 font-mono text-6xl text-white/5 select-none">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>

      {/* Right side - Image Slider */}
      <div
        className="w-7/12 relative h-full overflow-hidden z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/bg-project.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <ImageSlider
            images={project.images}
            projectName={project.name}
            isPriority={index === 0}
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/40 via-transparent to-transparent z-0 pointer-events-none" />
      </div>
    </div>
  );
});

DesktopProject.displayName = 'DesktopProject';

// Composant principal
function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

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
      id="projects"
      className="w-full lg:h-screen bg-black text-white relative z-10 lg:overflow-hidden pointer-events-auto"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay z-0" />

      <div className="hidden lg:grid lg:grid-rows-[auto_1fr] h-full w-full">
        <header className="relative w-full px-6 lg:px-16 pt-8 pb-6 z-50 bg-gradient-to-b from-black via-black/90 to-transparent">
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
              <span>EXPLORE BY SCROLLING</span>
              <span>↓</span>
            </div>
          </div>
        </header>

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
              className={`w-2 rounded-full transition-all duration-300 ${index === activeIndex
                ? 'h-12 bg-white'
                : 'h-2 bg-white/30 hover:bg-white/50'
                }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div className="lg:hidden w-full h-auto">
        <div className="sticky top-0 w-full px-6 py-6 z-40 bg-black border-b border-white/10">
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">
            / Selected Works
          </p>
          <h2 className="text-3xl font-black uppercase tracking-tighter">
            Projects
          </h2>
        </div>

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