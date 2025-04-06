
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { bannerOffer } from '@/lib/data';
import { useState, useEffect } from 'react';

const OfferBanner = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const expiryDate = new Date(bannerOffer.expiryDate);
      const difference = expiryDate.getTime() - now.getTime();

      if (difference <= 0) {
        // Offer has expired
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Initial calculation
    calculateTimeRemaining();

    // Update every second
    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bannerOffer.background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-3">
          {bannerOffer.headline}
        </h2>
        <p className="text-xl opacity-90 mb-8">
          {bannerOffer.subheadline}
        </p>
        
        {/* Countdown Timer */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-4 gap-4 max-w-md w-full">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-lg">
              <div className="text-3xl font-bold">{timeRemaining.days}</div>
              <div className="text-xs uppercase tracking-wider mt-1">Days</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-lg">
              <div className="text-3xl font-bold">{timeRemaining.hours}</div>
              <div className="text-xs uppercase tracking-wider mt-1">Hours</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-lg">
              <div className="text-3xl font-bold">{timeRemaining.minutes}</div>
              <div className="text-xs uppercase tracking-wider mt-1">Minutes</div>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-3 rounded-lg">
              <div className="text-3xl font-bold">{timeRemaining.seconds}</div>
              <div className="text-xs uppercase tracking-wider mt-1">Seconds</div>
            </div>
          </div>
        </div>
        
        <Button asChild size="lg" className="bg-zenalpha-gold hover:bg-white text-black transition-colors">
          <Link to={bannerOffer.buttonLink}>
            {bannerOffer.buttonText}
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default OfferBanner;
