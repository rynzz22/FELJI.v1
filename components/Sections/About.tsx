import React from 'react';
import { Section } from '../Layout/Section';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
           <div className="w-12 h-1 bg-brand-green rounded-full mb-8"></div>
           <h2 className="text-4xl font-bold text-brand-navy mb-8 leading-tight">
             Engineered by the next generation of innovators.
           </h2>
           <p className="text-zinc-500 mb-6 text-lg leading-relaxed">
             FELJI Tech is an early-stage startup founded by two 19-year-old innovators. We move beyond theoretical concepts to address real-world problems. 
           </p>
           <p className="text-zinc-500 text-lg leading-relaxed">
             Our focus lies strictly on safety, efficiency, and accessibility, ensuring that our digital solutions translate into tangible community benefits.
           </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           {[
             { name: "Felecito Caturza Jr.", role: "Co-Founder" },
             { name: "Aj Rienze Josol", role: "Co-Founder" }
           ].map((person, i) => (
             <div key={i} className="bg-zinc-50 p-8 rounded-[2rem] border border-zinc-100 hover:border-brand-green/30 transition-all hover:shadow-lg text-center group">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-sm text-2xl font-bold text-brand-navy group-hover:text-brand-green transition-colors border border-zinc-100">
                  {person.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-brand-navy">{person.name}</h4>
                <span className="inline-block mt-2 px-3 py-1 bg-white rounded-full text-xs font-semibold text-zinc-500 border border-zinc-100">{person.role}</span>
             </div>
           ))}
           
           <div className="col-span-1 sm:col-span-2 bg-brand-navy/5 p-8 rounded-[2rem] text-center">
              <p className="text-brand-navy font-medium italic">
                "Dedicated to providing reliable technology for Talibon and beyond."
              </p>
           </div>
        </div>

      </div>
    </Section>
  );
};