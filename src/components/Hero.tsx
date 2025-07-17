import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';



export const Hero = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-zinc-800 opacity-90 z-0" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 z-0" />

      {/* Floating Red Orb */}
      <motion.div
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div className="relative w-40 h-40 md:w-56 md:h-56 animate-float">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-white to-red-500 rounded-full blur-2xl opacity-60" />
          <div className="absolute inset-3 bg-black rounded-full flex items-center justify-center border-4 border-red-600/30 shadow-xl shadow-red-600/30">
            <span className="text-white text-7xl md:text-9xl font-luxury tracking-widest">S</span>
          </div>
        </div>
      </motion.div>

      {/* Random white particle sparkles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-20 blur-sm z-0"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: ['0%', '30%', '0%'],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 2,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={showText ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="relative z-20 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl md:text-7xl font-luxury text-white mb-4 tracking-wide"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-white to-red-600 drop-shadow-[0_4px_20px_rgba(220,38,38,0.5)]">
            Saksham Verse
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light"
        >
          Creative Designer & Visual Storyteller
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-gray-400 max-w-2xl mx-auto mt-4"
        >
          Crafting stunning visual experiences that blend creativity with strategy. From brand identity to digital art, I bring ideas to life through innovative design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-white rounded-full text-black font-semibold shadow-md shadow-red-600/30 hover:scale-105 hover:shadow-lg transition-all duration-300">
            View My Work
          </button>
          <button className="px-8 py-3 border border-red-600 rounded-full text-white font-semibold backdrop-blur-md hover:bg-red-600/10 transition-all duration-300">
            Get In Touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Icon */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="text-red-600 animate-glow" size={32} />
      </motion.div>
    </section>
  );
};
