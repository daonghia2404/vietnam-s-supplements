import React from 'react';

import HomeBanner from '@/containers/HomeBanner';
import TradeMark from '@/containers/TradeMark';
import ProductsCarousel from '@/containers/ProductsCarousel';
import ReviewsCarousel from '@/containers/ReviewsCarousel';
import QuanlityStandards from '@/containers/QualityStandards';
import Footer from '@/containers/Footer';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <HomeBanner />
      <TradeMark />
      <ProductsCarousel />
      <ReviewsCarousel />
      <QuanlityStandards />
      <Footer />
    </div>
  );
};

export default Home;
