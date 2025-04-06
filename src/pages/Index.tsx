
import Layout from '@/components/layout/Layout';
import HeroSlider from '@/components/home/HeroSlider';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import OfferBanner from '@/components/home/OfferBanner';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <CategoryShowcase />
      <FeaturedProducts />
      <OfferBanner />
      <TestimonialSlider />
      <Newsletter />
    </Layout>
  );
};

export default Index;
