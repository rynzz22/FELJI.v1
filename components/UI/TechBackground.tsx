import React from 'react';

export const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
      {/* Soft Grid */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(#1B2538 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      {/* Soft Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-navy/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      {/* Subtle Floating Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-zinc-100 opacity-50 animate-blob"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full border border-zinc-100 opacity-50 animate-blob animation-delay-2000"></div>

    </div>
  );
};