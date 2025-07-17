import { useEffect, useState } from 'react';

type Testimonial = {
  content: string;
  name: string;
};

const testimonials: Testimonial[] = [
  {
    content: "This isn't a drink. It's mango poetry in motion",
    name: 'SliceIndia',
  },
  {
    content: "Clean, bold, and super fresh! Loved the concept",
    name: 'Abhishek',
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className="text-3xl text-center text-white">Client Testimonials</h2>
      <p className="text-center text-gray-400 mt-2 mb-6">
        {testimonials[currentIndex].content}
      </p>
      <div className="text-center text-white font-bold">
        {testimonials[currentIndex].name}
      </div>
    </section>
  );
};
