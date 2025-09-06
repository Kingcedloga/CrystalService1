import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export const Terms: React.FC = () => {
  const sections = [
    {
      icon: Info,
      title: 'Conditions Générales',
      content: 'En utilisant nos services, vous acceptez les présentes conditions d\'utilisation. Ces conditions s\'appliquent à tous nos services de logistique, transport et voyage.'
    },
    {
      icon: Scale,
      title: 'Responsabilités',
      content: 'LogisticsPro s\'engage à fournir des services de qualité selon les standards de l\'industrie. Notre responsabilité est limitée selon les conventions internationales applicables (Convention de Varsovie, Règles de Hambourg, etc.).'
    },
    {
      icon: AlertTriangle,
      title: 'Limitations',
      content: 'Notre responsabilité est limitée à la valeur déclarée des marchandises. Nous recommandons fortement la souscription d\'une assurance pour les envois de valeur élevée.'
    },
    {
      icon: FileText,
      title: 'Modifications',
      content: 'LogisticsPro se réserve le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur notre site web.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue-600 to-brand-blue-800 text-white py-16 min-h-[75vh] mt-[-5rem] lg:mt-[-6rem] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-[5rem] lg:pt-[6rem]"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Conditions d'Utilisation
            </h1>
            <p className="text-xl text-brand-blue-100 max-w-3xl mx-auto">
              Les conditions générales qui régissent l'utilisation de nos services 
              et la relation contractuelle avec LogisticsPro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-gray-600 text-center mb-8">
              Dernière mise à jour: 15 janvier 2025
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <section.icon className="h-5 w-5 mr-2 text-brand-blue-600" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{section.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card>
              <CardHeader>
                <CardTitle>Conditions Spécifiques par Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Services de Transport</h4>
                  <p className="text-gray-600 text-sm">
                    Les délais de transport sont indicatifs et peuvent varier selon les conditions 
                    climatiques, douanières et logistiques. Les marchandises dangereuses sont 
                    soumises à des conditions particulières.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Services de Voyage</h4>
                  <p className="text-gray-600 text-sm">
                    Les tarifs de voyage sont sujets aux conditions des compagnies aériennes et 
                    peuvent varier selon la disponibilité. Les conditions d'annulation varient 
                    selon le type de billet.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Services Douaniers</h4>
                  <p className="text-gray-600 text-sm">
                    Les délais de dédouanement dépendent des autorités douanières et de la 
                    complétude des documents fournis. Des frais additionnels peuvent s'appliquer 
                    en cas de contrôle approfondi.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};