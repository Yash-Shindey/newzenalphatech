
import { Star, StarHalf } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

const RatingStars = ({ rating, size = 'md' }: RatingStarsProps) => {
  // Determine star size
  const starSize = size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-6 h-6' : 'w-4 h-4';
  
  // Create an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    
    if (value <= rating) {
      // Full star
      return <Star key={i} className={`${starSize} fill-current`} />;
    } else if (value - 0.5 <= rating) {
      // Half star
      return <StarHalf key={i} className={`${starSize} fill-current`} />;
    } else {
      // Empty star
      return <Star key={i} className={`${starSize} text-gray-300`} />;
    }
  });

  return (
    <div className="rating-stars">
      {stars}
    </div>
  );
};

export default RatingStars;
