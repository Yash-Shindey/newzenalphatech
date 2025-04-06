
import { useState, useEffect } from 'react';
import { testimonials } from '@/lib/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RatingStars from '@/components/products/RatingStars';

const TestimonialSlider = () => {
  // For mobile we'll show 1, for tablets 2, for desktop 3
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update slides to show based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (totalSlides - slidesToShow + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - slidesToShow : prev - 1));
  };

  // Get sentiment class based on the sentiment
  const getSentimentClass = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'border-green-500 bg-green-50';
      case 'neutral':
        return 'border-yellow-500 bg-yellow-50';
      case 'negative':
        return 'border-red-500 bg-red-50';
      default:
        return '';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">What Our Customers Say</h2>
        
        <div className="relative mt-12">
          {/* Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="p-4"
                  style={{ flex: `0 0 ${100 / slidesToShow}%` }}
                >
                  <div className={`p-6 rounded-lg shadow-md border-l-4 h-full ${getSentimentClass(testimonial.sentiment)}`}>
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.customerImage} 
                        alt={testimonial.customerName} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.customerName}</h4>
                        <RatingStars rating={testimonial.rating} size="sm" />
                      </div>
                    </div>
                    <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          {currentIndex > 0 && (
            <button 
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}

          {currentIndex < totalSlides - slidesToShow && (
            <button 
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
