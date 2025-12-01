import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, FileText, Users, CheckCircle, ArrowRight, Lightbulb, Building } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export const Consultance: React.FC = () => {
  // Images pour le diaporama
  const heroImages = [
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg', // Business meeting
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg', // Documents
    'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg', // Consultation
    'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg', // Business handshake
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effet pour changer d'image automatiquement
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    {
      icon: Briefcase,
      title: 'Sous-traitance Commerciale',
      description: 'Accompagnement complet dans vos projets de sous-traitance',
      features: [
        'Identification de partenaires qualifiés',
        'Négociation de contrats',
        'Suivi et contrôle qualité',
        'Gestion des relations commerciales'
      ],
      timeframe: 'Selon projet', 
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Facilitation Administrative',
      description: 'Assistance pour vos démarches auprès des administrations',
      features: [
        'Obtention de licences et permis',
        'Démarches RCCM et fiscales',
        'Certificats et attestations',
        'Suivi des dossiers administratifs'
      ],
      timeframe: 'Selon projet', 
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Conseil Stratégique',
      description: 'Expertise conseil pour le développement de votre activité',
      features: [
        'Étude de marché et faisabilité',
        'Stratégie d\'implantation en RDC',
        'Optimisation des processus',
        'Formation et accompagnement'
      ],
      timeframe: '2-8 semaines', 
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const advantages = [
    {
      title: 'Expertise Locale',
      description: 'Connaissance approfondie du marché et des réglementations congolaises',
      icon: Building
    },
    {
      title: 'Réseau Étendu',
      description: 'Contacts privilégiés avec les administrations et partenaires locaux',
      icon: Users
    },
    {
      title: 'Accompagnement Personnalisé',
      description: 'Solutions sur mesure adaptées à vos besoins spécifiques',
      icon: Lightbulb
    }
  ];

  return (
    <div className="min-h-screen"> 
      {/* Hero Section */}
      <section className="relative text-white py-16 overflow-hidden min-h-[75vh] mt-[-5rem] lg:mt-[-6rem] z-10">
        {/* Diaporama d'images */}
        <div className="absolute inset-0">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex]}
            alt="Services de consultance"
            className="w-full h-full object-cover object-center" 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
        
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-800/70 to-purple-700/80"></div>
        
        {/* Contenu textuel */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center pt-[5rem] lg:pt-[6rem]"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6"> 
              Services de Consultance
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Votre partenaire conseil pour la sous-traitance commerciale et la facilitation 
              de documents auprès des administrations congolaises.
            </p>
            <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 backdrop-blur-sm" asChild>
              <Link to="/quote">
                Demander une consultation
              </Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Indicateurs de diaporama */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-110' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Cards */}
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
              Nos Services de Consultance
            </h2>
            <p className="text-xl text-gray-600">
              Un accompagnement expert pour faciliter vos démarches et développer votre activité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="text-center"> 
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2"> 
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="text-sm text-gray-600">Délai moyen</div>
                      <div className="font-semibold text-gray-900">{service.timeframe}</div> 
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/quote"> 
                        Demander un devis
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
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
              Pourquoi Choisir Notre Consultance ?
            </h2>
            <p className="text-xl text-gray-600">
              15 ans d'expérience au service des entreprises en RDC
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <advantage.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre Processus de Consultance
            </h2>
            <p className="text-xl text-gray-600">
              Une approche structurée pour garantir votre succès
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Analyse des Besoins',
                description: 'Évaluation complète de vos objectifs et contraintes'
              },
              {
                step: '02',
                title: 'Stratégie Personnalisée',
                description: 'Élaboration d\'un plan d\'action adapté à votre situation'
              },
              {
                step: '03',
                title: 'Mise en Œuvre',
                description: 'Exécution des démarches avec suivi régulier'
              },
              {
                step: '04',
                title: 'Suivi & Optimisation',
                description: 'Accompagnement continu et ajustements si nécessaire'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                  {process.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
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
              Prêt à Développer Votre Activité ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contactez nos consultants pour une analyse gratuite de vos besoins
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link to="/quote">
                  Demander une consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-purple-600 hover:bg-white hover:text-gray-900" asChild>
                <Link to="/contact">
                  Parler à un consultant
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};