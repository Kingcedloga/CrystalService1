import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Search, Phone, Handshake } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export const CTASection: React.FC = () => {
  const ctas = [
    {
      icon: FileText,
      title: 'Demander un devis',
      description: 'Obtenez un devis personnalisé pour vos besoins logistiques',
      link: '/quote',
      color: 'bg-brand-blue-600 hover:bg-brand-blue-700'
    },
    {
      icon: Search,
      title: 'Suivre une expédition',
      description: 'Suivez vos envois en temps réel avec notre système de tracking',
      link: '/tracking',
      color: 'bg-teal-600 hover:bg-teal-700'
    },
    {
      icon: Phone,
      title: 'Contacter un conseiller',
      description: 'Parlez à nos experts pour des conseils personnalisés',
      link: '/contact',
      color: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      icon: Handshake,
      title: 'Devenez partenaire',
      description: 'Rejoignez notre réseau de partenaires de confiance',
      link: '/partners',
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Comment pouvons-nous vous aider ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choisissez l'action qui correspond à vos besoins et laissez-nous vous accompagner
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctas.map((cta, index) => (
            <motion.div
              key={cta.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group bg-white">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 mx-auto rounded-full ${cta.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <cta.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {cta.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {cta.description}
                  </p>
                  <Button className={`w-full ${cta.color}`} asChild>
                    <Link to={cta.link}>
                      Commencer
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};