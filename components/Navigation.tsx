'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "HOME", href: "#Home" },
  { label: "ABOUT", href: "#About" },
  { label: "TECH", href: "#Tech" },
  {
    label: "PROJECTS",
    href: "#Projects",
  },
  {
    label: "CONTACT",
    href: "#Contact",
  },
];

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed max-w-md top-4 left-1/2 -translate-x-1/2 pointer-events-none z-50">
        <ul
          className="
    justify-center items-center
    flex gap-8 px-10 py-2
    bg-neutral-900/70
    text-[12px] tracking-widest font-bold
    font-mono
    shadow-[0_0_20px_rgba(255,120,60,0.6)]
    [clip-path:polygon(0%_0%,100%_0%,96%_100%,4%_100%)]
    backdrop-blur-sm
    transition-all duration-300 ease-in-out
    hover:shadow-[0_0_30px_rgba(255,120,60,0.8)]
  "
        >
          {navItems.map((item, index) => (
            <li
              key={item.label}
              className="pointer-events-auto animate-slideDown will-change-transform"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <Link
                href={item.href}
                className="
            relative
            text-neutral-100
            transition-all duration-200 ease-out
            hover:scale-110
            inline-block
            will-change-transform
            after:content-['']
            after:absolute
            after:w-0
            after:h-0.5
            after:bg-orange-700
            after:left-1/2
            after:bottom-[-4px]
            after:-translate-x-1/2
            after:transition-all
            after:duration-400
            after:will-change-[width]
            hover:after:w-full
          "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`
        py-2 pl-2 pr-4 rounded-2xl bg-neutral-900 border border-neutral-800 
        fixed left-4 right-4 bottom-4 z-50 md:hidden
        transition-all duration-300 ease-in-out will-change-[max-height]
        ${isMenuOpen ? "max-h-[500px]" : "max-h-[76px]"}
      `}
      >
        {/* Menu Content (Navigation Links) */}
        <div
          className={`
          overflow-hidden transition-all duration-300 ease-in-out will-change-[opacity,max-height]
          ${
            isMenuOpen
              ? "opacity-100 max-h-[400px] mb-4"
              : "opacity-0 max-h-0 mb-0"
          }
        `}
        >
          <nav className="flex flex-col gap-4 items-center pt-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-5 group cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="overflow-hidden h-8">
                  <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform group-hover:-translate-y-1/2">
                    <span className="text-lg font-semibold text-amber-50 mb-1.5">
                      {item.label}
                    </span>
                    <span className="text-lg font-semibold text-orange-600 mb-1.5">
                      {item.label}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="pt-4 pb-4">
            <div className="h-px rounded bg-neutral-800 w-full" />
          </div>
        </div>

        {/* Bottom Bar (Always Visible) */}
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="h-15 w-15 rounded-lg bg-transparent overflow-hidden relative shrink-0">
              <Image
                src="/ym1.png"
                alt="Yassir Mastadi profile picture"
                fill
                sizes="60px"
                className="object-cover object-center"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-1.5 w-[180px] sm:w-[340px] relative">
              <Link
                href="/"
                className="text-sm sm:text-base font-semibold text-neutral-100 uppercase truncate hover:text-orange-500 transition-colors"
              >
                Yassir Mastadi
              </Link>

              {/* Scrolling Text */}
              <div className="flex justify-center items-center h-4 overflow-hidden relative w-full">
                {/* Gradient Overlays */}
                <div className="absolute left-0 h-full w-6 sm:w-8 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
                <div className="absolute right-0 h-full w-6 sm:w-8 bg-gradient-to-l from-neutral-900 to-transparent z-10" />

                {/* Scrolling Text Content */}
                <div className="flex animate-scroll will-change-transform">
                  <p className="text-[9px] sm:text-xs tracking-wider sm:tracking-widest text-neutral-300 uppercase whitespace-nowrap pr-2 sm:pr-1.5">
                    <span className="hidden sm:inline">
                      Full Stack Developer, React Specialist, Next.js Master,
                      API Designer,
                    </span>
                    <span className="sm:hidden">
                      Full Stack • React • Next.js •
                    </span>
                  </p>
                  <p className="text-[9px] sm:text-xs tracking-wider sm:tracking-widest text-neutral-300 uppercase whitespace-nowrap pr-2 sm:pr-1.5">
                    <span className="hidden sm:inline">
                      Full Stack Developer, React Specialist, Next.js Master,
                      API Designer,
                    </span>
                    <span className="sm:hidden">
                      Full Stack • React • Next.js •
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-7 h-7 text-neutral-100 hover:text-neutral-400 transition-all duration-300 cursor-pointer shrink-0"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              // Menu Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="w-6 h-6 fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
