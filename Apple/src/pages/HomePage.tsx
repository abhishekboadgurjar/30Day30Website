import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import Specifications from '../components/Specifications';
import ImageGallery from '../components/ImageGallery';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <ProductShowcase />
      <Specifications />
      <ImageGallery />
      <CallToAction />
    </>
  );
};

export default HomePage;