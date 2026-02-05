'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Composant Status Badge
function StatusBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <span
        className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5"
        role="status"
        aria-label="Status: Available"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-full w-full bg-green-600"></span>
      </span>
      <p className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-white">
        System Online / Open to Work
      </p>
    </div>
  );
}

function Hero() {
  return (
    <>
      <div className="bg-neutral-900 relative w-full min-h-screen lg:h-full md:[clip-path:polygon(4rem_0px,calc(50%_-_15rem)_0px,calc(50%_-_13.5rem)_2.75rem,calc(50%_+_13.5rem)_2.75rem,calc(50%_+_15rem)_0px,calc(100%_-_4rem)_0px,100%_4rem,100%_calc(100%_-_4rem),calc(100%_-_4rem)_100%,4rem_100%,0px_calc(100%_-_4rem),0px_4rem)] p-2 overflow-hidden">

        {/* Background Image - Visible uniquement sur LG */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            alt="saad-eddine el oddy background"
            src="/saad3.png"
            fill
            className="object-cover object-[50%_20%] md:object-[70%_50%] scale-100"
            priority
            quality={75}
            sizes="100vw"
          />
          {/* Light overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/70 via-black/50 to-black/30 md:from-transparent md:via-black/20 md:to-black/50" />
        </div>

        <div className="relative w-full h-full rounded-2xl py-2 z-10">
          {/* Mobile Navigation */}
          <nav className="flex md:hidden justify-between items-center">
            <Link
              href="/"
              className="absolute top-4 left-4 pointer-events-auto z-10"
            >
              <Image
                alt="saad-eddine el oddy logo"
                src="/SE.png"
                width={50}
                height={50}
                priority
              />
            </Link>
            <Link
              href="/#Contact"
              className="absolute top-4 right-4 bg-transparent border border-neutral-50 px-4 h-11 flex justify-center items-center transition-all duration-300 pointer-events-auto hover:bg-neutral-50 hover:text-neutral-900 z-10"
            >
              <span className="text-sm font-bold text-[clamp(14px,1.2vw,18px)]">
                Get in touch
              </span>
            </Link>
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:px-10 lg:px-16 md:mt-0 lg:mt-0 justify-between items-start p-4">
            <Link href="/" className="pointer-events-auto">
              <Image
                alt="saad-eddine el oddy logo"
                src="/SE.png"
                width={60}
                height={60}
                priority
              />
            </Link>

            <Link
              href="/#Contact"
              className="group inline-flex items-center justify-center space-x-3 text-xs font-bold uppercase tracking-widest border border-white/30 px-4 py-3 hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto"
            >
              Get in touch
            </Link>
          </nav>

          {/* Hero Content */}
          <div className="flex flex-col items-start justify-end md:justify-center pb-24 md:pb-0 mt-auto md:mt-0 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 min-h-[80vh] md:min-h-0">
            {/* Status Badge */}
            <StatusBadge className="mt-2 mb-4 animate-fadeIn" />

            {/* Content Wrapper */}
            <div className="flex flex-col w-full gap-6">

              {/* Title and Content */}
              <div className="w-full lg:max-w-2xl">
                <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold uppercase leading-[1.1] tracking-tighter text-neutral-50 animate-slideUp">
                  Full Stack & Systems Engineer
                </h1>

                {/* Description */}
                <p
                  className="text-base md:text-lg text-neutral-100 font-light mt-4 max-w-xl animate-slideUp"
                  style={{ animationDelay: "0.1s" }}
                >
                  Building robust, scalable web and system solutions with a focus on clean architecture and high performance. I bridge the gap between software engineering and cloud infrastructure to create powerful digital products. Based in Morocco.
                </p>

                {/* Download Resume */}
                <div
                  className="mt-8 mb-8 w-full lg:max-w-md animate-slideUp"
                  style={{ animationDelay: "0.2s" }}
                >
                  <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest ml-1 mb-3">
                    {"/// Download Resume"}
                  </p>
                  <div className="flex flex-col gap-2 w-full pointer-events-auto">
                    <Link
                      href="/files/Saad-Eddine-El-oddy-English.pdf"
                      download="Saad-Eddine-El-oddy-English.pdf"
                      className="group relative overflow-hidden bg-white text-black px-4 py-3 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                    >
                      <span>English Version</span>
                      <svg
                        className="w-3 h-3 transition-transform group-hover:translate-y-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="/files/Saad-Eddine-El-oddy-Francais.pdf"
                      download="YSaad-Eddine-El-oddy-Francais.pdf"
                      className="group px-4 py-3 border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Français</span>
                      <svg
                        className="w-3 h-3 text-white group-hover:text-white transition-colors group-hover:translate-y-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* More About Me */}
                <div
                  className="mb-8 w-full lg:max-w-50 animate-slideUp pointer-events-auto"
                  style={{ animationDelay: "0.3s" }}
                >
                  <Link
                    href="#About"
                    className="group inline-flex items-center justify-center space-x-3 text-xs font-bold uppercase tracking-widest border border-white/30 px-4 py-3 hover:bg-white hover:text-black transition-all duration-300 w-full"
                  >
                    <span>More About Me</span>
                    <span className="group-hover:translate-y-1 transition-transform duration-300">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>

                {/* Footer */}
                <div
                  className="border-t border-white/10 pt-4 w-full animate-slideUp"
                  style={{ animationDelay: "0.4s" }}
                >
                  <span className="text-xs font-mono text-gray-500">
                    © 2026 Saad-Eddine El oddy. All Rights Reserved.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
