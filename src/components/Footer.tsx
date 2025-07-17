import { Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-dark-900 border-t border-white/10 py-12 px-6 backdrop-blur-md">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand Identity */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-extrabold gradient-text tracking-widest mb-2">SG</div>
            <p className="text-gray-400 text-sm font-light">
              Designing impactful digital experiences with precision & style.
            </p>
          </div>

          {/* Credits & Scroll Button */}
          <div className="flex flex-col items-center md:flex-row gap-4 md:gap-6">
            {/* Credit Line */}
            <div className="flex items-center text-gray-400 text-sm space-x-2">
              <span>Made with</span>
              <Heart className="text-neon-pink animate-pulse" size={16} />
              <span>by Saksham Goswami</span>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full glass-effect shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg group"
              aria-label="Scroll to top"
            >
              <ArrowUp
                size={20}
                className="text-neon-purple transition-all duration-300 group-hover:translate-y-[-4px] group-hover:text-neon-cyan"
              />
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 <span className="text-white font-medium">Saksham Goswami</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
