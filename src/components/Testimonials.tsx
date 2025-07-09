import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';





const testimonials = [
  {
    id: 1,
    name: 'SliceIndia',
    position: 'SliceIndia give us this feedback on our instagram page',
    image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/brands/logo/10705.png?ts=1712133869',
    content: "This isn't a drink. It's mango poetry in motion",
    rating: 5,
    company: 'SliceIndia',
  },
  {
    id: 2,
    name: 'Abhishek',
    position: 'Feedback on linkdin "HEINZ" ketchup post',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: '"Clean, bold, and super fresh! Loved the concept"',
    rating: 5,
    company: 'BrewBuzz Cafe',
  },
  {
    id: 3,
    name: 'Sneha Kapoor',
    position: 'Founder, FitFuel',
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: '"I was impressed by the minimal and clean style Saksham brought to our product branding. Great sense of color and typography."',
    rating: 5,
    company: 'FitFuel',
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16" data-scroll-animation>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Client Love</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-scroll-animation>
          {/* Main Testimonial */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-full -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-neon-cyan/20 to-transparent rounded-full translate-y-4 -translate-x-4"></div>

            {/* Quote Icon */}
            <Quote className="text-neon-purple/30 absolute top-6 left-6" size={48} />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-neon-purple fill-current" size={24} />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-center text-gray-200 leading-relaxed mb-8 font-light">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-neon-purple/50"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20"></div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-400">{testimonials[currentIndex].position}</div>
                  <div className="text-neon-purple text-sm">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect w-12 h-12 rounded-full flex items-center justify-center hover:glow-effect transition-all duration-300 group"
          >
            <ChevronLeft className="text-neon-purple group-hover:text-neon-cyan" size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect w-12 h-12 rounded-full flex items-center justify-center hover:glow-effect transition-all duration-300 group"
          >
            <ChevronRight className="text-neon-purple group-hover:text-neon-cyan" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-neon-purple shadow-lg shadow-neon-purple/50'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Secondary Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-4xl mx-auto">
          {testimonials.filter((_, index) => index !== currentIndex).slice(0, 2).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-effect p-6 rounded-2xl opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer"
              onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm line-clamp-3">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};