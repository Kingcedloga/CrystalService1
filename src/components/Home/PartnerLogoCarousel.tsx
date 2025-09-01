import React from 'react';
import { motion } from 'framer-motion';
import { mockPartnersLogos } from '../../data/mockData';

export const PartnerLogoCarousel: React.FC = () => {
  // Duplicate the logos array to create seamless infinite scroll
  const duplicatedLogos = [...mockPartnersLogos, ...mockPartnersLogos];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos Partenaires de Confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les leaders mondiaux du transport et de la logistique 
            pour vous offrir les meilleures solutions.
          </p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll-logos">
              {duplicatedLogos.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Vous souhaitez devenir notre partenaire ?
          </p>
          <a
            href="/partners"
            className="inline-flex items-center text-brand-blue-600 hover:text-brand-blue-700 font-medium"
          >
            Découvrir nos opportunités de partenariat
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};