import React from 'react';
import { ShieldCheck, Cpu, Network } from 'lucide-react';
import { Section } from '../Layout/Section';

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'We Solve',
    description: 'Addressing real-world problems with direct, effective technological interventions.',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'We Create',
    description: 'Building robust digital infrastructure designed for longevity and scalability.',
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'We Provide',
    description: 'Delivering accessible tools that empower communities to function efficiently.',
  },
];

export const Mission: React.FC = () => {
  return (
    <Section id="mission" className="bg-transparent">
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-green mb-4">Our Core Directive</h2>
        <p className="text-3xl md:text-4xl font-bold text-brand-navy">
           Helping people work safer and with ease through practical solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="group glass-card p-8 rounded-[2rem] hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-navy/5 hover:-translate-y-2"
          >
            <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-brand-green transition-colors duration-300 shadow-sm border border-white/20">
              {value.icon}
            </div>
            
            <h3 className="text-xl font-bold text-brand-navy mb-3">{value.title}</h3>
            <p className="text-zinc-500 leading-relaxed text-sm font-medium">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};