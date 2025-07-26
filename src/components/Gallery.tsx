// 📁 Gallery.tsx or wherever your component is
import { useState } from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

import Slice from "../asset/Slice.png";
import Catchup from "../asset/Catchup.png";
import Garnier from "../asset/Garnier.png";
import Punch from "../asset/punch.png";
import Cetaphil from "../asset/Cetaphil.png";
import Himalaya from "../asset/Himalaya.png"; 
import Redbull from "../asset/Redbull.png"; 
import Raw_Mixed_Fruit from "../asset/Raw_Mixed_Fruit.png"; 
import braclate_Heropage from "../asset/braclate_Heropage.png"; 
import Rocket_heropage from "../asset/Rocket_heropage.png"; 
import Divine_Light from "../asset/Divine_Light.png"; 
import PULSE_Verticle from "../asset/PULSE_Verticle.png"; 

// --- Shared type ---
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

// --- Original Data for Main Section (untouched) ---
const projects: Project[] = [
  {
    id: 1,
    title:        'Brand Identity System',
    category:     'Branding',
    images:       [Catchup, Slice, Garnier,Redbull],
    description:  'Complete brand identity design for a famous products',
    tags:         ['Logo Design', 'Brand Guidelines', 'Typography'],
    color:        'from-neon-purple to-neon-pink',
    isSub:        false,
  },
  { id: 11, title: 'Slice Design',   category: 'Branding',    images: [Slice],       description: 'Slice branding visual',      tags: ['Logo Design'],     color: 'from-yellow-400 to-orange-500',    isSub: true },
  { id: 12, title: 'Catchup Design', category: 'Branding',    images: [Catchup],     description: 'Catchup product branding',   tags: ['Packaging'],       color: 'from-red-400 to-red-600',          isSub: true },
  { id: 13, title: 'Garnier Design', category: 'Branding',    images: [Garnier],     description: 'Garnier marketing design',   tags: ['Typography'],      color: 'from-green-400 to-green-600',      isSub: true },
  { id: 14, title: 'Redbull Design', category: 'Branding',    images: [Redbull],     description: 'Redbull marketing design',   tags: ['Typography'],      color: 'from-green-400 to-green-600',      isSub: true },
  
  {
    id: 2,
    title: 'Social Media Post Collection',
    category: 'Social Media Post',
    images: [Cetaphil, Himalaya,Punch,Raw_Mixed_Fruit,PULSE_Verticle],
    description: 'Social media Post of many Famous products',
    tags: ['Social media post', 'Photoshop', 'Typography'],
    color: 'from-neon-cyan to-neon-green',
  },
  { id: 15, title: 'Himalaya Facewash',   category: 'Social Media Post', images: [Himalaya],         description: 'Himalaya Facewash social media post ',   tags: ['Photoshop'],    color: 'from-pink-400 to-pink-600',    isSub: true },
  { id: 16, title: 'Cetaphil',            category: 'Social Media Post', images: [Cetaphil],         description: 'Cetaphil Facewash social media post',    tags: ['Photoshop'],    color: 'from-blue-400 to-blue-600',    isSub: true },
  { id: 17, title: 'Punch Design',        category: 'Social Media Post', images: [Punch],            description: 'Punch label design',                     tags: ['Illustration'], color: 'from-pink-400 to-pink-600',    isSub: true },
  { id: 17, title: 'Raw Mixed Fruit',     category: 'Social Media Post', images: [Raw_Mixed_Fruit],  description: 'Raw Mixed Fruit design',                 tags: ['photoshop'],    color: 'from-pink-400 to-pink-600',    isSub: true },
  { id: 17, title: 'PULSE',               category: 'Social Media Post', images: [PULSE_Verticle],   description: 'PULSE Verticle cool design',             tags: ['photoshop'],    color: 'from-green-400 to-green-600',  isSub: true },


   {
    id: 3,
    title:          'UI Concepts',
    category:       'UI/UX',
    images:         ['Rocket_heropage,braclate_Heropage'],
    description:    'Modern UI kit for dashboard layout',
    tags:           ['UI', 'Dashboard', 'Figma'],
    color:          'from-purple-500 to-indigo-500',
  },
  { id: 15, title: 'Space Realted Startup heropage', category: 'UI/UX', images: [Rocket_heropage], description: 'Innovating the future of space exploration — one mission at a time', tags: ['Photoshop','heropage'], color: 'from-pink-400 to-pink-600', isSub: true },
  { id: 16, title: 'braclate_Heropage',              category: 'UI/UX', images: [braclate_Heropage], description: 'A stylish accessory brand offering handcrafted bracelets that reflect personal style and elegance', tags: ['Photoshop'], color: 'from-blue-400 to-blue-600', isSub: true },


   {
    id: 4,
    title: 'AD Design',
    category: 'AD Design',
    images: ['Divine_Light'],
    description: 'A visually striking ad design crafted to capture attention',
    tags: ['photoshop', 'AD'],
    color: 'from-green-300 to-emerald-600',
  },
  { id: 15, title: 'Divine Light', category: 'AD Design', images: [Divine_Light], description: 'Lighting a diya symbolizes the removal of darkness and the arrival of hope', tags: ['Photoshop','AD'], color: 'from-pink-400 to-pink-600', isSub: true },
];


