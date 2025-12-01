import React from 'react';
import { Hero } from '../components/Home/Hero';
import { ServicesSection } from '../components/Home/ServicesSection';
// import { StatsSection } from '../components/Home/StatsSection';
import { CTASection } from '../components/Home/CTASection';
import { PartnerLogoCarousel } from '../components/Home/PartnerLogoCarousel';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      {/* <StatsSection /> */}
      <PartnerLogoCarousel />
      <CTASection />
    </>
  );
};