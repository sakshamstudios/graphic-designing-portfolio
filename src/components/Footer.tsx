import { Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">SG</div>
            <p className="text-gray-400 text-sm">
              Crafting visual experiences with passion
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="text-neon-pink" size={16} />
              <span>by Saksham Goswami</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:glow-effect transition-all duration-300 group"
            >
              <ArrowUp className="text-neon-purple group-hover:text-neon-cyan" size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Saksham Goswami. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};