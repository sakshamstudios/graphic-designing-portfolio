import { useState } from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import Slice from "../asset/Slice.png";
import Catchup from "../asset/Catchup.png";
import Garnier from "../asset/Garnier.png";
import Punch from "../asset/punch .png";

type Project = {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
  tags: string[];
  color: string;
  isSub?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Brand Identity System',
    category: 'Branding',
    images: [Catchup, Slice, Garnier, Punch],
    description: 'Complete brand identity design for a tech startup',
    tags: ['Logo Design', 'Brand Guidelines', 'Typography'],
    color: 'from-neon-purple to-neon-pink',
    isSub: false,
  },
  {
    id: 11,
    title: 'Slice Design',
    category: 'Branding',
    images: [Slice],
    description: 'Slice branding visual',
    tags: ['Logo Design'],
    color: 'from-yellow-400 to-orange-500',
    isSub: true,
  },
  {
    id: 12,
    title: 'Catchup Design',
    category: 'Branding',
    images: [Catchup],
    description: 'Catchup product branding',
    tags: ['Packaging'],
    color: 'from-red-400 to-red-600',
    isSub: true,
  },
  {
    id: 13,
    title: 'Garnier Design',
    category: 'Branding',
    images: [Garnier],
    description: 'Garnier marketing design',
    tags: ['Typography'],
    color: 'from-green-400 to-green-600',
    isSub: true,
  },
  {
    id: 14,
    title: 'Punch Design',
    category: 'Branding',
    images: [Punch],
    description: 'Punch label design',
    tags: ['Illustration'],
    color: 'from-pink-400 to-pink-600',
    isSub: true,
  },
  {
    id: 2,
    title: 'Digital Art Collection',
    category: 'Digital Art',
    images: ['https://images.pexels.com/photos/3618918/pexels-photo-3618918.jpeg'],
    description: 'Abstract digital artwork series exploring color and form',
    tags: ['Digital Art', 'Illustration', 'Abstract'],
    color: 'from-neon-cyan to-neon-green',
  },
];

export const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);

  const categories = ['All', 'Branding', 'Digital Art', 'UI/UX', 'Print Design', 'Web Design', 'Packaging'];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return !project.isSub;
    if (filter === 'Branding') return project.category === 'Branding' && project.title !== 'Brand Identity System';
    return project.category === filter;
  });

  const nextImage = () => {
    if (modalProject) {
      setIndex((prev) => (prev + 1) % modalProject.images.length);
    }
  };

  const prevImage = () => {
    if (modalProject) {
      setIndex((prev) => (prev - 1 + modalProject.images.length) % modalProject.images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-scroll-animation>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of creative projects that push boundaries and tell compelling stories
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-scroll-animation>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white'
                  : 'text-gray-400 hover:text-white neon-border hover:bg-neon-purple/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              onClick={() => { setModalProject(project); setIndex(0); }}
              className="group relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              data-scroll-animation
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images?.[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center text-white p-4">
                    <ExternalLink className="mx-auto mb-2" size={24} />
                    <p className="font-semibold">View Project</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-neon-purple font-semibold">{project.category}</span>
                  <Heart className="text-gray-400 hover:text-neon-pink transition-colors cursor-pointer" size={18} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs bg-dark-700 text-gray-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {modalProject && (
  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">
    <div className="fixed inset-0 z-40" onClick={() => setModalProject(null)} />

    <button
      onClick={() => setModalProject(null)}
      className="absolute top-5 right-6 text-white text-4xl z-50"
    >
      &times;
    </button>

    <div className="relative z-50 max-w-screen-lg w-full">
      <h2 className="text-white text-center text-2xl font-bold mb-4">{modalProject.title}</h2>

      {filter === 'All' ? (
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevImage}
            className="text-white text-4xl font-bold hover:text-neon-cyan"
          >
            ←
          </button>
          <img
            src={modalProject.images[index]}
            alt="slide"
            className="max-h-[80vh] w-auto rounded-xl object-contain shadow-lg"
          />
          <button
            onClick={nextImage}
            className="text-white text-4xl font-bold hover:text-neon-cyan"
          >
            →
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src={modalProject.images[0]}
            alt="slide"
            className="max-h-[80vh] w-auto rounded-xl object-contain shadow-lg"
          />
        </div>
      )}
    </div>
  </div>
)}
</div>  {/* ← This closes container mx-auto */}
</section>  /* ← This was missing and causing ALL errors */

  )}
