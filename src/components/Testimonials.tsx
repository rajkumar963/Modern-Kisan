
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type Testimonial = {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
  crop: string;
  rating: number;
};

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Patel',
      location: 'Gujarat',
      image: 'https://images.unsplash.com/photo-1590845947676-fa9486968b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      text: 'The drone monitoring course helped me identify pest issues early, saving my cotton crop. The videos were easy to understand and I could watch them on my phone during breaks.',
      crop: 'Cotton',
      rating: 5,
    },
    {
      id: 2,
      name: 'Laxmi Devi',
      location: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1573497491765-55d5c4e5d1a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      text: 'Learning about organic certification in Hindi made the process so much clearer. I\'ve now converted my farm to organic practices and my profits have increased by 40%.',
      crop: 'Millet',
      rating: 5,
    },
    {
      id: 3,
      name: 'Venkatesh Reddy',
      location: 'Telangana',
      image: 'https://images.unsplash.com/photo-1569470658158-1e2a83859980?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      text: 'The smart irrigation course taught me how to reduce my water usage by 30% while improving my rice yield. The practical demonstrations made it easy to implement.',
      crop: 'Rice',
      rating: 4,
    },
  ];

  const nextTestimonial = () => {
    setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-earth-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="chip bg-earth-100 text-earth-800 mb-4">Success Stories</span>
          <h2 className="section-title text-earth-900">
            Farmer Testimonials
          </h2>
          <p className="section-subtitle text-earth-700/80">
            Hear from farmers who have transformed their practices and improved their yields with Modern Kisan.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl glass-card bg-white/70">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  active === index
                    ? "bg-earth-500 w-8"
                    : "bg-earth-200 hover:bg-earth-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-earth-700 hover:bg-earth-50 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-earth-700 hover:bg-earth-50 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, location, image, text, crop, rating } = testimonial;

  return (
    <div className="min-w-full p-8 md:p-12">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl font-bold text-earth-900">{name}</h3>
          <p className="text-earth-600 mb-2">{location}</p>
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="chip bg-earth-100 text-earth-800">
            {crop} Farmer
          </span>
        </div>
        <div className="w-full md:w-2/3">
          <blockquote className="text-lg md:text-xl italic text-earth-800 leading-relaxed">
            "{text}"
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
