
import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="h-screen flex flex-col items-center justify-center text-center p-4">
      <div className="animate-fade-in-down">
        <h2 className="text-3xl md:text-5xl text-pink-500 font-great-vibes">A Very Special Day For</h2>
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-great-vibes text-pink-400 my-4 text-glow animate-shine">
          Sabitha
        </h1>
        <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-rose-400">
            <Sparkles className="w-6 h-6 animate-pulse"/>
            <span className="font-semibold">Happy Birthday!</span>
            <Sparkles className="w-6 h-6 animate-pulse"/>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-pink-200">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </header>
  );
};

export default Hero;
