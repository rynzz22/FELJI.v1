import React from 'react';
import { ArrowRight, Activity } from 'lucide-react';
import { Section } from '../Layout/Section';

export const Hero: React.FC = () => {
  return (
    <Section className="min-h-[85vh] flex items-center pt-32 pb-10">
      <div className="w-full max-w-5xl text-left relative z-10">
        
        {/* Soft Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-semibold mb-8 shadow-sm animate-fade-in-up hover:border-brand-green/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            System Operational v1.0
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-navy mb-8 leading-[1.05] animate-fade-in-up [animation-delay:100ms]">
          Innovative technology<br />
          for <span className="text-brand-green relative inline-block">
            resilient
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-green opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span> communities.
        </h1>
        
        <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl mb-12 animate-fade-in-up [animation-delay:200ms]">
          We provide practical, reliable digital solutions to help citizens work safer and with greater ease.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 animate-fade-in-up [animation-delay:300ms]">
          <a
            href="#projects"
            className="group px-8 py-4 bg-brand-navy text-white rounded-full font-semibold shadow-xl shadow-brand-navy/15 hover:shadow-brand-navy/25 hover:-translate-y-1 transition-all flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-4 h-4 text-brand-green transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white text-zinc-600 border border-zinc-200 rounded-full font-semibold hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:-translate-y-1"
          >
            About Us
          </a>
        </div>

        {/* Decorative Floating Elements - Moved to right side to balance left text */}
        <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 hidden lg:block opacity-40 pointer-events-none animate-pulse-slow">
           <div className="w-[30rem] h-[30rem] rounded-full border border-zinc-100 flex items-center justify-center">
              <div className="w-[22rem] h-[22rem] rounded-full border border-dashed border-zinc-200"></div>
           </div>
        </div>

      </div>
    </Section>
  );
};