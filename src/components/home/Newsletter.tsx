
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
        variant: 'destructive'
      });
      return;
    }

    // Simulate form submission
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      
      toast({
        title: 'Subscription successful!',
        description: 'Thank you for subscribing to our newsletter.',
      });
    }, 1500);
  };

  return (
    <section className="py-16 bg-zenalpha-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 text-zenalpha-gold" />
          
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Join Our Newsletter
          </h2>
          
          <p className="text-lg opacity-90 mb-8">
            Subscribe to receive updates on new arrivals, special offers, and exclusive discounts.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-zenalpha-gold"
            />
            
            <Button 
              type="submit" 
              className="bg-zenalpha-gold hover:bg-white text-black transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          
          <p className="text-sm opacity-70 mt-4">
            By subscribing, you agree to our{' '}
            <a href="/privacy" className="underline hover:text-zenalpha-gold transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