// --- Additional Projects for More Projects section ---

// --- Shared type ---
type Project_copy = {
  id: number;
  title: string;
  category: string;
  images: string[];
  description: string;
  tags: string[];
  color: string;
  isSub?: boolean;
};

const moreProjects: Project_copy[] = [
  {
    id: 100,
    title: 'UI Concepts',
    category: 'UI/UX',
    images: ['https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg'],
    description: 'Modern UI kit for dashboard layout',
    tags: ['UI', 'Dashboard', 'Figma'],
    color: 'from-purple-500 to-indigo-500',
  },
  
  {
    id: 101,
    title: 'Packaging Prototype',
    category: 'Packaging',
    images: ['https://images.pexels.com/photos/1125133/pexels-photo-1125133.jpeg'],
    description: 'Eco-friendly packaging design for new product line',
    tags: ['Sustainable', 'Print Ready'],
    color: 'from-green-300 to-emerald-600',
  },

  {
    id: 102,
    title: 'AD Design',
    category: 'AD Design',
    images: ['https://images.pexels.com/photos/1125133/pexels-photo-1125133.jpeg'],
    description: 'A visually striking ad design crafted to capture attention',
    tags: ['photoshop', 'AD'],
    color: 'from-green-300 to-emerald-600',
  },
  { id: 15, title: 'Divine Light', category: 'Divine Light', images: [Divine_Light], description: 'Lighting a diya symbolizes the removal of darkness and the arrival of hope', tags: ['Photoshop','AD'], color: 'from-pink-400 to-pink-600', isSub: true },
];

// --- Reusable Section Component ---
const FeaturedWorkSection = ({
  title,
  description,
  projectList,
  uniqueId,
}: {
  title: string;
  description: string;
  projectList: Project[];
  uniqueId: string;
}) => {
  const [filter, setFilter] = useState('All');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const categories = ['All', 'Branding', 'Social Media Post', 'UI/UX', 'AD Design', 'Web Design', 'Packaging'];

  const filteredProjects = projectList.filter((project) => {
  if (filter === 'All')                   return !project.isSub;
  if (filter === 'Branding')              return project.category === 'Branding' &&              project.title !==   'Brand Identity System';
  if (filter === 'Social Media Post')   { return project.category === 'Social Media Post' &&     project.title !==   'Social Media Post Collection';}
  if (filter === 'AD Design')           { return project.category === 'AD Design' &&             project.title !==   'AD Design'}
  if (filter === 'UI/UX')               { return project.category === 'UI/UX' &&                 project.title !==   'UI/UX';}

  return project.category.toLowerCase() === filter.toLowerCase();
});

  const nextImage = () => {
    if (modalProject) {
      setIndex((prev) => (prev + 1) % modalProject.images.length);
      setImageLoaded(false);
    }
  };

  const prevImage = () => {
    if (modalProject) {
      setIndex((prev) => (prev - 1 + modalProject.images.length) % modalProject.images.length);
      setImageLoaded(false);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  return (
    <section id={uniqueId} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">{title}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setModalProject(project);
                setIndex(0);
                setImageLoaded(false);
              }}
              className="group relative overflow-hidden rounded-2xl glass-effect hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-60 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />

               {/* <img
               src={project.images[0]}
               alt={project.title}
               className={`w-full ${
               project.category === "Social Media Post"
               ? "h-auto object-contain"
               : "h-56 object-cover object-top"
               } transition-transform duration-500 group-hover:scale-105`}
               /> */}

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
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4 overflow-y-auto">
            <div className="fixed inset-0 z-40" onClick={() => setModalProject(null)} />
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-5 right-6 text-white text-4xl z-50"
            >
              &times;
            </button>
            <div className="relative z-50 max-w-screen-lg w-full">
              <h2 className="text-white text-center text-xl sm:text-2xl font-bold mb-4">{modalProject.title}</h2>
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative"
                {...swipeHandlers}
              >
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-40">
                    <div className="loader border-4 border-t-transparent rounded-full w-8 h-8 animate-spin border-white" />
                  </div>
                )}
                {modalProject.images.length > 1 && (
                  <button onClick={prevImage} className="text-white text-4xl font-bold hover:text-neon-cyan px-4 py-2 z-50">←</button>
                )}
                <img
                  src={modalProject.images[index]}
                  alt="slide"
                  onLoad={() => setImageLoaded(true)}
                  className="h-[75vh] sm:h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-xl transition-all duration-300 ease-in-out"
                />
                {modalProject.images.length > 1 && (
                  <button onClick={nextImage} className="text-white text-4xl font-bold hover:text-neon-cyan px-4 py-2 z-50">→</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// --- Main Exported Gallery Component ---
export const Gallery = () => {
  return (
    <>
      <FeaturedWorkSection
        title="Featured Work"
        description="A showcase of creative projects that push boundaries and tell compelling stories"
        projectList={projects}
        uniqueId="gallery-original"
      />
      <FeaturedWorkSection
        title="Free Stock by Me"
        description="Download high-quality product photos captured by me — free to use for personal and commercial projects. No attribution needed. ✨"
        projectList={moreProjects}
        uniqueId="gallery-more"
      />
    </>
  );
};
