import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Truck, Ship, Plane, Clock, Shield, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export const Freight: React.FC = () => {
  const transportModes = [
    {
      icon: Truck,
      title: 'Transport Terrestre',
      description: 'Solutions routières et ferroviaires fiables',
      features: [
        'Camions dédiés et groupage',
        'Transport de marchandises lourdes',
        'Livraison porte-à-porte',
        'Suivi GPS en temps réel'
      ],
      timeframe: '1-5 jours',
      capacity: 'Jusqu\'à 25 tonnes',
      color: 'from-brand-blue-500 to-brand-blue-600'
    },
    {
      icon: Ship,
      title: 'Transport Maritime',
      description: 'Fret maritime économique pour gros volumes',
      features: [
        'Conteneurs FCL et LCL',
        'Marchandises en vrac',
        'Transport intercontinental',
        'Assurance maritime complète'
      ],
      timeframe: '15-45 jours',
      capacity: 'Conteneurs 20\' et 40\'',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Plane,
      title: 'Transport Aérien',
      description: 'Solutions rapides pour marchandises urgentes',
      features: [
        'Livraison express 24-48h',
        'Marchandises périssables',
        'Produits de haute valeur',
        'Réseau international'
      ],
      timeframe: '1-3 jours',
      capacity: 'Jusqu\'à 10 tonnes',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const specialServices = [
    {
      title: 'Groupage LCL',
      description: 'Optimisez vos coûts avec notre service de groupage pour petites quantités',
      icon: Package
    },
    {
      title: 'Transport Express',
      description: 'Service prioritaire pour vos envois urgents avec garantie de délai',
      icon: Clock
    },
    {
      title: 'Assurance Complète',
      description: 'Protection totale de vos marchandises pendant tout le transport',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Fret & Transport
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Solutions de transport multimodal adaptées à tous vos besoins. 
              De la petite expédition au transport de gros volumes.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/quote">
                <Package className="h-5 w-5 mr-2" />
                Calculer mon transport
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Transport Modes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Modes de Transport
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le mode de transport optimal selon vos contraintes de délai et budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transportModes.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${mode.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <mode.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{mode.title}</CardTitle>
                    <CardDescription>{mode.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {mode.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500">Délai de livraison</div>
                        <div className="font-semibold text-gray-900">{mode.timeframe}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500">Capacité</div>
                        <div className="font-semibold text-gray-900">{mode.capacity}</div>
                      </div>
                    </div>
                    
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/quote">
                        Demander un devis
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services Spécialisés
            </h2>
            <p className="text-xl text-gray-600">
              Des solutions sur mesure pour répondre à vos besoins spécifiques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Prêt à expédier vos marchandises ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contactez nos experts pour une solution personnalisée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link to="/quote" className="bg-brand-blue-600 hover:bg-brand-blue-700">
                  Obtenir un devis gratuit
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <Link to="/contact">
                  Parler à un expert
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};