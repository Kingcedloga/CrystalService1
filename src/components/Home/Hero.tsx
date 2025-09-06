import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Globe } from 'lucide-react';
import { Button } from '../ui/button';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-brand-blue-600 via-brand-blue-700 to-brand-blue-800"> 
      <div className="absolute inset-0 bg-black/10 bg-gradient-to-br from-brand-blue-600 via-brand-blue-700 to-brand-blue-800"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center bg-brand-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm font-medium">Votre partenaire logistique de confiance</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Solutions Logistiques
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-200 to-cyan-200 leading-tight mb-6">
                & Voyage Expert
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-5 leading-relaxed">
              Dédouanement, transport de fret et services de voyage professionnels 
              à travers la République Démocratique du Congo et l'Afrique.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Shield, text: 'Sécurisé & Fiable' },
                { icon: Clock, text: 'Service 24/7' },
                { icon: Globe, text: 'Réseau National' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2 text-blue-100"
                >
                  <feature.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link to="/quote">
                  Demander un devis
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */} 
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/tracking">
                  Suivre une expédition
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg"
                alt="Logistics professional"
                className="rounded-2xl shadow-2xl w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="text-center text-brand-blue-500">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-6 -right-6 bg-orange-500 rounded-xl p-4 shadow-xl text-white"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm">Clients satisfaits</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};