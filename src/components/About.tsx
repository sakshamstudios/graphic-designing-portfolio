import { Palette, Layers, Zap, Package, Coffee, Users } from 'lucide-react';
import s from "../asset/saksham.jpg";

const designTools = [
  { name: 'Photoshop', icon: '🎨', proficiency: 95 },
  { name: 'Illustrator', icon: '✏️', proficiency: 80 },
  { name: 'Figma', icon: '🎯', proficiency: 50 },
  { name: 'After Effects', icon: '🎬', proficiency: 40 },
];

const stats = [
  { icon: Package, label: 'Stylish Product Packs', value: '30+' },
  { icon: Users, label: 'Happy Clients', value: '8+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '15+' },
  { icon: Zap, label: 'Projects Done', value: '10+' },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black relative overflow-hidden text-white">
      {/* Soft Red Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image + Stats */}
          <div className="space-y-10">
            <div className="relative w-80 h-80 mx-auto rounded-[40px] overflow-hidden shadow-lg border-4 border-red-500/20">
              <img src={s} alt="Saksham" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 to-white/10 mix-blend-overlay" />
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-red-500 rounded-full blur-sm animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-white rounded-full blur-sm animate-ping" />
              <div className="absolute top-1/2 -left-6 w-3 h-3 bg-red-400 rounded-full blur-sm" />
            </div>

            <div className="grid grid-cols-2 gap-6 text-center">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl backdrop-blur-md border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                >
                  <stat.icon className="mx-auto mb-2 text-red-500" size={28} />
                  <div className="text-3xl font-bold font-luxury text-red-400">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-5xl font-luxury mb-6 bg-gradient-to-r from-red-600 via-white to-red-600 bg-clip-text text-transparent">About Me</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed font-light">
                <p>
                  I'm a passionate creative designer with over 8 years of experience in crafting
                  timeless brand stories. I blend artistry with strategy to create designs
                  that are both stunning and meaningful.
                </p>
                <p>
                  Whether it's building brand identities or delivering immersive digital experiences,
                  I design with purpose and a touch of elegance that resonates deeply.
                </p>
                <p>
                  Outside the screen, I dive into art galleries, street photography, and
                  soulful coffee—where ideas are born.
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="text-right">
              <div className="text-5xl font-luxury text-red-400 tracking-wider">SG</div>
              <div className="text-sm text-red-600 font-mono">// Creative Designer</div>
            </div>

            {/* Tool Mastery */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Palette className="mr-3 text-red-500" /> Design Tools Mastery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {designTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:scale-105 hover:shadow-xl transition-all"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{tool.icon}</div>
                      <div className="text-white font-medium mb-1">{tool.name}</div>
                      <div className="w-full bg-dark-600 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-red-600 to-white transition-all duration-1000"
                          style={{ width: `${tool.proficiency}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-400 mt-1">{tool.proficiency}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm backdrop-blur-md">
                <Layers className="text-red-400" size={16} />
                2+ Years Experience
              </div>
              <div className="flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm backdrop-blur-md">
                <Zap className="text-red-500" size={16} />
                DesignNest
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
