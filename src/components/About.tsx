import { Palette, Layers, Zap, Package, Coffee, Users } from 'lucide-react';
import s from "../asset/saksham.jpg";

const designTools = [
  { name: 'Photoshop', icon: '🎨', proficiency: 95 },
  { name: 'Illustrator', icon: '✏️', proficiency: 80 },
  { name: 'Figma', icon: '🎯', proficiency: 50 },
  { name: 'After Effects', icon: '🎬', proficiency: 40 },
  //{ name: 'Sketch', icon: '📐', proficiency: 80 },
  //{ name: 'InDesign', icon: '📄', proficiency: 90 },
];

const stats = [
  { icon: Package, label: 'Stylish Product Packs', value: '30+' },
  { icon: Users, label: 'Happy Clients', value: '8+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '15+' },
  { icon: Zap, label: 'Projects Done', value: '10+' },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-dark-800/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8" data-scroll-animation>
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden">
                <img
                  src={s}
                  alt="Alex Morgan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20"></div>
              </div>
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-purple rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-effect p-4 rounded-xl text-center group hover:glow-effect transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="mx-auto mb-2 text-neon-purple group-hover:text-neon-cyan transition-colors" size={24} />
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8" data-scroll-animation>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">About Me</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate creative designer with over 8 years of experience in bringing 
                  visual stories to life. My journey began with a simple love for art and has 
                  evolved into a career focused on creating meaningful connections through design.
                </p>
                <p>
                  From brand identity to digital experiences, I believe that great design isn't 
                  just about looking good – it's about solving problems, telling stories, and 
                  creating emotional connections that resonate with people.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring new art galleries, 
                  experimenting with photography, or enjoying a perfect cup of coffee while 
                  sketching my next big idea.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="relative">
              <div className="text-4xl font-bold gradient-text opacity-0 transform ">
                SG
              </div>
              <div className="absolute inset-0 text-2xl font-mono text-neon-purple animate-pulse">
                // Creative Designer
              </div>
            </div>

            {/* Skills Icons */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Palette className="mr-3 text-neon-purple" />
                Design Tools Mastery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {designTools.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="group glass-effect p-4 rounded-xl hover:glow-effect transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 group-hover:animate-bounce">{tool.icon}</div>
                      <div className="font-semibold text-white mb-2">{tool.name}</div>
                      <div className="w-full bg-dark-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-neon-purple to-neon-cyan h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${tool.proficiency}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{tool.proficiency}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                <Layers className="text-neon-cyan" size={16} />
                <span className="text-sm">2+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
                <Zap className="text-neon-purple" size={16} />
                <span className="text-sm"> DesignNest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};