import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationComplete(true), 2000);
    const timer2 = setTimeout(() => setTextVisible(true), 2500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Character/Object */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-2000 ${
        animationComplete ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="relative">
          {/* Main floating element */}
          <div className="w-32 h-32 md:w-48 md:h-48 relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple via-neon-cyan to-neon-pink rounded-full opacity-80 blur-sm"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-neon-purple via-neon-cyan to-neon-pink rounded-full flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold text-white">S</span>
            </div>
          </div>
          
          {/* Particle trails */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="particle animate-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className={`relative z-10 text-center transition-all duration-1000 ${
        textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-5xl md:text-8xl font-bold mb-6">
          <span className="gradient-text">Saksham Studios</span>
        </h1>
        <div className="relative mb-8">
          <p className="text-xl md:text-2xl text-gray-300 font-light overflow-hidden whitespace-nowrap">
            <span className={`inline-block ${textVisible ? 'animate-typewriter' : ''}`}>
              Creative Designer & Visual Storyteller
            </span>
          </p>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
        </div>
        
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 px-4">
          Crafting stunning visual experiences that blend creativity with strategy. 
          From brand identity to digital art, I bring ideas to life through innovative design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full text-white font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="px-8 py-3 neon-border rounded-full text-white font-semibold hover:bg-neon-purple/10 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-neon-purple" size={32} />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon-cyan rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-neon-pink rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/6 w-3 h-3 bg-neon-purple rounded-full opacity-80 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};