'use client';
import { SpeedInsights } from "@vercel/speed-insights/next"
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Hero from '../components/section/Hero';
import Contact from '../components/section/Contact';

const About = dynamic(() => import('../components/section/About'), {
  loading: () => <div className="min-h-screen bg-neutral-50 mt-4" />,
});

const Tech = dynamic(() => import('../components/section/Tech'), {
  loading: () => <div className="min-h-screen bg-neutral-900" />,
});

const Projects = dynamic(() => import('../components/section/Projects'), {
  loading: () => <div className="min-h-screen bg-black" />,
});

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Main container */}
      <main 
        ref={mainRef}
        className='w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar'
      >
        <SpeedInsights />
        {/* Hero */}
        <section id="Home" className='md:snap-start left-1/2 -translate-x-1/2 md:px-4 py-4 w-full relative'>
          <Hero/>
        </section>
        
        {/* About */}
        <section id="About" className='md:snap-start left-1/2 -translate-x-1/2 md:px-4 py-4 w-full relative'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut" 
            }}
            className='lg:[clip-path:polygon(4rem_0px,calc(50%_-_15rem)_0px,calc(50%_-_13.5rem)_2.75rem,calc(50%_+_13.5rem)_2.75rem,calc(50%_+_15rem)_0px,calc(100%_-_4rem)_0px,100%_4rem,100%_100%,calc(100%_-_4rem)_100%,4rem_100%,0px_100%,0px_4rem)]'
          >
            <About/>
          </motion.div>
        </section>
        
        {/* Tech */}
        <section id="Tech" className='md:snap-start left-1/2 -translate-x-1/2 md:px-4 py-4 w-full relative'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className='lg:[clip-path:polygon(4rem_0px,calc(50%_-_15rem)_0px,calc(50%_-_13.5rem)_2.75rem,calc(50%_+_13.5rem)_2.75rem,calc(50%_+_15rem)_0px,calc(100%_-_4rem)_0px,100%_4rem,100%_calc(100%_-_4rem),calc(100%_-_4rem)_100%,4rem_100%,0px_calc(100%_-_4rem),0px_4rem)]'
          >
            <Tech/>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="Projects" className='md:snap-start left-1/2 -translate-x-1/2 md:px-4 py-4 w-full relative'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Projects/>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="Contact" className='md:snap-start left-1/2 -translate-x-1/2 md:px-4 py-4 w-full relative'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className='bg-neutral-900/50 border border-neutral-800 shadow-sm lg:[clip-path:polygon(4rem_0px,calc(50%_-_15rem)_0px,calc(50%_-_13.5rem)_2.75rem,calc(50%_+_13.5rem)_2.75rem,calc(50%_+_15rem)_0px,calc(100%_-_4rem)_0px,100%_4rem,100%_calc(100%_-_4rem),calc(100%_-_4rem)_100%,4rem_100%,0px_calc(100%_-_4rem),0px_4rem)]'
          >
            <Contact/>
          </motion.div>
        </section>
      </main>
    </>
  );
}