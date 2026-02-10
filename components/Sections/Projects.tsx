import React from 'react';
import { Smartphone, Zap, Server, ArrowUpRight } from 'lucide-react';
import { Section } from '../Layout/Section';

export const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="flex flex-col items-start mb-12">
        <span className="px-3 py-1 rounded-full bg-zinc-100 text-brand-navy text-xs font-bold mb-4">
           Current Development
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">
          Projects & Initiatives
        </h2>
      </div>

      {/* Main Project Card - Bento Style */}
      <div className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-zinc-900/20 group">
        
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green"></span>
               </div>
               <span className="text-brand-green font-bold text-sm tracking-wide uppercase">Active Status</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-6">Talibon Respo App</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
              A community-focused application designed to support safety, emergency response, and local services.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
               {['Safety', 'Real-time', 'Community'].map((tag) => (
                 <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-zinc-300">
                   {tag}
                 </span>
               ))}
            </div>

            <button className="flex items-center gap-2 text-white font-semibold hover:text-brand-green transition-colors group/btn">
              View Technical Specs 
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </button>
          </div>

          {/* Feature Grid inside Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                <Smartphone className="w-8 h-8 text-brand-green mb-4" />
                <h4 className="font-bold text-lg mb-2">Mobile First</h4>
                <p className="text-zinc-400 text-sm">Accessible across all devices for maximum reach.</p>
             </div>
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                <Server className="w-8 h-8 text-brand-green mb-4" />
                <h4 className="font-bold text-lg mb-2">Scalable</h4>
                <p className="text-zinc-400 text-sm">Built to expand to neighboring regions.</p>
             </div>
             <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors sm:col-span-2">
                <Zap className="w-8 h-8 text-brand-green mb-4" />
                <h4 className="font-bold text-lg mb-2">Rapid Response</h4>
                <p className="text-zinc-400 text-sm">Direct communication channels for emergency situations.</p>
             </div>
          </div>
        </div>
      </div>
    </Section>
  );
};