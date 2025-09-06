import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Anchor, Ship, FileCheck, Users, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export const MaritimeRepresentation: React.FC = () => {
  const services = [
    {
      icon: Anchor,
      title: 'Représentation Navire',
      description: 'Représentation complète de votre navire dans les ports congolais',
      features: [
        'Formalités d\'entrée et de sortie',
        'Coordination avec les autorités portuaires',
        'Gestion des équipages',
        'Assistance 24/7'
      ],
      timeframe: 'Service continu',
      color: 'from-brand-blue-500 to-brand-blue-600'
    },
    {
      icon: FileCheck,
      title: 'Documentation Maritime',
      description: 'Gestion complète de tous les documents maritimes',
      features: [
        'Manifestes de cargaison',
        'Certificats de sécurité',
        'Documents d\'équipage',
        'Déclarations douanières'
      ],
      timeframe: '2-4 heures',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'Services Équipage',
      description: 'Assistance complète pour les équipages de navires',
      features: [
        'Changement d\'équipage',
        'Assistance médicale',
        'Approvisionnement navire',
        'Services de communication'
      ],
      timeframe: 'Selon besoins',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const ports = [
    { name: 'Port de Matadi', description: 'Principal port maritime de la RDC' },
    { name: 'Port de Boma', description: 'Port pétrolier et commercial' },
    { name: 'Port de Banana', description: 'Terminal conteneurs moderne' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 min-h-[75vh] mt-[-5rem] lg:mt-[-6rem] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-[5rem] lg:pt-[6rem]"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Représentation Maritime
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Votre agent maritime de confiance dans tous les ports de la RDC. 
              Représentation complète de navires et services portuaires professionnels.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/quote">
                {/* <Anchor className="h-5 w-5 mr-2" />  */} 
                Demander nos services
              </Link>
            </Button>
          </motion.div>
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
              Nos Services de Représentation
            </h2>
            <p className="text-xl text-gray-600">
              Une gamme complète de services maritimes pour faciliter vos opérations portuaires
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
                      <div className="text-sm text-gray-600">Disponibilité</div>
                      <div className="font-semibold text-gray-900">{service.timeframe}</div>
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/quote">
                        Demander un devis
                        {/* <ArrowRight className="ml-2 h-4 w-4" />  */} 
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ports Coverage */}
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
              Couverture Portuaire
            </h2>
            <p className="text-xl text-gray-600">
              Nous représentons vos navires dans tous les principaux ports de la RDC
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ports.map((port, index) => (
              <motion.div
                key={port.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <Ship className="h-12 w-12 text-brand-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {port.name}
                    </h3>
                    <p className="text-gray-600">
                      {port.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Pourquoi Choisir Crystal Services ?
            </h2>
            <p className="text-xl text-gray-600">
              15 ans d'expérience dans la représentation maritime en RDC
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Expertise Locale
                  </h3>
                  <p className="text-gray-600">
                    Connaissance approfondie des réglementations portuaires et douanières congolaises.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Équipe Dédiée
                  </h3>
                  <p className="text-gray-600">
                    Personnel qualifié disponible 24/7 dans tous les ports pour vos navires.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
              Besoin de Représentation Maritime ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contactez nos experts pour une représentation professionnelle de vos navires
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-blue-500 hover:bg-blue-600" asChild>
                <Link to="/quote">
                  Demander un devis
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-brand-blue-500 hover:bg-white hover:text-gray-900" asChild>
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};